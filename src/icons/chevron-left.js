import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const ChevronLeft = forwardRef(({ className }, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" ref={ref} className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
))

ChevronLeft.propTypes = { className: PropTypes.string }
ChevronLeft.defaultProps = { className: '' }

ChevronLeft.displayName = 'ChevronLeft'

export default ChevronLeft
