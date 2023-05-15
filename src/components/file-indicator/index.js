import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Pause from './pause'
import { timeConverter } from '../../utils/time-converter'
import { makeStyles, LinearAnimation } from '../../utils/make-styles'
import { getTailwindConfigColor } from '../../utils/tailwind-config-color'


const customClasses = (progress) => {
  return makeStyles({
    fileIndicatorRoot: {
      '& .enabled-button': {
        fill: getTailwindConfigColor('primary-500'),
        '&:hover': {
          cursor: 'pointer',
          fill: getTailwindConfigColor('primary-600'),
        },
        '&:active': {
          fill: getTailwindConfigColor('primary-700'),
        },
      },

      '& .complete-button': {
        pointerEvents: 'none',
        fill: getTailwindConfigColor('primary-500'),
      },

      '& .disable-button': {
        pointerEvents: 'none',
        fill: getTailwindConfigColor('secondary-400'),
      },

      '& .indicator-bar': {
        width: `${progress}%`,
      },

      '& .file-name': {
        fontFamily: 'PT Sans',
        fontSize: '0.875rem',
      },

      '& .uploaded': {
        fontFamily: 'PT Sans',
        fontSize: '0.75rem',
      },
    },
  })
}

const Text = (error, progress, time) => {
  if (error) {
    return (
      <p className={'uploaded font-normal text-right mt-3 text-error-500'}><span className='font-bold'>Error</span>, Please Try Again Later</p>
    )
  }
  if (time) {
    return (
      <p className={'uploaded font-normal text-right mt-3 text-primary-500'}>Loaded {progress}%, {timeConverter(time)} remaining</p>
    )
  }
  return (
    <p className={'uploaded font-normal text-right mt-3 text-primary-500'}>Loaded {progress}%</p>
  )
}

const FileIndicator = forwardRef(({
  classes = {
    fileName: '',
    container: '',
    barContainer: '',
    content: '',
    pause: '',
    enabledButton: '',
    disableButton: '',
    completeButton: '',
  },
  animate = false,
  direction = 'rtl',
  duration = 10,
  fileName = null,
  fileSize = null,
  progress = 100,
  time = null,
  pause = () => null,
  error = false,
  ...rest
}, ref) => {
  const style = customClasses(progress)

  const fileIndicatorClasses = Object.freeze({
    fileName: `${classes.fileName ? classes.fileName : ''}`,
    container: classes.container ? classes.container : '',
    barContainer: `h-5px w-full rounded-full bg-secondary-200 ${classes.barContainer ? classes.barContainer : ''}`,
    content: `h-full rounded-full bg-primary-500 ${classes.content ? classes.content : ''}`,
    pause: clsx(`w-4 ${classes.pause ? classes.pause : ''}`, {
      [`enabled-button ${classes.enabledButton ? classes.enabledButton : ''}`]: !error && progress !== 100,
      [`disable-button ${classes.disableButton ? classes.disableButton : ''}`]: error,
      [`complete-button ${classes.completeButton ? classes.completeButton : ''}`]: progress === 100,
    }),
  })

  return (
    <div ref={ref} className={`filed_indicator__root-container ${style.fileIndicatorRoot}`} {...rest}>
      {
        fileName && fileSize &&
        <p className={`file-name font-bold mb-3 text-secondary-700 ${fileIndicatorClasses.fileName}`}>{fileName} <span className='font-normal'>({fileSize})</span></p>
      }
      <div className={`flex flex-row items-center gap-4 ${fileIndicatorClasses.container}`}>
        <div className={fileIndicatorClasses.barContainer}>
          {animate && <LinearAnimation
            width={progress}
            direction={direction}
            duration={duration}
            className={fileIndicatorClasses.content}
          />}
          {!animate && (
            <div className={clsx(`${fileIndicatorClasses.content} indicator-bar`, {
              'bg-secondary-500': error,
            })} />
          )}
        </div>
        <Pause onClick={pause} className={fileIndicatorClasses.pause}/>
      </div>
      {Text(error, progress, time)}
    </div>
  )
})

FileIndicator.propTypes = {
  classes: PropTypes.object,
  animate: PropTypes.bool,
  direction: PropTypes.string,
  duration: PropTypes.number,
  fileName: PropTypes.string,
  fileSize: PropTypes.string,
  progress: PropTypes.number,
  time: PropTypes.number,
  pause: PropTypes.func,
  error: PropTypes.bool,
}

FileIndicator.displayName = 'FileIndicator'

export default FileIndicator
