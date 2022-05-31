import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowUpDownRegular = ({ className, size, ...props }) => {
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
        <path d="M9 10.5L9 23.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M12 20.25L9 23.25 6 20.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M15 13.5L15 0.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M12 3.75L15 0.75 18 3.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
  )
}

ArrowUpDownRegular.propTypes = { className: PropTypes.string, size: PropTypes.string }
ArrowUpDownRegular.defaultProps = { className: '', size: 'lg' }

export default ArrowUpDownRegular
