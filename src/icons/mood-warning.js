import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const MoodWarning = ({ className, size, ...props }) => (
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
        d="M24,12a4.8,4.8,0,0,0-2.207-4.057,4.831,4.831,0,0,0-5.736-5.736,4.831,4.831,0,0,0-8.112,0A4.831,4.831,0,0,0,2.208,7.943a4.832,4.832,0,0,0,0,8.114,4.831,4.831,0,0,0,5.736,5.736,4.831,4.831,0,0,0,8.112,0,4.832,4.832,0,0,0,5.736-5.737A4.8,4.8,0,0,0,24,12ZM12,6a1,1,0,0,1,1,1v5.5a1,1,0,0,1-2,0V7A1,1,0,0,1,12,6Zm0,9a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12,15Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)



MoodWarning.propTypes = { className: PropTypes.string, size: PropTypes.string }
MoodWarning.defaultProps = { className: '', size: '' }

export default MoodWarning
