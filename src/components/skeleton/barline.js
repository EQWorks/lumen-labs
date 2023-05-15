import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const barlineClasses = Object.freeze({
  barlineContainer: 'h-full flex justify-center',
})

const Barline = forwardRef(({
  bar = '',
  linePath = '',
}, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_barline__root-container ${barlineClasses.barlineContainer}`}>
    <svg width={ref.current.offsetHeight >= 900 ? 500 : 320} viewBox="0 0 320 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="137" width="40" height="40" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="56" y="113" width="40" height="64" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="112" y="81" width="40" height="96" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="168" y="97" width="40" height="80" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="224" y="49" width="40" height="128" rx="4" fill="#A9B7D0" className={bar}/>
      <rect x="280" y="33" width="40" height="144" rx="4" fill="#A9B7D0" className={bar}/>
      <path d="M5 113L73.9044 84.3578C74.4767 84.1199 75.0228 83.8235 75.5342 83.4735L127.602 47.8258C130.169 46.0685 133.461 45.7612 136.309 47.0131L180.782 66.5649C184.131 68.0374 188.039 67.3357 190.666 64.7899L237.007 19.8943C238.282 18.6591 239.894 17.8285 241.64 17.507L315 4"
        stroke="#A9B7D0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={linePath}/>
    </svg>
  </div>
))

Barline.propTypes = {
  bar: PropTypes.string,
  linePath: PropTypes.string,
}

Barline.displayName = 'Barline'

export default Barline
