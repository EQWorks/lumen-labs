import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Brackets = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 10 8"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.17882 0.875L0.495492 3.55792C0.378322 3.67512 0.3125 3.83406 0.3125 3.99979C0.3125 4.16552 0.378322 4.32446 0.495492 4.44167L3.17882 7.125"
      strokeWidth="0.625"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.82129 0.875L9.50462 3.55792C9.62179 3.67512 9.68761 3.83406 9.68761 3.99979C9.68761 4.16552 9.62179 4.32446 9.50462 4.44167L6.82129 7.125"
      strokeWidth="0.625"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

Brackets.propTypes = { className: PropTypes.string, size: PropTypes.string }
Brackets.defaultProps = { className: '', size: '' }

export default Brackets
