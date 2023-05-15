import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Sum = ({
  className = '',
  size = null,
  ...props
}) => {
  return (
    <svg
      className={`${size ? iconSize[size] : ''} ${className}`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.64583 0.311676H1.58792C1.52611 0.311648 1.46569 0.329946 1.41429 0.364256C1.36288 0.398566 1.32281 0.447347 1.29913 0.504432C1.27545 0.561517 1.26922 0.624342 1.28124 0.684964C1.29327 0.745586 1.32299 0.801282 1.36667 0.845009L5.07875 4.55709C5.19592 4.6743 5.26174 4.83324 5.26174 4.99897C5.26174 5.1647 5.19592 5.32364 5.07875 5.44084L1.36667 9.15293C1.32305 9.19671 1.29338 9.25243 1.28139 9.31305C1.2694 9.37368 1.27563 9.4365 1.2993 9.49358C1.32296 9.55067 1.363 9.59948 1.41436 9.63384C1.46573 9.6682 1.52612 9.68659 1.58792 9.68668H8.64583" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

Sum.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Sum
