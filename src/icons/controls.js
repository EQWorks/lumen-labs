import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Controls = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${size ? iconSize[size] : ''} ${className}`}
      viewBox="0 0 140 140"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(9.9,0,0,9.9,0,0)">
        <circle cx="2" cy="4.5" r="1.5"></circle>
        <line x1="2" y1="6" x2="2" y2="13.5"></line>
        <line x1="2" y1="0.5" x2="2" y2="3"></line>
        <circle cx="12" cy="4.5" r="1.5"></circle>
        <line x1="12" y1="3" x2="12" y2="0.5"></line>
        <line x1="12" y1="13.5" x2="12" y2="6"></line>
        <circle cx="7" cy="7" r="1.5"></circle>
        <line x1="7" y1="0.5" x2="7" y2="5.5"></line>
        <line x1="7" y1="8.5" x2="7" y2="13.5"></line>
      </g>
    </svg>
  )
}

Controls.propTypes = { className: PropTypes.string, size: PropTypes.string }
Controls.defaultProps = { className: '', size: '' }

export default Controls
