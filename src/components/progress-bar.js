import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'


const ProgressBar = forwardRef(({ classes, percentage, ...rest }, ref) => {
  const progressBarClasses = Object.freeze({ 
    root: `h-5px w-full bg-primary-100 ${classes.root}`,
    content: `h-full bg-primary-500 ${classes.content}`,
  })

  const style = makeStyles({
    progressBarContent: {
      width: `${percentage}%`,
    },
  })

  return (
    <div ref={ref} className={progressBarClasses.root} {...rest}>
      <div className={`${progressBarClasses.content} ${style.progressBarContent}`} />
    </div>
  )
})

ProgressBar.propTypes = {
  classes: PropTypes.object,
  percentage: PropTypes.number.isRequired,
}

ProgressBar.defaultProps = {
  classes: { 
    root: '', 
    content: '', 
  },
}

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
