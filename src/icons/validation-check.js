import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ValidationCheck = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path
        d="M23.5 0.499L7 23.499 0.5 16.999"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)

ValidationCheck.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default ValidationCheck
