import React, { forwardRef, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ToastBase } from '../base-components'
import { Close } from '../icons'

import { concatTargetColor } from '../utils/concat-color'


const Toast = forwardRef(({
  classes,
  variant,
  display,
  setDisplay,
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
      content: 'mx-6',
    },
  }

  const colorType = {
    light: {
      root: 'shadow-secondary-400 bg-secondary-50',
      header: 'text-secondary-900',
      description: 'text-secondary-800',
      icon: concatTargetColor(color, ['text'], [500]),
      closeIcon: 'text-secondary-600',
    },
    dark: {
      root: 'bg-secondary-900',
      header: 'text-secondary-50',
      description: 'text-secondary-50',
      icon: concatTargetColor(color, ['text'], [200]),
      closeIcon: 'text-secondary-200',
    },
    'semantic-light': {
      root: concatTargetColor(color, ['shadow', 'bg'], [500, 100]),
      header: 'text-secondary-900',
      description: 'text-secondary-800',
      icon: concatTargetColor(color, ['text'], [500]),
      closeIcon: concatTargetColor(color, ['text'], [500]),
    },
    'semantic-dark': {
      root: concatTargetColor(color, ['bg'], [500]),
      header: 'text-secondary-50',
      description: 'text-secondary-100',
      icon: 'text-secondary-50',
      closeIcon: 'text-secondary-50',
    },
  }

  const toastClasses = Object.freeze({
    root: `p-2.5 text-sm font-bold tracking-sm leading-1.43 rounded-10px 
      ${classes.root && classes.root} ${size[variant].root} ${colorType[type].root}`,
    header: `justify-between ${classes.header && classes.header} ${colorType[type].header}`,
    title: `mr-2.5 ${classes.title && classes.title}`,
    button: `cursor-pointer ${classes.button && classes.button} ${size[variant].button} ${colorType[type].icon}`,
    content: `${classes.content && classes.content} ${size[variant].content}`,
    description: `text-xs font-normal tracking-md leading-1.33 
      ${classes.description && classes.description} ${colorType[type].description}`,
    startIcon: `mr-2.5 stroke-current fill-current ${classes.icon && classes.icon} ${colorType[type].icon}`,
    endIcon: `cursor-pointer stroke-current fill-current ${colorType[type].closeIcon}`,
  })

  const toastRef = useRef(null)
  let timer = ''
  
  useEffect(() => {
    if (timeOut > 0) {
      const toastEl = toastRef.current
      let fade = ''
      
      display && (timer = setTimeout(() => {
        if (onTimeOut) onTimeOut()
        setDisplay(false)
      }, timeOut))

      if (toastEl && display) {
        fade = setTimeout(() => {
          toastEl.style.visibility = 'visible'
          toastEl.style.opacity = 1
        }, 500)
      } else if (toastEl && !display) {
        setTimeout(() => {
          toastEl.style.visibility = 'hidden'
          toastEl.style.opacity = 0
        }, 500)

        if (fade) clearTimeout(fade)
      }
    }
  }, [display])

  const handleOnClose = () => {
    onClose()
    setDisplay(false)
    if (timer) clearTimeout(timer)
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
        />
      </div>
    </>
  )
})

Toast.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  display: PropTypes.bool,
  setDisplay: PropTypes.func,
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
  display: true,
  setDisplay: () => {},
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
