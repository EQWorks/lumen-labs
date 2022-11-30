import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '../../utils/make-styles'
import { CheckBold } from '../../icons'
import Spin from './spin'


const customClasses = (size) => {
  return makeStyles({
    progressIndicatorRoot: {
      '& .svg-icon': {
        width: `${size/1.875}rem`,
      },
      '& .text': {
        fontFamily: 'PT Sans',
      },
      '& .caption': {
        fontFamily: 'PT Sans',
        fontSize: `${size/2.14}rem`,
      },
      '& .indicator-h': {
        width: `${(size/0.20) + 2}rem`,
      },
      '& .indicator-v': {
        height: `${size/0.25}rem`,
      },
      '& .label-h': {
        marginTop: '0.313rem',
        fontSize: `${size/1.875}rem`,
        lineHeight: `${size/1.875}rem`,
        letterSpacing: '0.05em',
      },
      '& .label-v': {
        marginLeft: '0.313rem',
        fontSize: `${size/1.875}rem`,
        letterSpacing: '0.05em',
      },
      '& .number-complete': {
        width: `${size}rem`,
        height: `${size}rem`,
        padding: '0.313rem',
        border: '0',
        borderRadius: '50%',
        flexShrink: 0,
      },
      '& .number-incomplete': {
        width: `${size}rem`,
        height: `${size}rem`,
        padding: '0.344rem 0.313rem 0.313rem 0.406rem',
        borderRadius: '50%',
        flexShrink: 0,
      },
      '& .number': {
        fontSize: `${size/2.5}rem`,
        lineHeight: `${size/1.875}rem`,
        letterSpacing: '0.05em',
        flexShrink: 0,
      },
    },
  })
}

const checkComplete = (startIndex, indicators) => {
  const rest = indicators.slice(startIndex)
  return rest.find(({ complete }) => complete)
}

