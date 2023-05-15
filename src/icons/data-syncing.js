import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const DataSyncing = ({
  className = 'h-5 w-5',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 4.06292C2.41125 4.06292 0.3125 3.22333 0.3125 2.18792C0.3125 1.1525 2.41125 0.312916 5 0.312916C7.58875 0.312916 9.6875 1.15208 9.6875 2.18792C9.6875 2.73917 9.0925 3.235 8.14583 3.57833" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6875 3.75667V2.18792" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 2.18792V4.68792C0.3125 5.54917 1.765 6.275 3.74375 6.49458" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.3125 4.68792V7.18792C0.3125 8.00458 1.61833 8.69958 3.44083 8.95667" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.25 7.81292H4.6875V9.37542" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.4446 8.11833C9.27911 8.60198 8.95862 9.01748 8.53286 9.30038C8.10711 9.58328 7.59989 9.71776 7.0899 9.68295C6.57991 9.64815 6.09566 9.446 5.71229 9.10788C5.32892 8.76976 5.06786 8.31456 4.9696 7.81292" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.125 6.56292H9.6875V5.00042" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.93042 6.25708C5.09622 5.77372 5.41684 5.35854 5.84257 5.07591C6.26831 4.79328 6.77539 4.65898 7.28521 4.69382C7.79503 4.72866 8.27912 4.9307 8.66245 5.26863C9.04577 5.60655 9.30692 6.06149 9.40542 6.56292" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

DataSyncing.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default DataSyncing
