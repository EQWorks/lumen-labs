import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const CheckBold = ({ className, size, ...props }) => (
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
        d="M4,12.5a2,2,0,0,1-1.55-.78L.25,9.23A1,1,0,0,1,.34,7.81a1,1,0,0,1,1.41.1l2.06,2.33a.21.21,0,0,0,.18.09.23.23,0,0,0,.18-.08l8.11-8.44a1,1,0,0,1,1.44,1.38l-8.2,8.63A1.94,1.94,0,0,1,4,12.5Z" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="0"
      />
    </g>
  </svg>
)



CheckBold.propTypes = { className: PropTypes.string, size: PropTypes.string }
CheckBold.defaultProps = { className: '', size: '' }

export default CheckBold
