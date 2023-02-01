import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const textClasses = Object.freeze({
  textContainer: 'h-full flex justify-center',
})

const Text = forwardRef(({ textTop, textBottom }, ref) => (
  <div height={ref.current.offsetHeight} className={`skeleton_text__root-container ${textClasses.textContainer}`}>
    <svg width={ref.current.offsetHeight >= 100 ? 600 : 400} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="66" width="100%" height="9%" rx="4" fill="#A9B7D0" className={`${textTop}`}/>
      <rect y="98" width="79%" height="9%" rx="4" fill="#A9B7D0" className={`${textBottom}`}/>
    </svg>
  </div>
))

Text.propTypes = {
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
}
Text.defaultProps = {
  textTop: '',
  textBottom: '',
}

Text.displayName = 'Text'

export default Text
