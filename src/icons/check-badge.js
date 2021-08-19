import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const CheckBadge = ({ className, size, ...props }) => (
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
        d="M22.718,10.35,20.88,8.872a1.092,1.092,0,0,1-.4-.971l.255-2.345a2.091,2.091,0,0,0-2.307-2.308L16.08,3.5a1.093,1.093,0,0,1-.971-.4L13.631,1.263a2.157,2.157,0,0,0-3.262,0L8.891,3.1a1.086,1.086,0,0,1-.971.4L5.575,3.248A2.091,2.091,0,0,0,3.267,5.555L3.522,7.9a1.087,1.087,0,0,1-.4.971L1.282,10.35a2.092,2.092,0,0,0,0,3.262L3.12,15.09a1.088,1.088,0,0,1,.4.971l-.255,2.345a2.091,2.091,0,0,0,2.307,2.308l2.346-.255a1.092,1.092,0,0,1,.971.4L10.369,22.7a2.092,2.092,0,0,0,3.262,0l1.478-1.838a1.093,1.093,0,0,1,.971-.4l2.345.255a2.091,2.091,0,0,0,2.308-2.307l-.255-2.346a1.086,1.086,0,0,1,.4-.971l1.838-1.478a2.092,2.092,0,0,0,0-3.262ZM12.4,15.048a1.785,1.785,0,0,1-2.663.19L7.293,12.8a1,1,0,1,1,1.414-1.414l2.251,2.251,3.909-5.211a1,1,0,1,1,1.6,1.2Z" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="0"
      />
    </g>  
  </svg>
)



CheckBadge.propTypes = { className: PropTypes.string, size: PropTypes.string }
CheckBadge.defaultProps = { className: '', size: '' }

export default CheckBadge
