import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

import { FirstStep, MiddleStep, LastStep } from './steps'
import { CheckBold } from '../../icons'
import { makeStyles } from '../../utils/make-styles' 
import { getTailwindConfigColor } from '../../utils/tailwind-config-color'


const customClasses = (size) => {
  return makeStyles({
    stepIndicatorRoot: {
      '& .container': {
        width: `${size}rem`,
      },
      '& .textPosition': {
        width: 'inherit',
        zIndex: 1,
      },
      '& .textContainer': {
        width: 'inherit',
        height: 'inherit',
      },
      '& .icon': {
        width: `${size/12.8}rem`,
        height: `${size/12.8}rem`,
      },
      '& .text': {
        fontFamily: 'PT Sans',
        fontSize: `${size/16}rem`,
      },
      '& .stepDefault': {
        fill: getTailwindConfigColor('secondary-100'),
      },
      '& .stepActive': {
        fill: getTailwindConfigColor('primary-500'),
      },
      '& .stepComplete': {
        fill: getTailwindConfigColor('neutral-50'),
      },
      '& .checkSize': {
        width: `${size/21.33}rem`,
      },
    } },
  )
}

const StepLabel = ({ index, label, active, complete }) => (
  <div className='absolute h-full textPosition'>
    <div className='flex gap-2 items-center justify-center textContainer'>
      <div className={clsx('flex items-center justify-center rounded-full icon', {
        'bg-secondary-600': !active && !complete,
        'bg-primary-500': complete || active,
        'border border-white': active && !complete,
      })}>
        { complete ? 
          <CheckBold className='checkSize filled-current text-secondary-50' /> 
          : 
          <p className={clsx({
            'text-white': active || (!active && !complete),
          }, 'font-bold text')}>{index+1}</p> }
      </div>
      <p className={clsx({
        'text-secondary-600': !active && !complete,
        'text-white': active && !complete,
        'text-primary-500': complete,
      }, 'text capitalize')}>{label}</p>
    </div>
  </div>
)

const First = (index, label, active, complete, stepDefault, stepComplete, stepActive) => index === 0 ? (
  <div className='absolute container'>
    {StepLabel({ index, label, active, complete })}
    <FirstStep className={clsx({ [`stepDefault ${stepDefault ? stepDefault : '' }`]: !active && !complete, [`stepComplete ${stepComplete ? stepComplete : ''}`]: complete, [`stepActive ${stepActive ? stepActive : ''}`]: active })} />
  </div>
)  : null 

const Middle = (index, indiLength, label, active, complete, styles, size, stepDefault, stepComplete, stepActive) => index !== 0 && index !== indiLength ? (
  <div className='absolute container' style={{ left: index === 1 ? `${size}rem` : `${size + ((size*0.47) * (index - 2)) + ((size*0.47) * index)}rem` }}>
    {StepLabel({ index, label, active, complete, styles })}
    <MiddleStep className={clsx({ [`stepDefault ${stepDefault ? stepDefault : '' }`]: !active && !complete, [`stepComplete ${stepComplete ? stepComplete : ''}`]: complete, [`stepActive ${stepActive ? stepActive : ''}`]: active })} />
  </div>
) : null

const Last = (index, indiLength, label, active, complete, styles, size, stepDefault, stepComplete, stepActive) => index === indiLength ? (
  <div className='absolute container' style={{ left: `${size + ((size*0.94) * (index - 1))}rem` }}>
    {StepLabel({ index, label, active, complete, styles })}
    <LastStep className={clsx({ [`stepDefault ${stepDefault ? stepDefault : '' }`]: !active && !complete, [`stepComplete ${stepComplete ? stepComplete : ''}`]: complete, [`stepActive ${stepActive ? stepActive : ''}`]: active })} />
  </div>
) : null

const checkComplete = (startIndex, indicators) => {
  const rest = indicators.slice(startIndex)
  return rest.find(({ complete }) => complete)
}

const StepIndicator = ({ classes, size = 16, indicators: _indicators }) => {

  const styles = customClasses(size)

  const { stepDefault, stepComplete, stepActive } = classes

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
    <div className={`step_indicator__root-container ${styles.stepIndicatorRoot}`}>
      {indicators.map(({ label, active, complete }, i) => (
        <div key={i}>
          {First(i, label, active, complete, size, stepDefault, stepComplete, stepActive)}
          {Middle(i, indicators.length - 1, label, active, complete, styles, size, stepDefault, stepComplete, stepActive)}
          {Last(i, indicators.length - 1, label, active, complete, styles, size, stepDefault, stepComplete, stepActive)}
        </div>
      ))}
    </div>
  )
}

StepLabel.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  complete: PropTypes.bool.isRequired,
}

StepIndicator.propTypes = {
  classes: PropTypes.object,
  indicators: PropTypes.array.isRequired,
  size: PropTypes.number,
}

StepIndicator.defaultProps = {
  classes: {
    stepDefault: '',
    stepComplete: '',
    stepActive: '',
  },
}

StepIndicator.displayName = 'StepIndicator'

export default StepIndicator
