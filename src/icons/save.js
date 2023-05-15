import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Save = ({
  className = '',
  size = '',
  ...props
}) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(14,0,0,14,0,0)">
      <path
        d="M9.16667 0H2.4625C2.24184 0.000930329 2.03056 0.0893384 1.875 0.245833L0.245833 1.875C0.0893384 2.03056 0.000930329 2.24184 0 2.4625L0 9.16667C0 9.38768 0.0877974 9.59964 0.244078 9.75592C0.400358 9.9122 0.61232 10 0.833333 10H9.16667C9.38768 10 9.59964 9.9122 9.75592 9.75592C9.9122 9.59964 10 9.38768 10 9.16667V0.833333C10 0.61232 9.9122 0.400358 9.75592 0.244078C9.59964 0.0877974 9.38768 0 9.16667 0V0ZM7.70833 0.833333C7.76359 0.833333 7.81658 0.855283 7.85565 0.894353C7.89472 0.933423 7.91667 0.986413 7.91667 1.04167V2.70833C7.91667 2.87409 7.85082 3.03306 7.73361 3.15028C7.6164 3.26749 7.45743 3.33333 7.29167 3.33333H3.125C2.95924 3.33333 2.80027 3.26749 2.68306 3.15028C2.56585 3.03306 2.5 2.87409 2.5 2.70833V1.04167C2.5 0.986413 2.52195 0.933423 2.56102 0.894353C2.60009 0.855283 2.65308 0.833333 2.70833 0.833333H7.70833ZM2.08333 9.16667C2.02808 9.16667 1.97509 9.14472 1.93602 9.10565C1.89695 9.06658 1.875 9.01359 1.875 8.95833V5.625C1.875 5.45924 1.94085 5.30027 2.05806 5.18306C2.17527 5.06585 2.33424 5 2.5 5H7.91667C8.08243 5 8.2414 5.06585 8.35861 5.18306C8.47582 5.30027 8.54167 5.45924 8.54167 5.625V8.95833C8.54167 9.01359 8.51972 9.06658 8.48065 9.10565C8.44158 9.14472 8.38859 9.16667 8.33333 9.16667H2.08333Z"
        strokeWidth="0"
      />
      <path
        d="M6.25 1.77084V2.39584C6.25 2.47872 6.28292 2.55821 6.34153 2.61681C6.40013 2.67542 6.47962 2.70834 6.5625 2.70834C6.64538 2.70834 6.72487 2.67542 6.78347 2.61681C6.84208 2.55821 6.875 2.47872 6.875 2.39584V1.77084C6.875 1.68796 6.84208 1.60848 6.78347 1.54987C6.72487 1.49127 6.64538 1.45834 6.5625 1.45834C6.47962 1.45834 6.40013 1.49127 6.34153 1.54987C6.28292 1.60848 6.25 1.68796 6.25 1.77084Z"
        strokeWidth="0"
      />
      <path
        d="M2.91669 6.77084H5.62502C5.7079 6.77084 5.78739 6.73792 5.84599 6.67931C5.9046 6.62071 5.93752 6.54122 5.93752 6.45834C5.93752 6.37546 5.9046 6.29598 5.84599 6.23737C5.78739 6.17877 5.7079 6.14584 5.62502 6.14584H2.91669C2.83381 6.14584 2.75432 6.17877 2.69572 6.23737C2.63711 6.29598 2.60419 6.37546 2.60419 6.45834C2.60419 6.54122 2.63711 6.62071 2.69572 6.67931C2.75432 6.73792 2.83381 6.77084 2.91669 6.77084Z"
        strokeWidth="0"
      />
      <path
        d="M2.91669 8.4375H7.50002C7.5829 8.4375 7.66239 8.40458 7.72099 8.34597C7.7796 8.28737 7.81252 8.20788 7.81252 8.125C7.81252 8.04212 7.7796 7.96263 7.72099 7.90403C7.66239 7.84542 7.5829 7.8125 7.50002 7.8125H2.91669C2.83381 7.8125 2.75432 7.84542 2.69572 7.90403C2.63711 7.96263 2.60419 8.04212 2.60419 8.125C2.60419 8.20788 2.63711 8.28737 2.69572 8.34597C2.75432 8.40458 2.83381 8.4375 2.91669 8.4375Z"
        strokeWidth="0"
      />
    </g>
  </svg>
)

Save.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default Save
