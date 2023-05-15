import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
  xs: 'w-1.5 h-1.5',
})

const EyeClosed = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 120"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(10,0,0,10,0,0)">
      <path d="M1.6217 11.25L12.5592 0.75" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.25 10.1125C5.8164 10.2893 6.40665 10.3778 7 10.375C9.39167 10.4158 11.8183 8.73583 13.3117 7.085C13.4728 6.90782 13.562 6.67696 13.562 6.4375C13.562 6.19804 13.4728 5.96718 13.3117 5.79C12.7717 5.19317 12.1716 4.65365 11.5208 4.18" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.96918 3.24083C9.0512 2.76459 8.03412 2.51082 7.00001 2.5C4.66668 2.45917 2.21668 4.10417 0.688344 5.79C0.527251 5.96718 0.437988 6.19804 0.437988 6.4375C0.437988 6.67696 0.527251 6.90782 0.688344 7.085C1.51661 8.01093 2.48745 8.79863 3.56418 9.41833" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.25002 7.79083C4.93358 7.35182 4.78629 6.81331 4.83527 6.27436C4.88424 5.73541 5.12618 5.23226 5.51658 4.85749C5.90697 4.48271 6.41957 4.2615 6.96007 4.23455C7.50057 4.20761 8.03262 4.37674 8.45836 4.71083" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.1875 6.4375C9.1875 6.72477 9.13092 7.00922 9.02099 7.27462C8.91105 7.54002 8.74992 7.78117 8.5468 7.9843C8.34367 8.18742 8.10252 8.34855 7.83712 8.45849C7.57172 8.56842 7.28727 8.625 7 8.625" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
)

EyeClosed.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default EyeClosed
