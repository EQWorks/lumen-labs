import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const barClasses = Object.freeze({
  barContainer: 'h-full flex justify-center',
})

const Bar = forwardRef(({ bar = '' }, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_bar__root-container ${barClasses.barContainer}`}>
    <svg width={ref.current.offsetHeight >= 900 ? 500 : 320} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="116" width="13%" height="36%" fill="#A9B7D0" rx="4" className={`${bar}`}/>
      <rect x="56" y="52" width="13%" height="71%" fill="#A9B7D0" rx="4" className={`${bar}`}/>
      <rect x="112" width="13%" height="100%" fill="#A9B7D0" rx="4" className={`${bar}`}/>
      <rect x="168" y="100" width="13%" height="44%" fill="#A9B7D0" rx="4" className={`${bar}`}/>
      <rect x="224" y="52" width="13%" height="71%" fill="#A9B7D0" rx="4" className={`${bar}`}/>
      <rect x="280" y="116" width="13%" height="36%" fill="#A9B7D0" rx="4" className={`${bar}`}/>
    </svg>
  </div>
))

Bar.propTypes = {
  bar: PropTypes.string,
}

Bar.displayName = 'Bar'

export default Bar
