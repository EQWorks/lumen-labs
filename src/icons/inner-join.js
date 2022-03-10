import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const InnerJoin = ({ className, size, stroke, fill, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.66632 3.33331C8.77743 3.11109 9.19964 2.53332 9.99963 2L10.6663 2.33333L11.3329 3.33331L11.9996 4.33329L12.6662 5.6666V6.66658V7.66657L12.3329 8.66655L11.9996 9.66653L11.6663 10.6665L10.9996 11.3332L9.99963 11.9998L9.33297 11.3332L8.66632 10.6665L7.99966 9.99986L7.66634 8.99988L7.33301 7.66657V5.99993L7.66634 4.99995L8.33299 3.99996L8.66632 3.33331Z" fill={fill} stroke={fill} />
      <circle cx="13.3331" cy="7.00005" r="6.16655" stroke={stroke} />
      <circle cx="6.66655" cy="7.00005" r="6.16655" stroke={stroke} />
    </svg>
  )
}

InnerJoin.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
}
InnerJoin.defaultProps = { className: '', size: 'lg', stroke: '#3174D5', fill: '#619CE5' }

export default InnerJoin
