import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const lineClasses = Object.freeze({
  lineContainer: 'h-full flex justify-center',
})

const Line = forwardRef(({
  lineCircle = '',
  linePath = '',
}, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_line__root-container ${lineClasses.lineContainer}`}>
    <svg width={ref.current.offsetHeight >= 900 ? 500 : 320} viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="140" r="20" fill="#A9B7D0" className={lineCircle}/>
      <circle cx="76" cy="94" r="20" fill="#A9B7D0" className={lineCircle}/>
      <circle cx="132" cy="20" r="20" fill="#A9B7D0" className={lineCircle}/>
      <circle cx="188" cy="110" r="20" fill="#A9B7D0" className={lineCircle}/>
      <circle cx="244" cy="74" r="20" fill="#A9B7D0" className={lineCircle}/>
      <circle cx="300" cy="134" r="20" fill="#A9B7D0" className={lineCircle}/>
      <path d="M19 142L75.1411 94.7232C75.7115 94.2429 76.22 93.6936 76.6548 93.0879L123.947 27.2161C127.74 21.9341 135.71 22.2931 139.012 27.8946L183.028 102.565C185.704 107.104 191.689 108.384 195.987 105.337L236.534 76.5852C240.23 73.9643 245.298 74.4999 248.365 77.8356L300 134"
        stroke="#A9B7D0" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" className={linePath}/>
    </svg>
  </div>
))

Line.propTypes = {
  lineCircle: PropTypes.string,
  linePath: PropTypes.string,
}

Line.displayName = 'Line'

export default Line
