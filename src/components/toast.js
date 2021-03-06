import React, { forwardRef, useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { ToastBase } from '../base-components'
import ProgressBar from './progress-bar'
import { Close } from '../icons'

import { concatTargetColor } from '../utils/concat-color'
import { makeStyles } from '../utils/make-styles'


const Toast = forwardRef(({
  classes,
  variant,
  open,
  onClose,
  type,
  color,
  title,
  description,
  button,
  icon,
  timeOut,
  onTimeOut,
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
    root: `text-sm font-bold tracking-sm leading-1.43 rounded-sm
      ${classes.root && classes.root} ${size[variant].root} ${colorType[type].root}`,
    header: `m-2.5 justify-between ${classes.header && classes.header} ${colorType[type].header}`,
    title: `mr-2.5 ${classes.title && classes.title}`,
    button: `cursor-pointer ${classes.button && classes.button} ${size[variant].button} ${colorType[type].icon}`,
    content: `${classes.content && classes.content} ${size[variant].content}`,
    description: `text-xs font-normal tracking-md leading-1.33 
      ${classes.description && classes.description} ${colorType[type].description}`,
    startIcon: `mr-2.5 stroke-current fill-current ${classes.icon && classes.icon} ${colorType[type].icon}`,
    endIcon: `cursor-pointer stroke-current fill-current ${colorType[type].closeIcon}`,
  })

  const progressBarClasses = Object.freeze({
    root: `${style.progressBarRoot} ${colorType[type].progressBar.root}`,
    content: `${style.progressBarContent} ${colorType[type].progressBar.content}`,
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
  classes: PropTypes.object,
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

Toast.defaultProps = {
  classes: { 
    root: '', 
    header: '', 
    title: '',
    content: '', 
    description: '',
    icon: '', 
  },
  variant: 'horizontal',
  open: true,
  onClose: () => {},
  type: 'light',
  color: 'info',
  title: '',
  description: '',
  button: null,
  icon: null,
  timeOut: 0,
  onTimeOut: () => {},
}

Toast.displayName = 'Toast'

export default Toast
