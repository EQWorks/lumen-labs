import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const AlertInformation = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(14,0,0,14,0,0)">
      <path
        d="M5,0a5,5,0,1,0,5,5A5.006,5.006,0,0,0,5,0Zm.625,7.5a.625.625,0,0,1-1.25,0v-2a.625.625,0,0,1,1.25,0ZM5,4A1,1,0,1,1,6,3,1,1,0,0,1,5,4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)



AlertInformation.propTypes = { className: PropTypes.string, size: PropTypes.string }
AlertInformation.defaultProps = { className: '', size: '' }

export default AlertInformation
