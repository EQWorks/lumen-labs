import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const LeftJoin = ({ className, size, stroke, fill, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="5" cy="5" r="5" fill={fill}/>
      <circle cx="9.99963" cy="5" r="4.5" stroke={stroke}/>
    </svg>
  )
}

LeftJoin.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
}
LeftJoin.defaultProps = { className: '', size: 'lg', stroke: '#3174D5', fill: '#619CE5' }

export default LeftJoin
