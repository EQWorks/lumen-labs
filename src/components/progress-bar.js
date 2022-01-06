import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'


const classes = makeStyles({
  mainContainer: {
    height: '0.313rem',
    width: '100%',
    borderRadius: '0 0 0.5rem 0.5rem',

    '& .progress-bar-filler': {
      height: '100%',
      borderRadius: 'inherit',
    },
  },
})

const ProgressBar = forwardRef(({ percentage, ...rest }, ref) => {
  // const classes = useStyles(percentage)()

  return (
    <div ref={ref} className={`progress-bar-container bg-primary-100 ${classes.mainContainer}`} {...rest}>
      <div className={`progress-bar-filler bg-primary-500 ${classes.mainContainer}`} style={{width: `${percentage}%`}}/>
    </div>
  )
})

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
}

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
