import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowDownRegular = ({
  className = '',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(2,0,0,2,0,0)">
        <path d="M12 0.75L12 23.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M1.5 12.75L12 23.25 22.5 12.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
  )
}

ArrowDownRegular.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default ArrowDownRegular
