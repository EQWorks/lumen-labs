import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Add = ({
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
        d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)

Add.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Add
