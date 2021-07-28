import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowDown = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path 
        d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311" 
        strokeLinecap="round"
        strokeLinejoin="round" 
        strokeWidth="1.5"
      />
    </g>
  </svg>
)



ArrowDown.propTypes = { className: PropTypes.string, size: PropTypes.string }
ArrowDown.defaultProps = { className: '', size: '' }

export default ArrowDown
