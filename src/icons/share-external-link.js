import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ShareExternalLink = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(11.6,0,0,11.6,0,0)">
      <path d="M4.625 7.2615L11.625 0.375" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.625 4.3105V0.375H7.625" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.0625 2.875H0.8125C0.696468 2.875 0.585188 2.92109 0.503141 3.00314C0.421094 3.08519 0.375 3.19647 0.375 3.3125V11.1875C0.375 11.3035 0.421094 11.4148 0.503141 11.4969C0.585188 11.5789 0.696468 11.625 0.8125 11.625H8.6875C8.80353 11.625 8.91481 11.5789 8.99686 11.4969C9.07891 11.4148 9.125 11.3035 9.125 11.1875V5.9375" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

ShareExternalLink.propTypes = { className: PropTypes.string, size: PropTypes.string }
ShareExternalLink.defaultProps = { className: '', size: '' }

export default ShareExternalLink
