import React from 'react'
import PropTypes from 'prop-types'


const Add = ({ className }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
  >
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path
        d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
        fill="#000000"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)

Add.propTypes = { className: PropTypes.string }
Add.defaultProps = { className: '' }

export default Add
