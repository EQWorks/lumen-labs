import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const filterLinesDesc = ({
  className = '',
  size = 'lg',
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
        <line className="a" x1="0.75" y1="4.293" x2="23.25" y2="4.293"></line>
        <line className="a" x1="3.146" y1="9.431" x2="20.854" y2="9.431"></line>
        <line className="a" x1="8.72" y1="19.707" x2="15.28" y2="19.707"></line>
        <line className="a" x1="5.543" y1="14.569" x2="18.457" y2="14.569"></line>
      </g>
    </svg>
  )
}

filterLinesDesc.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default filterLinesDesc
