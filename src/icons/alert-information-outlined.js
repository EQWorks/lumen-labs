import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const AlertInformationOutlined = ({ className, size, ...props }) => (
  <svg className={`${iconSize[size]} ${className}`} viewBox="0 0 14 14" fill='none' stroke='currentColor' xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_417_2719)">
      <path d="M8.3125 9.625H7.875C7.64295 9.625 7.42035 9.53283 7.25626 9.36874C7.09217 9.20465 7 8.98205 7 8.75V6.5625C7 6.44647 6.95392 6.33517 6.87184 6.25316C6.78983 6.17108 6.67852 6.125 6.5625 6.125H6.125" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.78125 4.375C6.66044 4.375 6.5625 4.27706 6.5625 4.15625C6.5625 4.03544 6.66044 3.9375 6.78125 3.9375" strokeWidth="0.875"/>
      <path d="M6.78125 4.375C6.90206 4.375 7 4.27706 7 4.15625C7 4.03544 6.90206 3.9375 6.78125 3.9375" strokeWidth="0.875"/>
      <path d="M7 13.5625C10.6244 13.5625 13.5625 10.6244 13.5625 7C13.5625 3.37563 10.6244 0.4375 7 0.4375C3.37563 0.4375 0.4375 3.37563 0.4375 7C0.4375 10.6244 3.37563 13.5625 7 13.5625Z" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg> 
)



AlertInformationOutlined.propTypes = { className: PropTypes.string, size: PropTypes.string }
AlertInformationOutlined.defaultProps = { className: '', size: '' }

export default AlertInformationOutlined
