import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  xl: 'w-5 h-5',
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ChevronRight = forwardRef(({ className, size = 'xl', ...props }, ref) => (
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
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
))

ChevronRight.propTypes = { className: PropTypes.string, size: PropTypes.string }

ChevronRight.displayName = 'ChevronRight'

export default ChevronRight
