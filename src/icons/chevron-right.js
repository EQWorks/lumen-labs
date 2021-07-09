import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const ChevronRight = forwardRef(({ className }, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" ref={ref} className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
))

ChevronRight.propTypes = { className: PropTypes.string }
ChevronRight.defaultProps = { className: '' }

ChevronRight.displayName = 'ChevronRight'

export default ChevronRight
