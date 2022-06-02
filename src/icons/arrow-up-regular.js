import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const ArrowUpRegular = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 9.6875V0.3125" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.375 4.6875L5 0.3125L0.625 4.6875" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

ArrowUpRegular.propTypes = { className: PropTypes.string, size: PropTypes.string }
ArrowUpRegular.defaultProps = { className: '', size: 'lg' }

export default ArrowUpRegular
