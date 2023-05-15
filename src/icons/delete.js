import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5 h-2.5',
})

const Delete = ({
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
        d='M24,12A12,12,0,1,0,12,24,12,12,0,0,0,24,12Zm-7.29,3.28a1,1,0,0,1,0,1.41,1,1,0,0,1-1.42,0l-3.11-3.11a.26.26,0,0,0-.35,0L8.72,16.69a1,1,0,0,1-1.41-1.41l3.11-3.11a.26.26,0,0,0,0-.35L7.31,8.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l3.11,3.11a.24.24,0,0,0,.35,0l3.11-3.11a1,1,0,1,1,1.42,1.42L13.6,11.82a.24.24,0,0,0,0,.35Z'
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)

Delete.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Delete
