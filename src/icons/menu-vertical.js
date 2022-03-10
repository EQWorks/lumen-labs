import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const MenuVertical = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 4 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1.99996 10.3332C1.08329 10.3332 0.333293 11.0832 0.333293 11.9998C0.333293 12.9165 1.08329 13.6665 1.99996 13.6665C2.91663 13.6665 3.66663 12.9165 3.66663 11.9998C3.66663 11.0832 2.91663 10.3332 1.99996 10.3332ZM1.99996 8.6665C2.91663 8.6665 3.66663 7.9165 3.66663 6.99984C3.66663 6.08317 2.91663 5.33317 1.99996 5.33317C1.08329 5.33317 0.333293 6.08317 0.333293 6.99984C0.333293 7.9165 1.08329 8.6665 1.99996 8.6665ZM1.99996 3.6665C2.91663 3.6665 3.66663 2.9165 3.66663 1.99984C3.66663 1.08317 2.91663 0.333172 1.99996 0.333172C1.08329 0.333172 0.333293 1.08317 0.333293 1.99984C0.333293 2.9165 1.08329 3.6665 1.99996 3.6665Z" />
    </svg>
  )
}

MenuVertical.propTypes = { className: PropTypes.string, size: PropTypes.string }
MenuVertical.defaultProps = { className: '', size: '' }

export default MenuVertical
