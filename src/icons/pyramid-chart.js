import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const pyramidChart = ({ className, size, ...props }) => {
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
        d="M1 1V18C1 18.5523 1.44772 19 2 19H19"
      />
      <path
        d="M12.5 3L14 3M12.5 7.13115L15.0932 7.13115M12.5 11.0656H16.0085M12.5 15H17M9.5 3L8 3M9.5 7.13115L6.90678 7.13115M9.5 11.0656H5.99153M9.5 15H5"strokeLinejoin="round"
      />
    </svg >
  )
}

pyramidChart.propTypes = { className: PropTypes.string, size: PropTypes.string }
pyramidChart.defaultProps = { className: '', size: '' }

export default pyramidChart
