import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})

const Alias = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox=".41 -.1 14 14"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    {...props}
  >
    <g transform="matrix(1.43,0,0,1.43,0,0)">
      <path
        d="M3.28333 9.2875C3.51771 9.52158 3.83542 9.65307 4.16667 9.65307C4.49792 9.65307 4.81562 9.52158 5.05 9.2875L9.63333 4.70417C9.86782 4.46997 9.99971 4.15224 10 3.82083L10 0.833333C10 0.61232 9.9122 0.400358 9.75592 0.244078C9.59964 0.0877974 9.38768 -2.67653e-08 9.16667 -3.64262e-08L6.17917 -1.67014e-07C5.84776 0.000291572 5.53003 0.132179 5.29583 0.366666L0.7125 4.95C0.478416 5.18438 0.346933 5.50208 0.346933 5.83333C0.346933 6.16458 0.478415 6.48229 0.7125 6.71667L3.28333 9.2875ZM3.87083 8.7L1.3 6.125C1.2224 6.04693 1.17884 5.94133 1.17884 5.83125C1.17884 5.72117 1.2224 5.61557 1.3 5.5375L5.88333 0.954166C5.92227 0.915549 5.96844 0.884997 6.01921 0.864262C6.06997 0.843527 6.12433 0.833016 6.17917 0.833333L8.95833 0.833333C9.01359 0.833333 9.06658 0.855283 9.10565 0.894353C9.14472 0.933423 9.16667 0.986413 9.16667 1.04167L9.16667 3.82083C9.16698 3.87567 9.15647 3.93003 9.13574 3.98079C9.115 4.03156 9.08445 4.07773 9.04583 4.11667L4.4625 8.7C4.42377 8.73905 4.37768 8.77005 4.32691 8.7912C4.27613 8.81236 4.22167 8.82325 4.16667 8.82325C4.11166 8.82325 4.0572 8.81236 4.00643 8.7912C3.95565 8.77005 3.90957 8.73905 3.87083 8.7V8.7Z"
      />
      <path
        d="M6.875 2.50005C6.875 2.84523 7.15482 3.12505 7.5 3.12505C7.84518 3.12505 8.125 2.84523 8.125 2.50005C8.125 2.15487 7.84518 1.87505 7.5 1.87505C7.15482 1.87505 6.875 2.15487 6.875 2.50005Z"
      />
    </g>
  </svg>
)

Alias.propTypes = { className: PropTypes.string, size: PropTypes.string }
Alias.defaultProps = { className: '', size: '' }

export default Alias