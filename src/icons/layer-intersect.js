import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const LayerIntersect = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.22917 2.8125H7.1875V6.77083C7.1875 6.88134 7.1436 6.98732 7.06546 7.06546C6.98732 7.1436 6.88134 7.1875 6.77083 7.1875H2.8125V3.22917C2.8125 3.11866 2.8564 3.01268 2.93454 2.93454C3.01268 2.8564 3.11866 2.8125 3.22917 2.8125V2.8125Z" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 0.9375C0.3125 0.77174 0.378348 0.612769 0.495558 0.495558C0.612769 0.378348 0.77174 0.3125 0.9375 0.3125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.1875 0.3125H3.125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.375 0.3125H5.3125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5625 0.3125C6.72826 0.3125 6.88723 0.378348 7.00444 0.495558C7.12165 0.612769 7.1875 0.77174 7.1875 0.9375" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.1875 2.8125V2.1875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 2.1875V3.125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 4.375V5.3125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 6.5625C0.3125 6.72826 0.378348 6.88723 0.495558 7.00444C0.612769 7.12165 0.77174 7.1875 0.9375 7.1875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.8125 7.1875H2.1875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.0625 9.6875C9.22826 9.6875 9.38723 9.62165 9.50444 9.50444C9.62165 9.38723 9.6875 9.22826 9.6875 9.0625" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 7.8125V6.875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 5.625V4.6875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 3.4375C9.6875 3.27174 9.62165 3.11277 9.50444 2.99556C9.38723 2.87835 9.22826 2.8125 9.0625 2.8125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.1875 2.8125H7.8125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.8125 9.6875H6.875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.625 9.6875H4.6875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.4375 9.6875C3.27174 9.6875 3.11277 9.62165 2.99556 9.50444C2.87835 9.38723 2.8125 9.22826 2.8125 9.0625" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.8125 7.1875V7.8125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

LayerIntersect.propTypes = { className: PropTypes.string, size: PropTypes.string }
LayerIntersect.defaultProps = { className: '', size: 'lg' }

export default LayerIntersect
