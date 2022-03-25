import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '../utils/make-styles'


const styles = makeStyles({
  indicatorContainer: { width: '100px' },
  indicatorLabelDefault: {
    marginTop: '5px',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
  },
  indicatorLabelActive: {
    color: '#2242CD',
  },
  indicatorLabelInactive: {
    color: '#9E9E9E',
  },
})

const ProgressIndicator = ({ classes, indicators }) => {
  return (
    <div className={`border ${classes.root} inline-flex justify-between`}>
      {indicators.map(({ label, active, complete }, i) => (
        <div key={i} className={`${classes.indicatorContainer} ${styles.indicatorContainer} flex flex-col items-center`}>
          <span className='flex flex-row items-center w-full'>
            <hr className={clsx('w-full', { 'invisible': !i })}/>
            <p className='px-2 rounded-full border'>{i+1}</p>
            <hr className={clsx('w-full', { 'invisible': i+1 === indicators.length })} />
          </span>
          <p className={clsx(`${classes.indicatorLabel} w-full px-1 uppercase text-center ${styles.indicatorLabelDefault}`, {
            [`font-bold ${styles.indicatorLabelActive}`]: active || complete,
            [`font-normal ${styles.indicatorLabelInactive}`]: !active && !complete,
          })}>{label}</p>
        </div>
      ))}
    </div>
  )
}

ProgressIndicator.propTypes = {
  indicators: PropTypes.array.isRequired,
  classes: PropTypes.object,
}
ProgressIndicator.defaultProps = {
  classes: { root: '', indicatorContainer: '', indicatorLabel: '' },
}

export default ProgressIndicator
