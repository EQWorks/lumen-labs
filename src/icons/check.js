import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const Check = ({
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
    <g transform="matrix(10,0,0,10,0,0)">
      <path
        d="M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0Zm3.6,5.9L6.624,9.874a1,1,0,0,1-1.415,0L3.4,8.068A1,1,0,0,1,4.818,6.654l1.1,1.1L9.182,4.487A1,1,0,0,1,10.6,5.9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)



Check.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Check
