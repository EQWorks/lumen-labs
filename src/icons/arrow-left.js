import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowLeft = ({ className, size, ...props }) => (
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
        d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
)



ArrowLeft.propTypes = { className: PropTypes.string, size: PropTypes.string }
ArrowLeft.defaultProps = { className: '', size: '' }

export default ArrowLeft