const ProgressIndicator = forwardRef(({
  classes, indicators: _indicators, vertical = false, size = 1.875, ...rest
}, ref) => {
  const styles = customClasses(size)

  const { 
    leftLineActive, 
    leftLineDisabled, 
    rightLineActive, 
    rightLineDisabled, 
    numberActiveContainer, 
    numberCompleteContainer, 
    numberDisabledContainer,
    numberActive,
    numberDisabled,
    labelActive,
    labelComplete,
    labelDisabled,
    captionActive,
    captionComplete,
    captionDisabled,
  } = classes
  const progressIndicatorClasses = Object.freeze({ 
    container: clsx('progress_indicator__root-container inline-flex justify-between', {
      'flex-col': vertical,
    }),
    indicatorContainer: clsx('flex items-center', {
      'indicator-v': vertical,
      'indicator-h': !vertical,
      'flex-col': !vertical,
    }),
    progressPosition: clsx('flex gap-0.5 items-center', {
      'flex-row': !vertical,
      'w-full': !vertical,
      'h-full': vertical,
      'flex-col': vertical,
    }),
    leftLine: (i, active, complete) => clsx({
      'invisible': !i,
      'w-full': !vertical,
      'h-full': vertical,
      'h-0.5': !vertical,
      'w-0.5': vertical,
      [`bg-primary-500 ${leftLineActive ? leftLineActive : ''}`]: active || complete,
      [`bg-secondary-500 ${leftLineDisabled ? leftLineDisabled : ''}`]: !active && !complete,
    }),
    rightLine: (i, indicators, active, complete) => clsx({
      'invisible': i+1 === indicators.length,
      'w-full': !vertical,
      'h-full': vertical,
      'h-0.5': !vertical,
      'w-0.5': vertical,
      [`bg-primary-500 ${rightLineActive ? rightLineActive : '' }`]: indicators[i+1]?.active || indicators[i+1]?.complete,
      [`bg-secondary-500 ${rightLineDisabled ? rightLineDisabled : ''}`]: !active && !complete || !indicators[i+1]?.active && !indicators[i+1]?.complete,
    }),
    numberContainer: (active, complete) => clsx('flex justify-center items-center border', {
      'border-primary-500': active || complete,
      'border-secondary-500': !active && !complete,
      [`px-1 bg-primary-500 number-complete ${numberActiveContainer ? numberCompleteContainer : ''}`]: active,
      [`px-1 bg-primary-600 number-complete ${numberCompleteContainer ? numberCompleteContainer : ''}`]: complete,
      [`number-incomplete ${numberDisabledContainer ? numberDisabledContainer : ''}`]: !active && !complete,
    }),
    numberText: (active, complete) => clsx(`text-center font-bold text number ${classes.indicatorNumber}`, {
      [`text-primary-500 ${numberActive ? numberActive : ''}`]: active || complete,
      [`text-secondary-500 ${numberDisabled ? numberDisabled : ''}`]: !active && !complete,
    }),
    indicatorLabel: (active, complete) => clsx(`px-1 capitalize font-bold text ${classes.indicatorLabel}`, {
      'text-center': !vertical,
      [`font-bold text-primary-600 ${labelComplete ? labelComplete : ''}`]: complete,
      [`font-bold text-primary-500 ${labelActive ? labelActive : ''}`]: active,
      [`font-normal text-secondary-600 ${labelDisabled ? labelDisabled : ''}`]: !active && !complete,
      'label-h': !vertical,
      'label-v': vertical,
    }),
    indicatorCaption: (active, complete) => clsx(`caption font-normal px-1 capitalize ${classes.indicatorLabelCaption}`, {
      'text-center': !vertical,
      [`text-primary-500 ${captionComplete ? captionComplete : ''}`]: complete,
      [`text-secondary-600 ${captionActive ? captionActive : ''}`]: active,
      [`text-secondary-500 ${captionDisabled ? captionDisabled : ''}`]: !active && !complete,
      'mt-1': !vertical,
      'ml-1.5 tracking-wider': vertical,
    }),
  })
  
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
    <div ref={ref} className={`${styles.progressIndicatorRoot} ${progressIndicatorClasses.container}`} {...rest}>
      {indicators.map(({ label, caption = null, active, complete }, i) => (
        <div key={i} className={progressIndicatorClasses.indicatorContainer}>
          <span className={progressIndicatorClasses.progressPosition}>
            {/* Left line */}
            <div className={progressIndicatorClasses.leftLine(i, active, complete)} />

            <span className={progressIndicatorClasses.numberContainer(active, complete)}>
              {
                !complete && !active && 
                <p className={progressIndicatorClasses.numberText(active, complete)}>{i+1}</p>
              }
              {((complete && !active) || (complete && active)) && <CheckBold className={'svg-icon filled-current text-secondary-50'} />}
              {active && !complete && <Spin className={'svg-icon filled-current text-secondary-50 animate-spin'} />}
            </span>

            {/* Right Line */}
            <div className={progressIndicatorClasses.rightLine(i, indicators, active, complete)} />

          </span>
          
          <div>
            <p className={progressIndicatorClasses.indicatorLabel(active, complete)}>{label}</p>
            { caption ?           
              <p className={progressIndicatorClasses.indicatorCaption(active, complete)}>
                {caption}
              </p> : null}
          </div>
        </div>
      ))}
    </div>
  )
})

ProgressIndicator.propTypes = {
  indicators: PropTypes.array.isRequired,
  classes: PropTypes.object,
  vertical: PropTypes.bool,
  size: PropTypes.number,
}

ProgressIndicator.defaultProps = {
  indicators: {
    label: PropTypes.string.isRequired,
    caption: PropTypes.string,
    active: PropTypes.bool.isRequired,
    complete: PropTypes.bool.isRequired,
  },
  classes: {
    leftLineActive: '',
    leftLineDisabled: '',
    rightLineActive: '',
    rightLineDisabled: '',
    numberActiveContainer: '',
    numberCompleteContainer: '',
    numberDisabledContainer: '',
    numberActive: '',
    numberDisabled: '',
    labelActive: '',
    labelComplete: '',
    labelDisabled: '',
    captionActive: '',
    captionComplete: '',
    captionDisabled: '',
  },
}

ProgressIndicator.displayName = 'ProgressIndicator'

export default ProgressIndicator
