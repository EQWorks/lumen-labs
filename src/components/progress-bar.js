import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, LinearAnimation } from '../utils/make-styles'


const ProgressBar = forwardRef(({
  classes = { root: '', content: '' },
  animate = false,
  direction = 'rtl',
  duration = 10,
  progress = 100,
  ...rest
}, ref) => {
  const progressBarClasses = Object.freeze({
    root: `progressBar__root-container ${classes.root} h-5px w-full bg-primary-100`,
    content: `progressBar__content-container ${classes.content} h-full bg-primary-500`,
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

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
