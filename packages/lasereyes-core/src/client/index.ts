// Import necessary dependencies and types
import { MapStore, WritableAtom, subscribeKeys } from 'nanostores'
import { Config, NetworkType, ProviderType } from '../types'
import {
  LEATHER,
  MAGIC_EDEN,
  OKX,
  OP_NET,
  ORANGE,
  OYL,
  PHANTOM,
  UNISAT,
  WIZZ,
  XVERSE,
} from '../constants/wallets'
import { LOCAL_STORAGE_DEFAULT_WALLET } from '../constants/settings'
import { WalletProvider } from './providers'
import UnisatProvider from './providers/unisat'
import { isBase64, isHex } from '../lib/helpers'
import * as bitcoin from 'bitcoinjs-lib'
import { LaserEyesStoreType } from './types'
import { triggerDOMShakeHack } from './utils'
import XVerseProvider from './providers/xverse'
import { WizzProvider } from './providers/wizz'
import OylProvider from './providers/oyl'
import LeatherProvider from './providers/leather'
import OrangeProvider from './providers/orange'
import OkxProvider from './providers/okx'
import MagicEdenProvider from './providers/magic-eden'
import PhantomProvider from './providers/phantom'
import OpNetProvider from './providers/op-net'

/**
 * Main client class for LaserEyes functionality
 */
export class LaserEyesClient {
  readonly $store: MapStore<LaserEyesStoreType>
  readonly $network: WritableAtom<NetworkType>
  readonly $providerMap: Partial<Record<ProviderType, WalletProvider>>

  /**
   * Cleanup method to dispose of all providers
   */
  dispose() {
    Object.values(this.$providerMap).forEach((provider) => provider?.dispose())
  }

  /**
   * Constructor for LaserEyesClient
   * @param stores - Object containing store and network atoms
   * @param config - Optional configuration object
   */
  constructor(
    stores: {
      readonly $store: MapStore<LaserEyesStoreType>
      readonly $network: WritableAtom<NetworkType>
    },
    readonly config?: Config
  ) {
    this.$store = stores.$store
    this.$network = stores.$network

    // Initialize wallet providers
    this.$providerMap = {
      [LEATHER]: new LeatherProvider(stores, this, config),
      [MAGIC_EDEN]: new MagicEdenProvider(stores, this, config),
      [OKX]: new OkxProvider(stores, this, config),
      [OP_NET]: new OpNetProvider(stores, this, config),
      [ORANGE]: new OrangeProvider(stores, this, config),
      [OYL]: new OylProvider(stores, this, config),
      [PHANTOM]: new PhantomProvider(stores, this, config),
      [UNISAT]: new UnisatProvider(stores, this, config),
      [XVERSE]: new XVerseProvider(stores, this, config),
      [WIZZ]: new WizzProvider(stores, this, config),
    }

    // Set up network change watcher
    this.$network.subscribe(this.watchNetworkChange.bind(this))

    // Set up initialization state watcher
    subscribeKeys(this.$store, ['isInitializing'], (v) =>
      this.handleIsInitializingChanged(v.isInitializing)
    )

    // Handle network configuration if provided
    if (config && config.network) {
      this.$network.set(config.network)
      this.getNetwork().then((foundNetwork) => {
        try {
          if (config.network !== foundNetwork) {
            this.switchNetwork(config.network)
          }
        } catch (e) {
          this.disconnect()
        }
      })
    }

    // Set up provider availability watcher
    subscribeKeys(
      this.$store,
      ['hasProvider'],
      this.checkInitializationComplete.bind(this)
    )

    // Trigger DOM shake hack to check for wallet providers
    triggerDOMShakeHack()
  }

