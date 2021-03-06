import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, LinearAnimation } from '../utils/make-styles'


const ProgressBar = forwardRef(({
  classes, animate, direction, duration, progress, ...rest
}, ref) => {
  const progressBarClasses = Object.freeze({ 
    root: `h-5px w-full bg-primary-100 ${classes.root}`,
    content: `h-full bg-primary-500 ${classes.content}`,
  })
  const style = makeStyles({
    progressBarContent: {
      width: `${progress}%`,
    },
  })

  return (
    <div ref={ref} className={progressBarClasses.root} {...rest}>
      {animate && <LinearAnimation
        width={progress}
        direction={direction}
        duration={duration}
        className={progressBarClasses.content}
      />}
      {!animate && (
        <div className={`${progressBarClasses.content} ${style.progressBarContent}`} />
      )}
    </div>
  )
})

ProgressBar.propTypes = {
  classes: PropTypes.object,
  animate: PropTypes.bool,
  direction: PropTypes.string,
  duration: PropTypes.number,
  progress: PropTypes.number,
}

ProgressBar.defaultProps = {
  classes: { root: '', content: '' },
  animate: false,
  direction: 'rtl',
  duration: 10,
  progress: 100,
}

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
