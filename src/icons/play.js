import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Play = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 10 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968503 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C10 3.67392 9.47322 2.40215 8.53554 1.46447C7.59785 0.526784 6.32608 0 5 0V0ZM7.0125 5.37083L3.9375 6.90833C3.87407 6.9403 3.80353 6.95551 3.73256 6.95254C3.6616 6.94957 3.59257 6.9285 3.53204 6.89135C3.4715 6.85419 3.42147 6.80218 3.3867 6.74025C3.35192 6.67832 3.33355 6.60853 3.33334 6.5375V3.4625C3.33284 3.39112 3.35068 3.32081 3.38517 3.25831C3.41965 3.19581 3.46961 3.14322 3.53026 3.10557C3.59091 3.06793 3.66021 3.0465 3.73152 3.04333C3.80283 3.04017 3.87376 3.05538 3.9375 3.0875L7.0125 4.625C7.08184 4.65956 7.14017 4.71276 7.18094 4.77864C7.22171 4.84451 7.24331 4.92045 7.24331 4.99792C7.24331 5.07539 7.22171 5.15132 7.18094 5.2172C7.14017 5.28307 7.08184 5.33628 7.0125 5.37083Z" />
    </svg>
  )
}

Play.propTypes = { className: PropTypes.string, size: PropTypes.string }
Play.defaultProps = { className: '', size: 'lg' }

export default Play