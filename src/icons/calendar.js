import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5 h-2.5',
})

const Calendar = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(0.625,0,0,0.625,0,0)">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 3.75H2.25C1.42157 3.75 0.75 4.42157 0.75 5.25V21.75C0.75 22.5784 1.42157 23.25 2.25 23.25H21.75C22.5784 23.25 23.25 22.5784 23.25 21.75V5.25C23.25 4.42157 22.5784 3.75 21.75 3.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M0.75 9.75H23.25" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6V0.75" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6V0.75" />
      <path strokeWidth="1.5" d="M5.625 14.25C5.41789 14.25 5.25 14.0821 5.25 13.875C5.25 13.6679 5.41789 13.5 5.625 13.5" />
      <path strokeWidth="1.5" d="M5.625 14.25C5.83211 14.25 6 14.0821 6 13.875C6 13.6679 5.83211 13.5 5.625 13.5" />
      <path strokeWidth="1.5" d="M5.625 19.5C5.41789 19.5 5.25 19.3321 5.25 19.125C5.25 18.9179 5.41789 18.75 5.625 18.75" />
      <path strokeWidth="1.5" d="M5.625 19.5C5.83211 19.5 6 19.3321 6 19.125C6 18.9179 5.83211 18.75 5.625 18.75" />
      <path strokeWidth="1.5" d="M12 14.25C11.7929 14.25 11.625 14.0821 11.625 13.875C11.625 13.6679 11.7929 13.5 12 13.5" />
      <path strokeWidth="1.5" d="M12 14.25C12.2071 14.25 12.375 14.0821 12.375 13.875C12.375 13.6679 12.2071 13.5 12 13.5" />
      <g>
        <path strokeWidth="1.5" d="M12 19.5C11.7929 19.5 11.625 19.3321 11.625 19.125C11.625 18.9179 11.7929 18.75 12 18.75" />
        <path strokeWidth="1.5" d="M12 19.5C12.2071 19.5 12.375 19.3321 12.375 19.125C12.375 18.9179 12.2071 18.75 12 18.75" />
      </g>
      <g>
        <path strokeWidth="1.5" d="M18.375 14.25C18.1679 14.25 18 14.0821 18 13.875C18 13.6679 18.1679 13.5 18.375 13.5" />
        <path strokeWidth="1.5" d="M18.375 14.25C18.5821 14.25 18.75 14.0821 18.75 13.875C18.75 13.6679 18.5821 13.5 18.375 13.5" />
      </g>
      <g>
        <path strokeWidth="1.5" d="M18.375 19.5C18.1679 19.5 18 19.3321 18 19.125C18 18.9179 18.1679 18.75 18.375 18.75" />
        <path strokeWidth="1.5" d="M18.375 19.5C18.5821 19.5 18.75 19.3321 18.75 19.125C18.75 18.9179 18.5821 18.75 18.375 18.75" />
      </g>
    </g>
  </svg>
)



Calendar.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Calendar
