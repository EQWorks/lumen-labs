import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Download = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 148 110"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(13.5,0,0,13.5,0,0)">
        <path
          d="M5.56683 0.5625V5.5625"
          strokeWidth="0.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.69183 3.6875L5.56683 5.5625L7.44183 3.6875"
          strokeWidth="0.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2543 5.5625V6.1875C10.2543 6.51902 10.1226 6.83696 9.88822 7.07138C9.6538 7.3058 9.33585 7.4375 9.00433 7.4375H2.12933C1.79781 7.4375 1.47987 7.3058 1.24545 7.07138C1.01103 6.83696 0.879333 6.51902 0.879333 6.1875V5.5625" strokeWidth="0.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

Download.propTypes = { className: PropTypes.string, size: PropTypes.string }
Download.defaultProps = { className: '', size: '' }

export default Download
