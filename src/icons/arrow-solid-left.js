import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ArrowSolidLeft = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 8 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8 16L-3.65565e-07 8L8 -2.38419e-07L8 16Z" />
    </svg>
  )
}

ArrowSolidLeft.propTypes = { className: PropTypes.string, size: PropTypes.string }
ArrowSolidLeft.defaultProps = { className: '', size: '' }

export default ArrowSolidLeft
