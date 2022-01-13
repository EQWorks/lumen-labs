import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ScatterPlot = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V15H0V0.5Z"
        strokeWidth="0"
      />
      <path
        d="M0 14H14.5C14.7761 14 15 14.2239 15 14.5C15 14.7761 14.7761 15 14.5 15H0V14Z"
        strokeWidth="0"
      />
      <circle cx="5" cy="11" r="1" strokeWidth="0"/>
      <circle cx="5" cy="7" r="1" strokeWidth="0"/>
      <circle cx="9" cy="3" r="1" strokeWidth="0"/>
      <circle cx="9" cy="6" r="1" strokeWidth="0"/>
      <circle cx="9" cy="10" r="1" strokeWidth="0"/>
      <circle cx="13" cy="4" r="1" strokeWidth="0"/>
    </svg >
  )
}

ScatterPlot.propTypes = { className: PropTypes.string, size: PropTypes.string }
ScatterPlot.defaultProps = { className: '', size: '' }

export default ScatterPlot
