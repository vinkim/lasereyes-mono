import { IMempoolUtxo } from '@/types/btc'
import {
  FRACTAL_MAINNET,
  FRACTAL_TESTNET,
  MAINNET,
  P2PKH,
  P2SH,
  P2TR,
  P2WPKH,
  P2WSH,
  SIGNET,
  TESTNET,
  TESTNET4,
} from '@omnisat/lasereyes-react'
import * as bitcoin from 'bitcoinjs-lib'
import { Psbt } from 'bitcoinjs-lib'
import * as ecc2 from '@bitcoinerlab/secp256k1'
import axios from 'axios'
import { getMempoolSpaceUrl } from '@/lib/urls'

bitcoin.initEccLib(ecc2)

export const satoshisToBTC = (satoshis: number): string => {
  if (Number.isNaN(satoshis) || satoshis === undefined) return '--'
  const btcValue = satoshis / 100000000
  if (Number.isNaN(btcValue)) return '--'
  return btcValue.toFixed(8)
}

export const getBtcJsNetwork = (network: string): bitcoin.networks.Network => {
  return network === 'mainnet' ||
    network === 'fractal_mainnet' ||
    network === 'fractal_testnet'
    ? bitcoin.networks.bitcoin
    : bitcoin.networks.testnet
}

export const P2SH_P2WPKH = 'p2sh-p2wpkh'

export const getAddressType = (
  address: string,
  network: bitcoin.Network
): string => {
  try {
    const decoded = bitcoin.address.fromBase58Check(address)

    // Check the address version for P2PKH or P2SH
    if (decoded.version === network.pubKeyHash) return P2PKH
    if (decoded.version === network.scriptHash) {
      // It's a P2SH, but let's check if it wraps a SegWit script
      const script = bitcoin.script.decompile(decoded.hash)
      if (script && script.length === 2 && script[0] === bitcoin.opcodes.OP_0) {
        return P2SH_P2WPKH // Nested SegWit (P2SH-P2WPKH)
      }
      return P2SH
    }
  } catch (e) {
    // If fromBase58Check fails, try Bech32 (for SegWit addresses)
    try {
      const decoded = bitcoin.address.fromBech32(address)

      // Handle Bech32-based addresses (SegWit P2WPKH, P2WSH, P2TR)
      if (decoded.version === 0 && decoded.data.length === 20) return P2WPKH
      if (decoded.version === 0 && decoded.data.length === 32) return P2WSH
      if (decoded.version === 1 && decoded.data.length === 32) return P2TR
    } catch (e2) {
      return 'unknown'
    }
  }

  return 'unknown'
}

export async function createPsbt(
  inputs: IMempoolUtxo[],
  outputAddress: string,
  paymentPublicKey: string,
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof TESTNET4
    | typeof SIGNET
    | typeof FRACTAL_MAINNET
    | typeof FRACTAL_TESTNET
) {
  if (!outputAddress) return
  const utxoWithMostValue = inputs.reduce((acc, utxo) => {
    if (utxo.value > acc.value) {
      return utxo
    }
    return acc
  })
  const btcNetwork = getBtcJsNetwork(network)
  const psbt = new Psbt({
    network: btcNetwork,
  })
  const script = bitcoin.address.toOutputScript(
    outputAddress,
    getBitcoinNetwork(network)
  )
  if (!script) {
    throw new Error('Invalid output address')
  }
  if (getAddressType(outputAddress, getBtcJsNetwork(network)) === P2SH) {
    console.log('fetching tx hex')
    const txHexResponse = await axios.get(
      `${getMempoolSpaceUrl(network)}/api/tx/${utxoWithMostValue.txid}/hex`
    )
    const txHex = txHexResponse.data

    psbt.addInput({
      hash: utxoWithMostValue.txid,
      index: utxoWithMostValue.vout,
      nonWitnessUtxo: Buffer.from(txHex, 'hex'),
    })

    // If the address type is Nested SegWit (P2SH-P2WPKH), add redeemScript
    // if (
    //   getAddressType(outputAddress, getBtcJsNetwork(network)) === P2SH_P2WPKH
    // ) {
    console.log('adding redeem script')
    const redeemScript = getRedeemScript(paymentPublicKey, network)
    psbt.updateInput(0, { redeemScript })
    // }
  } else {
    // Handle P2PKH (legacy) with witnessUtxo
    psbt.addInput({
      hash: utxoWithMostValue.txid,
      index: utxoWithMostValue.vout,
      witnessUtxo: {
        script,
        value: utxoWithMostValue.value,
      },
    })
  }

  if (utxoWithMostValue.value - 546 < 1000) {
    throw new Error("Couldn't create test psbt: Insufficient funds")
  }

  psbt.addOutput({
    address: outputAddress,
    value: utxoWithMostValue.value - 1000,
  })

  return psbt
}

export function getRedeemScript(
  paymentPublicKey: string,
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof TESTNET4
    | typeof FRACTAL_MAINNET
    | typeof FRACTAL_TESTNET
) {
  const p2wpkh = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(paymentPublicKey, 'hex'),
    network: getBitcoinNetwork(network),
  })

  const p2sh = bitcoin.payments.p2sh({
    redeem: p2wpkh,
    network: getBitcoinNetwork(network),
  })
  return p2sh?.redeem?.output
}

export function estimateTxSize(
  taprootInputCount: number,
  nonTaprootInputCount: number,
  outputCount: number
): number {
  const baseTxSize = 10
  const taprootInputSize = 57
  const nonTaprootInputSize = 41
  const outputSize = 34
  const totalInputSize =
    taprootInputCount * taprootInputSize +
    nonTaprootInputCount * nonTaprootInputSize
  const totalOutputSize = outputCount * outputSize
  return baseTxSize + totalInputSize + totalOutputSize
}

// export function getAddressType(address: string) {
//   try {
//     bitcoin.address.fromBase58Check(address)
//     return P2PKH
//   } catch (e) {}
//
//   try {
//     bitcoin.address.fromBase58Check(address)
//     return 'p2psh'
//   } catch (e) {}
//
//   try {
//     const { version, data } = bitcoin.address.fromBech32(address)
//     if (version === 0) {
//       if (data.length === 20) {
//         return P2WPKH
//       } else if (data.length === 32) {
//         return P2WSH
//       }
//     } else if (version === 1 && data.length === 32) {
//       return P2TR
//     }
//   } catch (e) {}
//
//   throw new Error('Invalid address')
// }

export const getBitcoinNetwork = (
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof TESTNET4
    | typeof SIGNET
    | typeof FRACTAL_MAINNET
    | typeof FRACTAL_TESTNET
) => {
  if (network === TESTNET || network === TESTNET4 || network === SIGNET) {
    return bitcoin.networks.testnet
  } else {
    return bitcoin.networks.bitcoin
  }
}
