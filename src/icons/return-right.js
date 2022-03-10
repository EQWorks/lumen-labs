import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ReturnRight = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 20 15"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 14.252L19.375 9.87695L15 5.50195"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.375 9.87695L1.875 9.87695C1.54348 9.87695 1.22554 9.74526 0.991118 9.51084C0.756697 9.27642 0.625 8.95847 0.625 8.62695V1.12695"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ReturnRight.propTypes = { className: PropTypes.string, size: PropTypes.string, color: PropTypes.string }
ReturnRight.defaultProps = { className: '', size: '' }

export default ReturnRight
