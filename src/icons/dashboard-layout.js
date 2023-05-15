import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const DashboardLayout = ({
  className = '',
  size = '',
  ...props
}) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <g transform="matrix(14.2,0,0,14.2,0,0)">
        <path
          d="M0.329177 0.329163C0.2522 0.406771 0.208804 0.511521 0.208344 0.620829V5.20416C0.208344 5.31467 0.252242 5.42065 0.330382 5.49879C0.408523 5.57693 0.514503 5.62083 0.62501 5.62083H3.95834C4.06885 5.62083 4.17483 5.57693 4.25297 5.49879C4.33111 5.42065 4.37501 5.31467 4.37501 5.20416V0.620829C4.37501 0.510322 4.33111 0.404342 4.25297 0.326201C4.17483 0.248061 4.06885 0.204163 3.95834 0.204163H0.62501C0.569882 0.204391 0.515348 0.215558 0.464566 0.237015C0.413785 0.258472 0.367766 0.289793 0.329177 0.329163V0.329163Z"
          strokeWidth="0"
        />
        <path
          d="M9.375 0.204163H6.04167C5.93116 0.204163 5.82518 0.248061 5.74704 0.326201C5.6689 0.404342 5.625 0.510322 5.625 0.620829V2.70416C5.625 2.81467 5.6689 2.92065 5.74704 2.99879C5.82518 3.07693 5.93116 3.12083 6.04167 3.12083H9.375C9.48551 3.12083 9.59149 3.07693 9.66963 2.99879C9.74777 2.92065 9.79167 2.81467 9.79167 2.70416V0.620829C9.79167 0.510322 9.74777 0.404342 9.66963 0.326201C9.59149 0.248061 9.48551 0.204163 9.375 0.204163Z"
          strokeWidth="0"
        />
        <path
          d="M4.25418 9.67082C4.33115 9.59321 4.37455 9.48846 4.37501 9.37915V7.29582C4.37501 7.18531 4.33111 7.07933 4.25297 7.00119C4.17483 6.92305 4.06885 6.87915 3.95834 6.87915H0.62501C0.514503 6.87915 0.408523 6.92305 0.330382 7.00119C0.252242 7.07933 0.208344 7.18531 0.208344 7.29582V9.37915C0.208344 9.48966 0.252242 9.59564 0.330382 9.67378C0.408523 9.75192 0.514503 9.79582 0.62501 9.79582H3.95834C4.01347 9.79559 4.06801 9.78442 4.11879 9.76296C4.16957 9.74151 4.21559 9.71019 4.25418 9.67082Z"
          strokeWidth="0"
        />
        <path
          d="M9.375 4.37915H6.04167C5.93116 4.37915 5.82518 4.42305 5.74704 4.50119C5.6689 4.57933 5.625 4.68531 5.625 4.79582V9.37915C5.625 9.48966 5.6689 9.59564 5.74704 9.67378C5.82518 9.75192 5.93116 9.79582 6.04167 9.79582H9.375C9.48551 9.79582 9.59149 9.75192 9.66963 9.67378C9.74777 9.59564 9.79167 9.48966 9.79167 9.37915V4.79582C9.79167 4.68531 9.74777 4.57933 9.66963 4.50119C9.59149 4.42305 9.48551 4.37915 9.375 4.37915Z"
          strokeWidth="0"
        />
      </g>
    </svg>

  )
}

DashboardLayout.propTypes = { className: PropTypes.string, size: PropTypes.string }

export default DashboardLayout
