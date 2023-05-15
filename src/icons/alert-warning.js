import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const AlertWarning = ({
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
    <g transform="matrix(14,0,0,14,0,0)">
      <path
        d="M9.748,7.019,6.248.738a1.425,1.425,0,0,0-2.495,0L.251,7.024A2.008,2.008,0,0,0,2.01,10H7.988a2.01,2.01,0,0,0,1.76-2.981ZM4.5,3a.5.5,0,0,1,1,0V5a.5.5,0,0,1-1,0ZM5,8.5a1,1,0,1,1,1-1A1,1,0,0,1,5,8.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)



AlertWarning.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default AlertWarning
