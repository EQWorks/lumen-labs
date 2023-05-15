import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Hash = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path d="M1.5625 3.43667H9.6875" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M0.3125 7.18667H8.4375" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 0.311668L1.875 9.68667" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.125 0.311668L5 9.68667" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

Hash.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Hash
