import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '../../utils/make-styles'
import { CheckBold } from '../../icons'
import Spin from './spin'


const checkComplete = (startIndex, indicators) => {
  const rest = indicators.slice(startIndex)
  return rest.find(({ complete }) => complete)
}

const customClasses = (size) => {
  return makeStyles({
    svgIcon: {
      width: `${size/1.875}rem`,
    },
    text: {
      fontFamily: 'PT Sans',
      fontWeight: 700,
    },
    caption: {
      fontFamily: 'PT Sans',
      fontSize: `${size/2.14}rem`,
      fontWeight: 400,
    },
    captionHorizontal: {
      marginTop: '0.2rem',
    },
    captionVertical: {
      marginLeft: '0.313rem',
      letterSpacing: '0.05em',
    },
    indicatorContainerHorizontal: { 
      width: `${(size/0.20) + 2}rem`,
    },
    indicatorContainerVertical: { 
      height: `${size/0.25}rem`,
    },
    indicatorLabelDefaultHorizontal: {
      marginTop: '0.313rem',
      fontSize: `${size/1.875}rem`,
      lineHeight: `${size/1.875}rem`,
      letterSpacing: '0.05em',
    },
    indicatorLabelDefaultVertical: {
      marginLeft: '0.313rem',
      fontSize: `${size/1.875}rem`,
      letterSpacing: '0.05em',
    },
    indNumContComplete: {
      width: `${size}rem`,
      height: `${size}rem`,
      padding: '0.313rem',
      borderRadius: '50%',
      flexShrink: 0,
    },
    indNumContIncomplete: {
      width: `${size}rem`,
      height: `${size}rem`,
      padding: '0.344rem 0.313rem 0.313rem 0.406rem',
      borderRadius: '50%',
      flexShrink: 0,
    },
    indicatorNumberDefault: {
      fontSize: `${size/2.5}rem`,
      lineHeight: `${size/1.875}rem`,
      letterSpacing: '0.05em',
      flexShrink: 0,
    },
  })
}

const ProgressIndicator = ({ classes, indicators: _indicators, vertical = false, size = 1.875 }) => {

  const styles = customClasses(size)
  
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
    <div className={clsx(`inline-flex justify-between ${classes.root}`, {
      'flex-col': vertical,
    })}>
      {indicators.map(({ label, caption = null, active, complete }, i) => (
        <div key={i} className={clsx({
          [styles.indicatorContainerVertical]: vertical,
          [styles.indicatorContainerHorizontal]: !vertical,
          'flex-col': !vertical,
        }, `flex items-center ${classes.indicatorContainer}`)}>
          <span className={clsx('flex gap-0.5 items-center', {
            'flex-row': !vertical,
            'w-full': !vertical,
            'h-full': vertical,
            'flex-col': vertical,
          })}>

            {/* Left line */}
            <div className={clsx({
              'invisible': !i,
              'w-full': !vertical,
              'h-full': vertical,
              'h-0.5': !vertical,
              'w-0.5': vertical,
              'bg-primary-500': active || complete,
              'bg-secondary-500': !active && !complete,
            })} />

            <span className={clsx({
              'border-primary-500': active || complete,
              'border-secondary-500': !active && !complete,
              [`px-1 ${styles.indNumContComplete} bg-primary-500`]: active,
              [`px-1 ${styles.indNumContComplete} bg-primary-600`]: complete,
              [styles.indNumContIncomplete]: !active && !complete,
            }, `flex justify-center items-center border ${classes.indicatorNumberContainer}`)}>
              {!complete && !active && <p className={clsx({
                'text-primary-500': active || complete,
                'text-secondary-500': !active && !complete,
              }, `text-center font-bold ${styles.indicatorNumberDefault} ${styles.text} ${classes.indicatorNumber}`)}>{i+1}</p>}
              {((complete && !active) || (complete && active)) && <CheckBold className={`${styles.svgIcon} filled-current text-secondary-50`} />}
              {active && !complete && <Spin className={`${styles.svgIcon} filled-current text-secondary-50 animate-spin`} />}
            </span>

            {/* Right Line */}
            <div className={clsx({
              'invisible': i+1 === indicators.length,
              'w-full': !vertical,
              'h-full': vertical,
              'h-0.5': !vertical,
              'w-0.5': vertical,
              'bg-primary-500': indicators[i+1]?.active || indicators[i+1]?.complete,
              'bg-secondary-500': !active && !complete || !indicators[i+1]?.active && !indicators[i+1]?.complete,
            })} />

          </span>
          
          <div>
            <p className={clsx({
              'text-center': !vertical,
              'font-bold text-primary-600': complete,
              'font-bold text-primary-500': active,
              'font-normal text-secondary-600': !active && !complete,
              [styles.indicatorLabelDefaultHorizontal]: !vertical,
              [styles.indicatorLabelDefaultVertical]: vertical,
            }, `${styles.text} px-1 capitalize ${classes.indicatorLabel}`)}>{label}</p>
            { caption ?           
              <p className={clsx({
                'text-center': !vertical,
                'text-primary-500': complete,
                'text-secondary-600': active,
                'text-secondary-500': !active && !complete,
                [styles.captionHorizontal]: !vertical,
                [styles.captionVertical]: vertical,
              }, `${styles.caption} px-1 capitalize ${classes.indicatorLabelCaption}`)}>
                {caption}
              </p> : null}
          </div>
        </div>
      ))}
    </div>
  )
}

ProgressIndicator.propTypes = {
  indicators: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    caption: PropTypes.string,
    active: PropTypes.bool.isRequired,
    complete: PropTypes.bool.isRequired,
  })).isRequired,
  classes: PropTypes.object,
  vertical: PropTypes.bool,
  size: PropTypes.number,
}

ProgressIndicator.defaultProps = {
  classes: {
    root: '',
    indicatorContainer: '',
    indicatorLabel: '',
    indicatorLabelCaption: '',
    indicatorNumberContainer: '',
    indicatorNumber: '',
  },
}

ProgressIndicator.displayName = 'ProgressIndicator'

export default ProgressIndicator
