import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const ToastBase = forwardRef(({
  classes,
  variant,
  title,
  description,
  button,
  startIcon,
  endIcon,
  ...rest
}, ref) => {
  const toastBaseClasses = Object.freeze({
    root: `flex flex-col ${classes.root ? classes.root : 'w-80 border'}`,
    header: `flex flex-row items-center ${classes.header && classes.header}`,
    title: `flex flex-row items-center ${classes.title && classes.title}`,
    content: `${classes.content && classes.content}`,
    description: `${classes.description && classes.description}`,
    startIcon: `${classes.startIcon && classes.startIcon}`,
    endIcon: `${classes.endIcon && classes.endIcon}`,
  })
  
  return (
    <div ref={ref} className={`${toastBaseClasses.root} ${classes.root}`} {...rest}>
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
    </div>
  )
})

ToastBase.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.node,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}

ToastBase.defaultProps = {
  classes: { 
    root: '', 
    header: '', 
    title: '',
    content: '', 
    description: '',
    startIcon: '', 
    endIcon: '', 
  },
  variant: 'horizontal',
  title: '',
  description: '',
  button: null,
  startIcon: null,
  endIcon: null,
}

ToastBase.displayName = 'ToastBase'

export default ToastBase
