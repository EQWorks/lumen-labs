import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Pause from './pause'
import { timeConverter } from '../../utils/time-converter'
import { makeStyles, LinearAnimation } from '../../utils/make-styles'
import { getTailwindConfigColor } from '../../utils/tailwind-config-color'


const Text = (style, error, progress, time) => {
  if (error) {
    return (
      <p className={`${style.uploadedText} text-error-500`}><span className='font-bold'>Error</span>, Please Try Again Later</p>
    )
  }
  if (time) {
    return (
      <p className={`${style.uploadedText} text-primary-500`}>Loaded {progress}%, {timeConverter(time)} remaining</p>
    )
  } 
  return (
    <p className={`${style.uploadedText} text-primary-500`}>Loaded {progress}%</p>
  )
}

const customClasses = (progress) => {
  return makeStyles({
    flexFile: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem',
    },
    fileIndicator: {
      height: '5px',
      backgroundColor: getTailwindConfigColor('secondary-200'),
    },
    fileIndicatorContent: {
      width: `${progress}%`,
    },
    fileName: {
      fontSize: '0.875rem',
      fontWeight: 700,
      fontFamily: 'PT Sans',
      marginBottom: '0.75rem',
    },
    fileSize: {
      fontWeight: 400,
    },
    uploadedText: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: 'PT Sans',
      textAlign: 'right',
      marginTop: '0.75rem',
    },
    pause: {
      width: '1rem',
    },
    pauseEnabled: {
      fill: getTailwindConfigColor('primary-500'),
      '&:hover': {
        cursor: 'pointer',
        fill: getTailwindConfigColor('primary-600'),
      },
      '&:active': {
        fill: getTailwindConfigColor('primary-700'),
      },
    },
    completePause: {
      pointerEvents: 'none',
      fill: getTailwindConfigColor('primary-500'),
    },
    disabledPause: {
      pointerEvents: 'none',
      fill: getTailwindConfigColor('secondary-400'),
    },
  })
}

const FileIndicator = forwardRef(({
  classes, animate, direction, duration, fileName, fileSize, progress, time, pause, error = false, ...rest
}, ref) => {

  const fileIndicatorClasses = Object.freeze({ 
    root: `h-5px w-full rounded-full bg-secondary-200 ${classes.root}`,
    content: `h-full rounded-full bg-primary-500 ${classes.content}`,
  })
  const style = customClasses(progress)

  return (
    <div>
      {
        fileName && fileSize && 
        <p className={`${style.fileName} text-secondary-700`}>{fileName} <span className={`${style.fileSize}`}>({fileSize})</span></p>
      }
      <div className={style.flexFile}>
        <div ref={ref} className={fileIndicatorClasses.root} {...rest}>
          {animate && <LinearAnimation
            width={progress}
            direction={direction}
            duration={duration}
            className={fileIndicatorClasses.content}
          />}
          {!animate && (
            <div className={clsx(`${fileIndicatorClasses.content} ${style.fileIndicatorContent}`, {
              'bg-secondary-500': error,
            })} />
          )}
        </div>
        <Pause onClick={pause} className={clsx(`${style.pause}`, {
          [style.pauseEnabled]: !error && progress !== 100,
          [style.disabledPause]: error,
          [style.completePause]: progress === 100,
        })}/>
      </div>
      {Text(style, error, progress, time)}
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

FileIndicator.defaultProps = {
  classes: { root: '', content: '' },
  animate: false,
  direction: 'rtl',
  duration: 10,
  fileName: null,
  fileSize: null,
  progress: 100,
  time: null,
  pause: () => null,
  error: false,
}

FileIndicator.displayName = 'FileIndicator'

export default FileIndicator
