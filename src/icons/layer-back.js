import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const LayerBack = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.5625 9.6875H1.5625C1.23098 9.6875 0.913037 9.5558 0.678617 9.32138C0.444196 9.08696 0.3125 8.76902 0.3125 8.4375V3.4375" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.1875 6.875V7.1875C2.1875 7.35326 2.25335 7.51223 2.37056 7.62944C2.48777 7.74665 2.64674 7.8125 2.8125 7.8125H3.125" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.125 0.3125H2.8125C2.64674 0.3125 2.48777 0.378348 2.37056 0.495558C2.25335 0.612769 2.1875 0.77174 2.1875 0.9375V1.25" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 1.25V0.9375C9.6875 0.77174 9.62165 0.612769 9.50444 0.495558C9.38723 0.378348 9.22826 0.3125 9.0625 0.3125H8.75" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.75 7.8125H9.0625C9.22826 7.8125 9.38723 7.74665 9.50444 7.62944C9.62165 7.51223 9.6875 7.35326 9.6875 7.1875V6.875" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.375 0.3125H5.3125" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5625 0.3125H7.5" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.375 7.8125H5.3125" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5625 7.8125H7.5" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 2.5V3.4375" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 4.6875V5.625" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.1875 2.5V3.4375" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.1875 4.6875V5.625" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

LayerBack.propTypes = { className: PropTypes.string, size: PropTypes.string }
LayerBack.defaultProps = { className: '', size: 'lg' }

export default LayerBack
