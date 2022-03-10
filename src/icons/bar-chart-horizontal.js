import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const BarChartHorizontal = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.3125 0.3125V9.6875H9.6875"
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 2.8125H0.3125V1.5625H5.625C5.66698 1.56245 5.70857 1.57067 5.74736 1.58672C5.78616 1.60276 5.82142 1.62629 5.8511 1.65598C5.88079 1.68567 5.90433 1.72092 5.92037 1.75972C5.93641 1.79852 5.94464 1.8401 5.94458 1.88208V2.49292C5.94458 2.57768 5.91091 2.65896 5.85098 2.7189C5.79105 2.77883 5.70976 2.8125 5.625 2.8125V2.8125Z"
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 5.3125H0.3125V4.0625H5.625C5.66698 4.06245 5.70857 4.07067 5.74736 4.08672C5.78616 4.10276 5.82142 4.12629 5.8511 4.15598C5.88079 4.18567 5.90433 4.22092 5.92037 4.25972C5.93641 4.29852 5.94464 4.3401 5.94458 4.38208V4.99292C5.94458 5.07768 5.91091 5.15896 5.85098 5.2189C5.79105 5.27883 5.70976 5.3125 5.625 5.3125V5.3125Z"
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.11792 7.8125H0.3125V6.5625H8.11792C8.1599 6.56245 8.20148 6.57067 8.24028 6.58672C8.27908 6.60276 8.31433 6.62629 8.34402 6.65598C8.37371 6.68567 8.39724 6.72092 8.41328 6.75972C8.42933 6.79852 8.43755 6.8401 8.4375 6.88208V7.49292C8.4375 7.57768 8.40383 7.65896 8.3439 7.7189C8.28396 7.77883 8.20268 7.8125 8.11792 7.8125V7.8125Z"
        strokeWidth="0.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

BarChartHorizontal.propTypes = { className: PropTypes.string, size: PropTypes.string }
BarChartHorizontal.defaultProps = { className: '', size: 'lg' }

export default BarChartHorizontal
