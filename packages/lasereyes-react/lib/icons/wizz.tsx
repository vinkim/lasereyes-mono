import * as React from 'react'

interface WizzLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  variant?: 'first' | 'second'
}

const WizzLogo: React.FC<WizzLogoProps> = ({
  size = 42,
  variant = 'first',
  className,
  ...props
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#000"
          d="M32 0H10C4.477 0 0 4.477 0 10v22c0 5.523 4.477 10 10 10h22c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10Z"
        />
        <g fillRule="evenodd" clipPath="url(#b)" clipRule="evenodd">
          <path
            fill="#FFD815"
            d="m26.507 17.74-1.623-1.623-1.624 1.623 1.623 1.623 1.624 1.624 1.623-1.624-1.623-1.623Z"
          />
          <path
            fill="#FF9813"
            d="m26.507 8-1.624 1.623 1.624 1.624 1.623-1.624L26.507 8ZM33 14.493l-1.623-1.623-1.624 1.623 1.624 1.623L33 14.493ZM23.26 27.48l1.623 1.623 1.624-1.623-1.623-1.624-1.624 1.624ZM11.897 16.117l1.623 1.623 1.623-1.623-1.623-1.624-1.623 1.624ZM20.014 8 18.39 9.623l1.624 1.624 1.623-1.624L20.014 8ZM13.52 11.247l1.624 1.623 1.623-1.623-1.623-1.624-1.624 1.624ZM31.377 19.363l-1.624 1.623 1.624 1.624L33 20.987l-1.623-1.624ZM28.13 25.856l1.623 1.624 1.624-1.624-1.624-1.623-1.623 1.623Z"
          />
          <path
            fill="#5B5B72"
            d="m26.507 20.986-1.624-1.623-1.623 1.623-1.623-1.623-1.623-1.623 1.623-1.624-1.623-1.623-1.624-1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623-1.623 1.623-.812-.811-1.623 1.623 1.623 1.623-1.623 1.624-1.543 1.542-1.542 1.543-1.624 1.623L8 31.377 9.623 33l1.624-1.623 1.623-1.624 1.543-1.542.08-.08 1.462-1.463.08-.08 1.544-1.543 1.623 1.623 1.623-1.623-.811-.812 1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623-1.623-1.623-1.624Z"
          />
          <path
            fill="#FF9813"
            d="m26.507 14.493-1.624-1.623-1.623 1.623-1.623-1.623-1.623 1.623 1.623 1.623-1.623 1.624 1.623 1.623 1.623 1.623 1.623-1.623-1.623-1.623 1.623-1.623 1.624 1.623 1.623-1.623-1.623-1.624Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h42v42H0z" />
        </clipPath>
        <clipPath id="b">
          <path fill="#fff" d="M8 8h25v25H8z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { WizzLogo }
