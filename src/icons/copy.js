import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Copy = ({ className, size, stroke, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.12895 4.08555L8.87641 4.33809L9.12895 4.08555C9.02848 3.98508 8.89222 3.92864 8.75014 3.92864H5.17871C5.03663 3.92864 4.90037 3.98508 4.7999 4.08555C4.69944 4.18601 4.643 4.32228 4.643 4.46436V8.75007C4.643 8.89215 4.69944 9.02841 4.7999 9.12888C4.90037 9.22934 5.03663 9.28578 5.17871 9.28578H8.75014C8.89222 9.28578 9.02848 9.22934 9.12895 9.12888C9.22941 9.02841 9.28585 8.89215 9.28585 8.75007V4.46436C9.28585 4.32228 9.22941 4.18602 9.12895 4.08555ZM9.643 8.75007C9.64262 8.98675 9.54843 9.21363 9.38107 9.381C9.2137 9.54836 8.98682 9.64255 8.75014 9.64293C8.75012 9.64293 8.75011 9.64293 8.75009 9.64293C8.74997 9.64293 8.74985 9.64293 8.74973 9.64293H5.17912C5.179 9.64293 5.17888 9.64293 5.17876 9.64293C5.17874 9.64293 5.17873 9.64293 5.17871 9.64293C4.94203 9.64255 4.71515 9.54836 4.54778 9.381C4.38037 9.21358 4.28617 8.98661 4.28585 8.74985V4.46457C4.28617 4.22782 4.38037 4.00084 4.54778 3.83343C4.7152 3.66601 4.94217 3.57182 5.17893 3.5715H8.74992C8.98668 3.57182 9.21365 3.66601 9.38107 3.83343C9.54843 4.00079 9.64262 4.22768 9.643 4.46436C9.643 4.46437 9.643 4.46439 9.643 4.46441C9.643 4.46453 9.643 4.46464 9.643 4.46476V8.74966C9.643 8.74978 9.643 8.7499 9.643 8.75002C9.643 8.75003 9.643 8.75005 9.643 8.75007Z" stroke={stroke} strokeWidth="0.714286"/>
      <path d="M1.01228 0.410945L0.909253 0.535688L1.01228 0.410945ZM1.01228 0.410945C0.993883 0.395749 0.97237 0.384782 0.949265 0.37882C0.926159 0.372858 0.902025 0.372046 0.878571 0.376442L0.910226 0.535728L1.05574 0.466757C1.04551 0.445194 1.03068 0.426141 1.01228 0.410945ZM3.4108 2.69653C2.94196 3.16537 2.67857 3.80126 2.67857 4.4643V7.50001H1.07143C0.881988 7.50001 0.700307 7.42476 0.566352 7.2908C0.432398 7.15685 0.357143 6.97517 0.357143 6.78573L0.357143 1.44016C0.357143 1.44013 0.357143 1.44011 0.357143 1.44009C0.357143 1.44006 0.357143 1.44004 0.357143 1.44001C0.357243 1.2713 0.416065 1.10788 0.523515 0.977805C0.582579 0.906304 0.654312 0.847329 0.734455 0.803408C0.791235 1.17794 0.966175 1.52728 1.23731 1.79842C1.5722 2.1333 2.0264 2.32144 2.5 2.32144H3.89086C3.71756 2.42557 3.55616 2.55118 3.4108 2.69653ZM4.99051 1.97138C5.0612 1.91909 5.12833 1.86135 5.19126 1.79842C5.4624 1.52728 5.63734 1.17794 5.69412 0.803407C5.77426 0.847329 5.84599 0.906303 5.90506 0.977805L6.1804 0.750353L5.90506 0.977806C6.01251 1.10788 6.07133 1.2713 6.07143 1.44001C6.07143 1.44006 6.07143 1.44011 6.07143 1.44016V1.9643H5.17857C5.1156 1.9643 5.05287 1.96667 4.99051 1.97138Z" stroke={stroke} strokeWidth="0.714286"/>
      <path d="M4.46436 0.535714C4.46436 0.677795 4.40791 0.814056 4.30745 0.914521C4.20698 1.01499 4.07072 1.07143 3.92864 1.07143H2.50007C2.35799 1.07143 2.22173 1.01499 2.12126 0.914521C2.0208 0.814056 1.96436 0.677795 1.96436 0.535714C1.96436 0.393634 2.0208 0.257373 2.12126 0.156907C2.22173 0.0564412 2.35799 0 2.50007 0L3.92864 0C4.07072 0 4.20698 0.0564412 4.30745 0.156907C4.40791 0.257373 4.46436 0.393634 4.46436 0.535714Z" />
      <path d="M7.67864 6.07143H6.25007C6.10799 6.07143 5.97173 6.01499 5.87126 5.91452C5.7708 5.81406 5.71436 5.67779 5.71436 5.53571C5.71436 5.39363 5.7708 5.25737 5.87126 5.15691C5.97173 5.05644 6.10799 5 6.25007 5H7.67864C7.82072 5 7.95698 5.05644 8.05745 5.15691C8.15791 5.25737 8.21436 5.39363 8.21436 5.53571C8.21436 5.67779 8.15791 5.81406 8.05745 5.91452C7.95698 6.01499 7.82072 6.07143 7.67864 6.07143Z" />
      <path d="M7.67864 8.21449H6.25007C6.10799 8.21449 5.97173 8.15805 5.87126 8.05759C5.7708 7.95712 5.71436 7.82086 5.71436 7.67878C5.71436 7.5367 5.7708 7.40044 5.87126 7.29997C5.97173 7.19951 6.10799 7.14307 6.25007 7.14307H7.67864C7.82072 7.14307 7.95698 7.19951 8.05745 7.29997C8.15791 7.40044 8.21436 7.5367 8.21436 7.67878C8.21436 7.82086 8.15791 7.95712 8.05745 8.05759C7.95698 8.15805 7.82072 8.21449 7.67864 8.21449Z" />
    </svg>
  )
}

Copy.propTypes = { className: PropTypes.string, size: PropTypes.string, stroke: PropTypes.string }
Copy.defaultProps = { className: '', size: 'lg', stroke: '#3174D5' }

export default Copy