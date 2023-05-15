import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowTurnBackward = ({
  className = '',
  size = '',
  ...props
}) => (
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
        d="M9,3.5H3.414L4.707,2.207A1,1,0,0,0,3.293.793l-3,3a1,1,0,0,0,0,1.414l3,3A1,1,0,0,0,4.707,6.793L3.414,5.5H9a3,3,0,0,1,0,6H5a1,1,0,0,0,0,2H9a5,5,0,0,0,0-10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)



ArrowTurnBackward.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default ArrowTurnBackward
