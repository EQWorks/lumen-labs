import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '../utils/make-styles'
import { CheckBold } from '../icons'


const styles = makeStyles({
  activeBorderColor: { borderColor: '#2242CD' },
  inactiveBorderColor: { borderColor: '#9E9E9E' },
  activeColor: { color: '#2242CD' },
  inactiveColor: { color: '#9E9E9E' },
  indicatorContainer: { width: '100px' },
  indicatorLabelDefault: {
    marginTop: '5px',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
  },
  indNumContComplete: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#2242CD',
  },
  indNumContIncomplete: {
    width: '20px',
    height: '20px',
    padding: '5.5px 5px 5px 6.5px',
    borderRadius: '10px',
  },
  indicatorNumberDefault: {
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
  },
})

const ProgressIndicator = ({ classes, indicators }) => {
  return (
    <div className={`border ${classes.root} inline-flex justify-between`}>
      {indicators.map(({ label, active, complete }, i) => (
        <div key={i} className={`${classes.indicatorContainer} ${styles.indicatorContainer} flex flex-col items-center`}>
          <span className='flex flex-row items-center w-full'>
            <hr className={clsx('w-full', {
              'invisible': !i,
              [styles.activeBorderColor]: active || complete,
              [styles.inactiveBorderColor]: !active && !complete,
            })}/>
            <span className={clsx(`${classes.indicatorNumberContainer} flex justify-center items-center border`, {
              [styles.activeBorderColor]: active || complete,
              [styles.inactiveBorderColor]: !active && !complete,
              [`px-1 ${styles.indNumContComplete}`]: complete,
              [styles.indNumContIncomplete]: !complete,
            })}>
              {!complete && <p className={clsx(`${classes.indicatorNumber} text-center font-bold ${styles.indicatorNumberDefault}`, {
                [styles.activeColor]: active || complete,
                [styles.inactiveColor]: !active && !complete,
              })}>{i+1}</p>}
              {complete && <CheckBold size='md' className='filled-current text-secondary-50' />}
            </span>
            <hr className={clsx('w-full', {
              'invisible': i+1 === indicators.length,
              [styles.activeBorderColor]: indicators[i+1]?.active || indicators[i+1]?.complete,
              [styles.inactiveBorderColor]: !active && !complete || !indicators[i+1]?.active && !indicators[i+1]?.complete,
            })} />
          </span>
          <p className={clsx(`${classes.indicatorLabel} w-full px-1 uppercase text-center ${styles.indicatorLabelDefault}`, {
            [`font-bold ${styles.activeColor}`]: active || complete,
            [`font-normal ${styles.inactiveColor}`]: !active && !complete,
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
  classes: {
    root: '',
    indicatorContainer: '',
    indicatorLabel: '',
    indicatorNumberContainer: '',
    indicatorNumber: '',
  },
}

export default ProgressIndicator
