import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Remove = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="matrix(10,0,0,10,0,0)">
      <path
        d="M13,8H1A1,1,0,0,1,1,6H13a1,1,0,0,1,0,2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)

Remove.propTypes = { className: PropTypes.string, size: PropTypes.string }
Remove.defaultProps = { className: '', size: '' }

export default Remove
