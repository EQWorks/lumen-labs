import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const Search = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor" 
    {...props}
  >
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path 
        d="M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        transform="translate(-3.056 4.62) rotate(-23.025)"
      />
      <path 
        d="M16.221 16.22L23.25 23.25"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5"
      />
    </g>
  </svg>
)

Search.propTypes = { className: PropTypes.string, size: PropTypes.string }
Search.defaultProps = { className: '', size: '' }

export default Search
