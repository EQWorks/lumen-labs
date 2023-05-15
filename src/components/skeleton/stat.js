import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const statClasses = Object.freeze({
  statContainer: 'h-full flex justify-center',
})

const Stat = forwardRef(({
  statTop = '',
  statBottom = '',
}, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_stat__root-container ${statClasses.statContainer}`}>
    <svg width={ref.current.offsetHeight >= 900 ? 350 : 200} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="50%" fill="#A9B7D0" rx="4" className={`${statTop}`}/>
      <rect x="10" y="56" width="90%" height="30%" fill="#A9B7D0" rx="4" className={`${statBottom}`}/>
    </svg>
  </div>
))

Stat.propTypes = {
  statTop: PropTypes.string,
  statBottom: PropTypes.string,
}

Stat.displayName = 'Stat'

export default Stat
