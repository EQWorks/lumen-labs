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
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        d="M8 14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14C6 13.4477 6.44772 13 7 13C7.55228 13 8 13.4477 8 14Z"
      />
      <path
        d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"
      />
      <path
        d="M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z"
      />
      <path
        d="M17 5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5C15 4.44772 15.4477 4 16 4C16.5523 4 17 4.44772 17 5Z"
      />
      <path
        d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
      />
      <path
        d="M16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8Z"
      />
      <path
        d="M13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
      />
      <path
        d="M1 1V18C1 18.5523 1.44772 19 2 19H19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg >
  )
}

ScatterPlot.propTypes = { className: PropTypes.string, size: PropTypes.string }
ScatterPlot.defaultProps = { className: '', size: '' }

export default ScatterPlot
