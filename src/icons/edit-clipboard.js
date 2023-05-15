import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const EditClipboard = ({
  className = '',
  size = 'lg',
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
      <path d="M9.42917 6.19574L6.25 9.3749L4.6875 9.6874L5 8.1249L8.17917 4.94574C8.26098 4.8638 8.35814 4.79879 8.4651 4.75444C8.57206 4.71009 8.68671 4.68726 8.8025 4.68726C8.91829 4.68726 9.03294 4.71009 9.1399 4.75444C9.24686 4.79879 9.34402 4.8638 9.42583 4.94574L9.42917 4.94907C9.51111 5.03088 9.57611 5.12804 9.62047 5.235C9.66482 5.34196 9.68765 5.45661 9.68765 5.5724C9.68765 5.68819 9.66482 5.80285 9.62047 5.9098C9.57611 6.01676 9.51111 6.11393 9.42917 6.19574V6.19574Z" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5625 2.8125H5.9375" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5625 4.6875H5.9375" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5625 6.5625H3.75" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.125 8.4375H0.9375C0.77174 8.4375 0.612769 8.37165 0.495558 8.25444C0.378348 8.13723 0.3125 7.97826 0.3125 7.8125V0.9375C0.3125 0.77174 0.378348 0.612769 0.495558 0.495558C0.612769 0.378348 0.77174 0.3125 0.9375 0.3125H5.36625C5.53189 0.312535 5.69075 0.378326 5.80792 0.495417L7.00458 1.69208C7.12167 1.80925 7.18746 1.96811 7.1875 2.13375V3.4375" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

EditClipboard.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default EditClipboard
