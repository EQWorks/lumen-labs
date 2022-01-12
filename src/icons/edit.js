import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Edit = ({ className, size, ...props }) => (
  <svg
    className={`${iconSize[size]} ${className}`}
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <g transform="matrix(14,0,0,14.4,0,0)">
      <path
        d="M8.39286 8.92357H0.535714C0.393634 8.92357 0.257373 8.98001 0.156907 9.08048C0.0564412 9.18094 0 9.3172 0 9.45928C0 9.60136 0.0564412 9.73762 0.156907 9.83809C0.257373 9.93856 0.393634 9.995 0.535714 9.995H8.39286C8.53494 9.995 8.6712 9.93856 8.77166 9.83809C8.87213 9.73762 8.92857 9.60136 8.92857 9.45928C8.92857 9.3172 8.87213 9.18094 8.77166 9.08048C8.6712 8.98001 8.53494 8.92357 8.39286 8.92357Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
      <path
        d="M9.68643 1.06643L8.92857 0.308569C8.7244 0.113943 8.45315 0.00537109 8.17107 0.00537109C7.889 0.00537109 7.61775 0.113943 7.41357 0.308569L2.62214 5.09928C2.5705 5.15124 2.53609 5.21782 2.52357 5.29L2.14286 7.43643C2.13346 7.48835 2.13568 7.54172 2.14937 7.59268C2.16306 7.64364 2.18787 7.69094 2.22202 7.73117C2.25617 7.7714 2.29881 7.80356 2.34688 7.82534C2.39494 7.84713 2.44724 7.85798 2.5 7.85714C2.52085 7.85734 2.54167 7.85542 2.56214 7.85143L4.70857 7.47285C4.78083 7.46013 4.84742 7.42547 4.89929 7.37357L9.69 2.58285C9.89086 2.38193 10.0037 2.10946 10.0037 1.82535C10.0037 1.54125 9.89086 1.26878 9.69 1.06785L9.68643 1.06643Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      />
    </g>
  </svg>
)

Edit.propTypes = { className: PropTypes.string, size: PropTypes.string }
Edit.defaultProps = { className: '', size: '' }

export default Edit
