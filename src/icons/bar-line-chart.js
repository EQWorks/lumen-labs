import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const BarLineChart = ({
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path
        d="M5 15L5.05247 8.98188M9.13115 15V11.3889M13.0656 15V8.37981M17 15V6.57438M5 4.76895L8.754 6.97746C8.95239 7.09418 9.20459 7.06008 9.36509 6.89484L13.001 3.15155C13.1154 3.03377 13.2801 2.97973 13.4417 3.0069L16.7639 3.56533" strokeLinejoin="round"
      />
      <path
        d="M1 1V18C1 18.5523 1.44772 19 2 19H19"
      />
    </svg >
  )
}

BarLineChart.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default BarLineChart
