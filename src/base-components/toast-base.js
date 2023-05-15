import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '../utils/make-styles'


const ToastBase = forwardRef(({
  classes = {
    root: '',
    header: '',
    title: '',
    content: '',
    description: '',
    startIcon: '',
    endIcon: '',
  },
  children = null,
  variant = 'horizontal',
  title = '',
  description = '',
  button = null,
  startIcon = null,
  endIcon = null,
  width = '',
  ...rest
}, ref) => {
  const styles = makeStyles({
    root: {
      width: String(width),
    },
  })

  const toastBaseClasses = Object.freeze({
    root: `toastBase__root-container ${classes.root ? classes.root : 'w-80 border'} flex flex-col`,
    header: `toastBase__header-container ${classes.header} flex flex-row items-center`,
    title: `toastBase__title-container ${classes.title} flex flex-row items-center`,
    content: `toastBase__content-container ${classes.content}`,
    description: `toastBase__description-container ${classes.description}`,
    startIcon: `toastBase__startIcon-container ${classes.startIcon}`,
    endIcon: `toastBase__endIcon-container ${classes.endIcon}`,
  })

  return (
    <div ref={ref} className={`${styles.root} ${toastBaseClasses.root} ${classes.root}`} {...rest}>
      { variant === 'horizontal' && <>
        <div className={toastBaseClasses.header}>
          {startIcon && <div className={toastBaseClasses.startIcon}>{startIcon}</div>}
          <div className={toastBaseClasses.content}>
            {title && <label className={toastBaseClasses.title}>{title}</label>}
            {button && button}
          </div>
          {endIcon && <div className={toastBaseClasses.endIcon}>{endIcon}</div>}
        </div>
      </>}
      { variant === 'vertical' && <>
        <div className={toastBaseClasses.header}>
          <div className={toastBaseClasses.title}>
            {startIcon && <div className={toastBaseClasses.startIcon}>{startIcon}</div>}
            {title && <label>{title}</label>}
          </div>
          {endIcon && <div className={toastBaseClasses.endIcon}>{endIcon}</div>}
        </div>
        <div className={toastBaseClasses.content}>
          {description && <div className={toastBaseClasses.description}>{description}</div>}
          {button && button}
        </div>
      </>}
      {children && children}
    </div>
  )
})

ToastBase.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.node,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  width: PropTypes.string,
}

ToastBase.displayName = 'ToastBase'

export default ToastBase
