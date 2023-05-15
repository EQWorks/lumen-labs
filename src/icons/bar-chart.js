import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const BarChart = ({
  className = '',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M5 15L5.05247 9.71186M9.13115 15V8.08475M13.0656 15V5.64407M17 15V3M1 1V18C1 18.5523 1.44772 19 2 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  )
}

BarChart.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default BarChart
