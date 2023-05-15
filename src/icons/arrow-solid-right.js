import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ArrowSolidRight = ({
  className = '',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 9 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0.984619 16L8.95385 8L0.984618 0L0.984619 16Z" />
    </svg>
  )
}

ArrowSolidRight.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default ArrowSolidRight
