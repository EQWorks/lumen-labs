import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Columns = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${size ? iconSize[size] : ''} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1300_20499)">
        <path d="M0.3125 0.311249H2.1875V9.68625H0.3125V0.311249Z" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.06292 0.311249H5.93792V9.68625H4.06292V0.311249Z" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.8125 0.311249H9.6875V9.68625H7.8125V0.311249Z" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1300_20499">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

Columns.propTypes = { className: PropTypes.string, size: PropTypes.string }
Columns.defaultProps = { className: '', size: null }

export default Columns
