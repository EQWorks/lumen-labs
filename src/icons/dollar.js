import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const Dollar = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
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
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path 
        d="M16.5,3.75H10.8a3.3,3.3,0,0,0-3.3,3.3c0,4.95,9,4.95,9,9.9a3.3,3.3,0,0,1-3.3,3.3H7.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5"
      />
      <path 
        d="M12 3.75L12 0.75" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5"
      />
      <path 
        d="M12 20.25L12 23.25" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5"
      />
    </g>
  </svg>
)



Dollar.propTypes = { className: PropTypes.string, size: PropTypes.string }
Dollar.defaultProps = { className: '', size: '' }

export default Dollar
