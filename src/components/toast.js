import React, { forwardRef, useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { ToastBase } from '../base-components'
import ProgressBar from './progress-bar'
import { Close } from '../icons'

import { concatTargetColor } from '../utils/concat-color'
import { makeStyles } from '../utils/make-styles'


const Toast = forwardRef(({
  classes = {
    root: '',
    button: '',
    header: '',
    title: '',
    content: '',
    description: '',
    icon: '',
    endIcon: '',
    rootProgress: '',
    contentProgress: '',
  },
  variant = 'horizontal',
  open = true,
  onClose = () => {},
  type = 'light',
  color = 'info',
  title = '',
  description = '',
  button = null,
  icon = null,
  timeOut = 0,
  onTimeOut = () => {},
  ...rest
}, ref) => {
  const size = {
    horizontal : {
      root: 'w-auto',
      button: 'mr-6',
      content: 'flex flex-row items-center',
    },
    vertical: {
      root: 'w-450px',
      button: 'mt-5px',
      content: 'mx-6 mb-2.5',
    },
  }

  const colorType = {
    light: {
      root: 'shadow-secondary-400 bg-secondary-50',
      header: 'text-secondary-900',
      description: 'text-secondary-800',
      icon: concatTargetColor(color, ['text'], [500]),
      closeIcon: 'text-secondary-600',
      progressBar: {
        root: 'bg-secondary-50',
        content: concatTargetColor(color, ['bg'], [400]),
      },
    },
    dark: {
      root: 'bg-secondary-900',
      header: 'text-secondary-50',
      description: 'text-secondary-50',
      icon: concatTargetColor(color, ['text'], [200]),
      closeIcon: 'text-secondary-200',
      progressBar: {
        root: 'bg-secondary-900',
        content: concatTargetColor(color, ['bg'], [200]),
      },
    },
    'semantic-light': {
      root: concatTargetColor(color, ['shadow', 'bg'], [500, 100]),
      header: 'text-secondary-900',
      description: 'text-secondary-800',
      icon: concatTargetColor(color, ['text'], [500]),
      closeIcon: concatTargetColor(color, ['text'], [500]),
      progressBar: {
        root: concatTargetColor(color, ['bg'], [100]),
        content: concatTargetColor(color, ['bg'], [400]),
      },
    },
    'semantic-dark': {
      root: concatTargetColor(color, ['bg'], [500]),
      header: 'text-secondary-50',
      description: 'text-secondary-100',
      icon: 'text-secondary-50',
      closeIcon: 'text-secondary-50',
      progressBar: {
        root: concatTargetColor(color, ['bg'], [500]),
        content: concatTargetColor(color, ['bg'], [700]),
      },
    },
  }

  const style = makeStyles({
    progressBarRoot: {
      borderRadius: '0 0 6px 6px',
    },
    progressBarContent: {
      borderRadius: '0 4px 4px 6px',
    },
  })

  const toastClasses = Object.freeze({
    root: `toast__root-container ${classes.root} text-sm font-bold tracking-sm leading-1.43 rounded-sm ${size[variant].root} ${colorType[type].root}`,
    header: `toast__header-container ${classes.header} m-2.5 justify-between ${colorType[type].header}`,
    title: `toast__title-container ${classes.title} mr-2.5`,
    button: `toast__button-container${classes.button} cursor-pointer ${size[variant].button} ${colorType[type].icon}`,
    content: `toast__content-container ${classes.content} ${size[variant].content}`,
    description: `toast__description-container ${classes.description} text-xs font-normal tracking-md leading-1.33 ${colorType[type].description}`,
    startIcon: `toast__start-icon-container ${classes.icon} mr-2.5 stroke-current fill-current ${colorType[type].icon}`,
    endIcon: `toast__end-icon-container ${classes.endIcon} cursor-pointer stroke-current fill-current ${colorType[type].closeIcon}`,
  })

  const progressBarClasses = Object.freeze({
    root: `progressBar__root-container ${classes.rootProgress} ${style.progressBarRoot} ${colorType[type].progressBar.root}`,
    content: `progressBar__content-container ${classes.contentProgress} ${style.progressBarContent} ${colorType[type].progressBar.content}`,
  })

  const toastRef = useRef(null)
  const [progress, setProgress] = useState(true)

  useEffect(() => {
    if (open && timeOut) {
      setProgress(true)
      const t = setTimeout(() => {
        if (onTimeOut) {
          onTimeOut()
        }
        setProgress(false)
        onClose()
      }, timeOut)

      return () => clearTimeout(t)
    }
  }, [open, timeOut, onClose, onTimeOut])

  useEffect(() => {
    if (timeOut > 0) {
      const toastEl = toastRef.current
      let fade = ''

      if (toastEl && open) {
        fade = setTimeout(() => {
          toastEl.style.visibility = 'visible'
          toastEl.style.opacity = 1
        }, 500)
        return () => clearTimeout(fade)

      } else if (toastEl && !open) {
        fade = setTimeout(() => {
          toastEl.style.visibility = 'hidden'
          toastEl.style.opacity = 0
        }, 500)
        return () => clearTimeout(fade)
      }
    }
  }, [open, timeOut])

  const handleOnClose = () => {
    setProgress(false)
    onClose()
  }

  const _button = <div className={toastClasses.button}>{button}</div>

  return (
    <>
      <div
        ref={toastRef}
        className={`inline-flex shadow-light-40 ${timeOut > 0 && 'invisible opacity-0 transition-all duration-500'}`}
      >
        <ToastBase
          ref={ref}
          classes={toastClasses}
          variant={variant}
          title={title}
          description={description}
          button={button && _button}
          startIcon={icon}
          endIcon={<Close size='sm' onClick={handleOnClose}/>}
          {...rest}
        >
          {(timeOut > 0 && progress &&
            <ProgressBar
              animate
              direction='ltr'
              progress={open && timeOut ? 100 : 0}
              duration={timeOut/1000}
              classes={progressBarClasses}
            />
          )}
        </ToastBase>
      </div>
    </>
  )
})

Toast.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['light', 'dark', 'semantic-light', 'semantic-dark']),
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.node,
  icon: PropTypes.node,
  timeOut: PropTypes.number,
  onTimeOut: PropTypes.func,
}

Toast.displayName = 'Toast'

export default Toast