  /**
   * Handle changes in initialization state
   * @param value - Boolean indicating if initializing
   */
  private handleIsInitializingChanged(value: boolean) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      if (!value) {
        const defaultWallet = localStorage?.getItem(
          LOCAL_STORAGE_DEFAULT_WALLET
        ) as ProviderType | undefined
        if (defaultWallet) {
          this.$store.setKey('provider', defaultWallet)
          this.connect(defaultWallet)
        }
      }
    }
  }

  /**
   * Connect to a wallet provider
   * @param defaultWallet - The wallet provider to connect to
   */
  async connect(defaultWallet: ProviderType) {
    this.$store.setKey('isConnecting', true)
    try {
      localStorage?.setItem(LOCAL_STORAGE_DEFAULT_WALLET, defaultWallet)
      if (!this.$providerMap[defaultWallet]) {
        throw new Error('Unsupported wallet provider')
      }
      const provider = this.$providerMap[defaultWallet]
      await provider?.connect(defaultWallet)
      this.$store.setKey('connected', true)
    } catch (error) {
      console.error(error)
      this.$store.setKey('isConnecting', false)
      this.disconnect()
      throw error
    } finally {
      this.$store.setKey('isConnecting', false)
    }
  }

  /**
   * Request accounts from the connected wallet
   */
  async requestAccounts() {
    if (!this.$store.get().provider) {
      throw new Error('No wallet provider connected')
    }

    if (!this.$providerMap[this.$store.get().provider!]) {
      throw new Error("The connected wallet doesn't support this method")
    }

    try {
      return await this.$providerMap[
        this.$store.get().provider!
      ]?.requestAccounts()
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.toLowerCase().includes('not implemented')) {
          throw new Error("The connected wallet doesn't support this method")
        }
      }
      throw error
    }
  }

  /**
   * Disconnect the current wallet
   */
  disconnect() {
    this.$store.setKey('connected', false)
    this.$store.setKey('provider', undefined)
    this.$store.setKey('address', '')
    this.$store.setKey('paymentAddress', '')
    this.$store.setKey('publicKey', '')
    this.$store.setKey('paymentPublicKey', '')
    this.$store.setKey('balance', undefined)
    this.$store.setKey('accounts', [])
    localStorage?.removeItem(LOCAL_STORAGE_DEFAULT_WALLET)
  }

  /**
   * Switch to a different network
   * @param network - The network to switch to
   */
  switchNetwork(network: NetworkType) {
    try {
      if (this.$store.get().provider) {
        this.$providerMap[this.$store.get().provider!]?.switchNetwork(network)
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.toLowerCase().includes('not implemented')) {
          this.disconnect()
          throw new Error(
            "The connected wallet doesn't support programmatic network changes.."
          )
        }
      }
      throw error
    }
  }

  /**
   * Check if initialization is complete
   */
  checkInitializationComplete() {
    if (
      Object.values(this.$store.get().hasProvider).every((e) => e !== undefined)
    ) {
      this.$store.setKey('isInitializing', false)
    }
  }

  /**
   * Watch for network changes
   */
  private watchNetworkChange() {
    this.$store.setKey('balance', undefined)
  }

  /**
   * Get the current network
   */
  async getNetwork() {
    if (
      this.$store.get().provider &&
      this.$providerMap[this.$store.get().provider!]
    ) {
      return await this.$providerMap[this.$store.get().provider!]?.getNetwork()
    }

    return this.$network.get()
  }

  /**
   * Send BTC to a specified address
   * @param to - The recipient's address
   * @param amount - The amount of BTC to send
   */
  async sendBTC(to: string, amount: number) {
    if (amount <= 0) throw new Error('Amount must be greater than 0')
    if (!Number.isInteger(amount)) throw new Error('Amount must be an integer')
    if (!this.$store.get().provider) throw new Error('No wallet connected')
    if (this.$providerMap[this.$store.get().provider!]) {
      try {
        return await this.$providerMap[this.$store.get().provider!]?.sendBTC(
          to,
          amount
        )
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error(
              "The connected wallet doesn't support sending BTC..."
            )
          }
        }
        throw error
      }
    }
  }

  /**
   * Sign a message
   * @param message - The message to sign
   * @param toSignAddress - Optional address to sign with
   */
  async signMessage(message: string, toSignAddress?: string) {
    if (!this.$store.get().provider) return
    if (this.$providerMap[this.$store.get().provider!]) {
      try {
        return await this.$providerMap[
          this.$store.get().provider!
        ]?.signMessage(message, toSignAddress)
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error(
              "The connected wallet doesn't support message signing..."
            )
          }
        }
        throw error
      }
    }
  }

  /**
   * Sign a PSBT (Partially Signed Bitcoin Transaction)
   * @param tx - The PSBT to sign
   * @param finalize - Whether to finalize the PSBT
   * @param broadcast - Whether to broadcast the transaction
   */
  async signPsbt(tx: string, finalize = false, broadcast = false) {
    let psbtHex, psbtBase64

    if (!tx) throw new Error('No PSBT provided')
    if (isHex(tx)) {
      psbtBase64 = bitcoin.Psbt.fromHex(tx).toBase64()
      psbtHex = tx
    } else if (isBase64(tx)) {
      psbtBase64 = tx
      psbtHex = bitcoin.Psbt.fromBase64(tx).toHex()
    } else {
      throw new Error('Invalid PSBT format')
    }

    if (
      this.$store.get().provider &&
      this.$providerMap[this.$store.get().provider!]
    ) {
      try {
        const signedPsbt = await this.$providerMap[
          this.$store.get().provider!
        ]?.signPsbt(tx, psbtHex, psbtBase64, finalize, broadcast)
        return signedPsbt
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error(
              "The connected wallet doesn't support PSBT signing..."
            )
          }
        }
        throw error
      }
    } else {
      throw new Error('No wallet provider connected')
    }
  }

  /**
   * Push a signed PSBT to the network
   * @param tx - The signed PSBT to push
   */
  async pushPsbt(tx: string) {
    if (!this.$store.get().provider) return
    if (this.$providerMap[this.$store.get().provider!]) {
      try {
        return await this.$providerMap[this.$store.get().provider!]?.pushPsbt(
          tx
        )
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error(
              "The connected wallet doesn't support PSBT signing..."
            )
          }
        }
        throw error
      }
    }
  }

  /**
   * Get the public key from the connected wallet
   */
  async getPublicKey() {
    if (!this.$store.get().provider) return
    if (this.$providerMap[this.$store.get().provider!]) {
      try {
        return await this.$providerMap[
          this.$store.get().provider!
        ]?.getPublicKey()
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error("The connected wallet doesn't support this method")
          }
        }
        throw error
      }
    }
  }

  /**
   * Get the balance from the connected wallet
   */
  async getBalance() {
    if (!this.$store.get().provider) return
    if (this.$providerMap[this.$store.get().provider!]) {
      try {
        const bal =
          await this.$providerMap[this.$store.get().provider!]!.getBalance()
        this.$store.setKey('balance', BigInt(bal))
        return bal
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error("The connected wallet doesn't support this method")
          }
        }
        throw error
      }
    }
  }

  /**
   * Get inscriptions from the connected wallet
   */
  async getInscriptions() {
    if (!this.$store.get().provider) return
    if (this.$providerMap[this.$store.get().provider!]) {
      try {
        return await this.$providerMap[
          this.$store.get().provider!
        ]?.getInscriptions()
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.toLowerCase().includes('not implemented')) {
            throw new Error("The connected wallet doesn't support this method")
          }
        }
        throw error
      }
    }
  }
}
