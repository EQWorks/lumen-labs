import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ArrowSolidDown = ({
  className = '',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 5"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833313 0.333496L4.99998 4.50016L9.16665 0.333496H0.833313Z"
      />
    </svg>
  )
}

ArrowSolidDown.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default ArrowSolidDown
