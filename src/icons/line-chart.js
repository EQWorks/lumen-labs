import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const LineChart = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path
        d="M5 15L6.62701 10.0172C6.75341 9.6301 7.26479 9.54836 7.50556 9.87678L9.20823 12.1993C9.39466 12.4537 9.76707 12.474 9.98011 12.2415L11.2607 10.8441C11.4262 10.6635 11.6982 10.6294 11.9032 10.7636L14.2414 12.2946C14.5339 12.486 14.9275 12.326 15.0034 11.9847L17 3" strokeLinejoin="round"
      />
      <path
        d="M1 1V18C1 18.5523 1.44772 19 2 19H19" strokeLinecap="round"
      />
    </svg >
  )
}

LineChart.propTypes = { className: PropTypes.string, size: PropTypes.string }
LineChart.defaultProps = { className: '', size: '' }

export default LineChart
