import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-6 h-6',
  md: 'w-4 h-4',
  sm: 'w-3 h-3',
})

const CircleLoading = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path d="M12 0.747L12 4.497" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M12 23.247L12 19.497" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M4.045 4.042L6.697 6.694" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M19.955 19.952L17.303 17.301" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M0.75 11.997L4.5 11.997" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M23.25 11.997L19.5 11.997" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M4.045 19.952L6.697 17.301" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M19.955 4.042L17.303 6.694" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </g>
  </svg>
)

CircleLoading.propTypes = { className: PropTypes.string, size: PropTypes.string }
CircleLoading.defaultProps = { className: '', size: '' }

export default CircleLoading
