import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Filter = ({
  className = '',
  size = null,
  ...props
}) => {
  return (
    <svg
      className={`${size ? iconSize[size] : ''} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(0.7142857142857143,0,0,0.7142857142857143,0,0)">
        <path d="M13.5.5H.5a6.51,6.51,0,0,0,5,6.33V13.5l3-2V6.83A6.51,6.51,0,0,0,13.5.5Z" />
      </g>
    </svg>
  )
}

Filter.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Filter
