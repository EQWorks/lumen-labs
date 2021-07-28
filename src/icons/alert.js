import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const Alert = ({ className, size, ...props }) => (
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
        d="M7,0a7,7,0,1,0,7,7A7.008,7.008,0,0,0,7,0ZM6.25,3.5a.75.75,0,0,1,1.5,0v3a.75.75,0,0,1-1.5,0ZM7,11a1,1,0,1,1,1-1A1,1,0,0,1,7,11Z" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="0"
      />
    </g>  
  </svg>
)



Alert.propTypes = { className: PropTypes.string, size: PropTypes.string }
Alert.defaultProps = { className: '', size: '' }

export default Alert
