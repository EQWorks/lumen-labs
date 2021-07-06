import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ChevronUp = ({ className, size }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
)

ChevronUp.propTypes = { className: PropTypes.string, size: PropTypes.string }
ChevronUp.defaultProps = { className: 'h-5 w-5', size: '' }
export default ChevronUp
