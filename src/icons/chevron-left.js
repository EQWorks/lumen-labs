import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  xl: 'w-5 h-5',
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ChevronLeft = forwardRef(({ className = '', size = 'xl', ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
))

ChevronLeft.propTypes = { className: PropTypes.string, size: PropTypes.string }

ChevronLeft.displayName = 'ChevronLeft'

export default ChevronLeft
