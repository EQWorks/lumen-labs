import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const MoveDown = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 140 140"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(14,0,0,14,0,0)">
        <path d="M4.628,6.834a.5.5,0,0,0,.744,0l2.25-2.5A.5.5,0,0,0,7.25,3.5H5.75V.75a.75.75,0,0,0-1.5,0V3.5H2.75a.5.5,0,0,0-.372.834Z" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" />
        <path d="M7.5,8.5h-5a.75.75,0,0,0,0,1.5h5a.75.75,0,0,0,0-1.5Z" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" />
      </g>
    </svg>
  )
}

MoveDown.propTypes = { className: PropTypes.string, size: PropTypes.string }
MoveDown.defaultProps = { className: '', size: '' }

export default MoveDown
