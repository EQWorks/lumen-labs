import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Target = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.125 5C3.125 5.49728 3.32254 5.97419 3.67417 6.32582C4.02581 6.67746 4.50272 6.875 5 6.875C5.49728 6.875 5.97419 6.67746 6.32582 6.32582C6.67746 5.97419 6.875 5.49728 6.875 5C6.875 4.50272 6.67746 4.02581 6.32582 3.67417C5.97419 3.32254 5.49728 3.125 5 3.125C4.50272 3.125 4.02581 3.32254 3.67417 3.67417C3.32254 4.02581 3.125 4.50272 3.125 5Z" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 3.125V2.1875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 6.875V7.8125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.875 5H7.8125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.125 5H2.1875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 4.84375C5.0309 4.84375 5.06111 4.85291 5.08681 4.87008C5.1125 4.88725 5.13253 4.91165 5.14436 4.94021C5.15618 4.96876 5.15928 5.00017 5.15325 5.03048C5.14722 5.06079 5.13234 5.08863 5.11049 5.11049C5.08863 5.13234 5.06079 5.14722 5.03048 5.15325C5.00017 5.15928 4.96876 5.15618 4.94021 5.14436C4.91165 5.13253 4.88725 5.1125 4.87008 5.08681C4.85291 5.06111 4.84375 5.0309 4.84375 5C4.84375 4.95856 4.86021 4.91882 4.88951 4.88951C4.91882 4.86021 4.95856 4.84375 5 4.84375" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 1.875V0.9375C0.3125 0.77174 0.378348 0.612769 0.495558 0.495558C0.612769 0.378348 0.77174 0.3125 0.9375 0.3125H1.875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 1.875V0.9375C9.6875 0.77174 9.62165 0.612769 9.50444 0.495558C9.38723 0.378348 9.22826 0.3125 9.0625 0.3125H8.125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 8.125V9.0625C0.3125 9.22826 0.378348 9.38723 0.495558 9.50444C0.612769 9.62165 0.77174 9.6875 0.9375 9.6875H1.875" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 8.125V9.0625C9.6875 9.22826 9.62165 9.38723 9.50444 9.50444C9.38723 9.62165 9.22826 9.6875 9.0625 9.6875H8.125" stroke="#2A2A2A" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Target.propTypes = { className: PropTypes.string, size: PropTypes.string }
Target.defaultProps = { className: '', size: 'lg' }

export default Target
