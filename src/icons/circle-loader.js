import React from 'react'
import PropTypes from 'prop-types'


const CircleLoader = ({
  className = '',
  ...props
}) => (
  <svg
    className={`w-5 h-5 ${className}`}
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <g>
      <path
        d="M7 4.131a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75zM3.336 5.623l-1.843-1.69a.75.75 0 1 1 1.014-1.1L4.35 4.517a.75.75 0 1 1-1.014 1.106zM.3 9.143a.75.75 0 0 1 .441-.965l2.423-.9a.75.75 0 0 1 .524 1.4l-2.423.9A.75.75 0 0 1 .3 9.143zm3.753 4.648a.75.75 0 0 1-.337-1.006l1.113-2.238a.75.75 0 1 1 1.342.668l-1.112 2.238a.751.751 0 0 1-1.006.338zM9.6 5.577a.752.752 0 0 1 .046-1.06l1.843-1.689a.75.75 0 1 1 1.014 1.105l-1.843 1.69a.751.751 0 0 1-1.06-.046zm3.138 4.006-2.423-.9a.75.75 0 0 1 .524-1.4l2.423.9a.75.75 0 1 1-.524 1.4zm-3.797 3.87-1.112-2.238a.75.75 0 1 1 1.342-.668l1.113 2.238a.75.75 0 1 1-1.343.668z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)

CircleLoader.propTypes = { className: PropTypes.string }

export default CircleLoader
