import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const DataFailed = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 4.06292C2.41125 4.06292 0.3125 3.22333 0.3125 2.18792C0.3125 1.1525 2.41125 0.312916 5 0.312916C7.58875 0.312916 9.6875 1.15208 9.6875 2.18792C9.6875 2.74125 9.0875 3.23875 8.13375 3.58208" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 4.06292V2.18792" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 2.18792V4.68792C0.3125 5.50333 1.61458 6.1975 3.43208 6.45542" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 4.68792V7.18792C0.3125 8.04958 1.76625 8.77583 3.74667 8.995" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6875 7.18792C4.6875 7.85096 4.95089 8.48684 5.41973 8.95568C5.88857 9.42452 6.52446 9.68792 7.1875 9.68792C7.85054 9.68792 8.48643 9.42452 8.95527 8.95568C9.42411 8.48684 9.6875 7.85096 9.6875 7.18792C9.6875 6.52487 9.42411 5.88899 8.95527 5.42015C8.48643 4.95131 7.85054 4.68792 7.1875 4.68792C6.52446 4.68792 5.88857 4.95131 5.41973 5.42015C4.95089 5.88899 4.6875 6.52487 4.6875 7.18792V7.18792Z" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.125 6.25L6.25 8.125" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.25 6.25L8.125 8.125" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

DataFailed.propTypes = { className: PropTypes.string, size: PropTypes.string }
DataFailed.defaultProps = { className: 'h-5 w-5', size: '' }
export default DataFailed
