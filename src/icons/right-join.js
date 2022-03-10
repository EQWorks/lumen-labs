import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const RightJoin = ({ className, size, stroke, fill, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="13.3331" cy="7.00005" r="6.66655" fill={fill} />
      <circle cx="6.66655" cy="7.00005" r="6.16655" stroke={stroke} />
    </svg>
  )
}

RightJoin.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
}
RightJoin.defaultProps = { className: '', size: 'lg', stroke: '#3174D5', fill: '#619CE5' }

export default RightJoin
