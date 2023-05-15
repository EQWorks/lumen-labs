import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Nodes = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.875 9.68652H8.75C8.83288 9.68652 8.91237 9.6536 8.97097 9.59499C9.02958 9.53639 9.0625 9.4569 9.0625 9.37402V7.31611C9.06254 7.23331 9.02972 7.15389 8.97125 7.09527L8.52958 6.65319C8.50061 6.62415 8.46619 6.6011 8.42829 6.58537C8.3904 6.56964 8.34978 6.56154 8.30875 6.56152H6.875C6.79212 6.56152 6.71263 6.59445 6.65403 6.65305C6.59542 6.71166 6.5625 6.79114 6.5625 6.87402V9.37402C6.5625 9.4569 6.59542 9.53639 6.65403 9.59499C6.71263 9.6536 6.79212 9.68652 6.875 9.68652V9.68652Z"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.875 4.06152H8.75C8.83274 4.06152 8.9121 4.02871 8.97068 3.97029C9.02926 3.91186 9.06228 3.83259 9.0625 3.74986V1.69111C9.06254 1.60831 9.02972 1.52889 8.97125 1.47027L8.52958 1.02819C8.50061 0.999145 8.46619 0.976098 8.42829 0.960369C8.3904 0.94464 8.34978 0.936537 8.30875 0.936523H6.875C6.79212 0.936523 6.71263 0.969448 6.65403 1.02805C6.59542 1.08666 6.5625 1.16614 6.5625 1.24902V3.74986C6.56272 3.83259 6.59574 3.91186 6.65432 3.97029C6.7129 4.02871 6.79226 4.06152 6.875 4.06152Z"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.9375 0.311523V0.936523"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.9375 2.18652V3.43652"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.9375 4.68652V5.93652"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.9375 7.18652V7.81152C0.9375 7.97728 1.00335 8.13626 1.12056 8.25347C1.23777 8.37068 1.39674 8.43652 1.5625 8.43652H2.1875"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.4375 8.43652H4.6875"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.9375 8.43652H6.5625"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.9375 2.81152H2.1875"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.4375 2.81152H4.6875"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.9375 2.81152H6.5625"  strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

Nodes.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Nodes
