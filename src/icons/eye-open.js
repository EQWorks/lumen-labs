import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
  xs: 'w-1.5 h-1.5',
})

const EyeOpen = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(10,0,0,10,0,0)">
      <path d="M7.00002 1.06308C4.6486 1.02342 2.21669 2.66667 0.687771 4.34958C0.527287 4.52775 0.438477 4.75904 0.438477 4.99883C0.438477 5.23862 0.527287 5.46992 0.687771 5.64808C2.18344 7.29542 4.60835 8.97658 7.00002 8.93633C9.39169 8.97658 11.8172 7.29542 13.314 5.64808C13.4745 5.46992 13.5633 5.23862 13.5633 4.99883C13.5633 4.75904 13.4745 4.52775 13.314 4.34958C11.7834 2.66667 9.35144 1.02342 7.00002 1.06308Z" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.1875 5C9.18739 5.43262 9.05899 5.85549 8.81856 6.21515C8.57812 6.57481 8.23644 6.85509 7.83672 7.02057C7.43699 7.18605 6.99718 7.22928 6.57288 7.14481C6.14859 7.06034 5.75887 6.85196 5.453 6.54601C5.14713 6.24006 4.93885 5.85028 4.85449 5.42596C4.77013 5.00164 4.81349 4.56184 4.97907 4.16216C5.14465 3.76248 5.42503 3.42088 5.78475 3.18054C6.14447 2.9402 6.56738 2.81192 7 2.81192C7.28734 2.81184 7.57187 2.86839 7.83735 2.97833C8.10282 3.08827 8.34402 3.24945 8.54717 3.45266C8.75033 3.65586 8.91144 3.89711 9.02131 4.16261C9.13118 4.42811 9.18765 4.71266 9.1875 5Z" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
)

EyeOpen.propTypes = { className: PropTypes.string, size: PropTypes.string }
EyeOpen.defaultProps = { className: '', size: '' }

export default EyeOpen
