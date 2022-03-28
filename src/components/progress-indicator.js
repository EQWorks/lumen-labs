import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '../utils/make-styles'
import { CheckBold } from '../icons'


const styles = makeStyles({
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

const checkComplete = (startIndex, indicators) => {
  const rest = indicators.slice(startIndex)
  return rest.find(({ complete }) => complete)
}

const ProgressIndicator = ({ classes, indicators: _indicators }) => {
  const indicators = useMemo(() => _indicators.map((ind, i) => {
    if (!ind.complete && checkComplete(i, _indicators)) {
      return ({ ...ind, complete: true })
    }
    if (_indicators[i-1]?.complete && !ind.complete) {
      return ({ ...ind, active: true })
    }
    return ind
  }), [_indicators])

  return (
    <div className={`${classes.root} inline-flex justify-between`}>
      {indicators.map(({ label, active, complete }, i) => (
        <div key={i} className={`${classes.indicatorContainer} ${styles.indicatorContainer} flex flex-col items-center`}>
          <span className='flex flex-row items-center w-full'>
            <hr className={clsx('w-full', {
              'invisible': !i,
              'border-primary-500': active || complete,
              'border-secondary-500': !active && !complete,
            })}/>
            <span className={clsx(`${classes.indicatorNumberContainer} flex justify-center items-center border`, {
              'border-primary-500': active || complete,
              'border-secondary-500': !active && !complete,
              [`px-1 ${styles.indNumContComplete} bg-primary-500`]: complete,
              [styles.indNumContIncomplete]: !complete,
            })}>
              {!complete && <p className={clsx(`${classes.indicatorNumber} text-center font-bold ${styles.indicatorNumberDefault}`, {
                'text-primary-500': active || complete,
                'text-secondary-500': !active && !complete,
              })}>{i+1}</p>}
              {complete && <CheckBold size='md' className='filled-current text-secondary-50' />}
            </span>
            <hr className={clsx('w-full', {
              'invisible': i+1 === indicators.length,
              'border-primary-500': indicators[i+1]?.active || indicators[i+1]?.complete,
              'border-secondary-500': !active && !complete || !indicators[i+1]?.active && !indicators[i+1]?.complete,
            })} />
          </span>
          <p className={clsx(`${classes.indicatorLabel} w-full px-1 uppercase text-center ${styles.indicatorLabelDefault}`, {
            'font-bold text-primary-500': active || complete,
            'font-normal text-secondary-500': !active && !complete,
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
