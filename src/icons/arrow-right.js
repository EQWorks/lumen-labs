import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowRight = ({ className, size, ...props }) => (
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
        d="M5.5.75,16.22,11.47a.749.749,0,0,1,0,1.06L5.5,23.25"
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
)



ArrowRight.propTypes = { className: PropTypes.string, size: PropTypes.string }
ArrowRight.defaultProps = { className: '', size: '' }

export default ArrowRight
