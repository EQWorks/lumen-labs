import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const pyramidClasses = Object.freeze({
  pyramidContainer: 'h-full flex justify-center',
})

const Pyramid = forwardRef(({ bar = '' }, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_pyramid__root-container ${pyramidClasses.pyramidContainer}`}>
    <svg width={ref.current.offsetHeight >= 900 ? 500 : 320} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="116" width="36" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="74" y="49" width="78" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="32" y="98" width="120" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect y="147" width="152" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="168" width="36" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="168" y="49" width="78" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="168" y="98" width="120" height="33" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="168" y="147" width="152" height="33" rx="4" fill="#A9B7D0" className={bar}/>
    </svg>
  </div>
))

Pyramid.propTypes = {
  bar: PropTypes.string,
}

Pyramid.displayName = 'Pyramid'

export default Pyramid
