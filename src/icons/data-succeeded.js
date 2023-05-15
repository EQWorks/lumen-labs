import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const DataSucceeded = ({
  className = 'h-5 w-5',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 4.06292C2.41125 4.06292 0.3125 3.22333 0.3125 2.18792C0.3125 1.1525 2.41125 0.312916 5 0.312916C7.58875 0.312916 9.6875 1.15208 9.6875 2.18792C9.6875 2.67708 9.21875 3.1225 8.45125 3.45667" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 4.355V2.18792" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 2.18792V4.68792C0.3125 5.50375 1.61583 6.19792 3.435 6.45583" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 4.68792V7.18792C0.3125 8.04917 1.765 8.775 3.74375 8.99458" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6875 7.18792C4.6875 7.85096 4.95089 8.48684 5.41973 8.95568C5.88857 9.42452 6.52446 9.68792 7.1875 9.68792C7.85054 9.68792 8.48643 9.42452 8.95527 8.95568C9.42411 8.48684 9.6875 7.85096 9.6875 7.18792C9.6875 6.52487 9.42411 5.88899 8.95527 5.42015C8.48643 4.95131 7.85054 4.68792 7.1875 4.68792C6.52446 4.68792 5.88857 4.95131 5.41973 5.42015C4.95089 5.88899 4.6875 6.52487 4.6875 7.18792V7.18792Z" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.30166 6.46083L7.09124 8.075C7.06433 8.11079 7.03004 8.14039 6.99071 8.1618C6.95137 8.18321 6.90789 8.19592 6.86322 8.19908C6.81854 8.20224 6.77371 8.19577 6.73175 8.18012C6.68979 8.16446 6.65168 8.13998 6.62 8.10833L5.995 7.48333" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

DataSucceeded.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default DataSucceeded
