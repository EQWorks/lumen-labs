import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'


const ToastBase = forwardRef(({
  classes,
  type,
  title,
  description,
  button,
  startIcon,
  endIcon,
  ...rest
}, ref) => {
  const toastBaseClasses = Object.freeze({
    root: `flex flex-col p-2.5 border ${classes.root ? classes.root : 'w-80'}`,
    header: `flex flex-row justify-between items-center ${classes.header && classes.header}`,
    title: `flex flex-row items-center ${classes.title && classes.title}`,
    content: `mx-6 ${classes.content && classes.content}`,
    description: `flex justify-center ${classes.description && classes.description}`,
    startIcon: `mr-2.5 ${classes.startIcon && classes.startIcon}`,
    endIcon: `${classes.endIcon && classes.endIcon}`,
  })
  
  return (
    <div ref={ref} className={`${toastBaseClasses.root} ${classes.root}`}>
    { type === 'horizontal' && <>
      <div className={toastBaseClasses.title}>
        {startIcon && <div className={toastBaseClasses.startIcon}>{startIcon}</div>}
        {title && <label>{title}</label>}
        {button && button}
        {endIcon && <div className={toastBaseClasses.endIcon}>{endIcon}</div>}
      </div>
    </>}
    { type === 'vertical' && <>
      <div className={toastBaseClasses.header}>
        <div className={toastBaseClasses.title}>
          {startIcon && <div className={toastBaseClasses.startIcon}>{startIcon}</div>}
          {title && <label>{title}</label>}
        </div>
        {endIcon && <div className={toastBaseClasses.endIcon}>{endIcon}</div>}
      </div>
      <div className={toastBaseClasses.content}>
        {description && <div>{description}</div>}
        {button && button}
      </div>
    </>}
    </div>
  )
})

ToastBase.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.oneOf(['horizontal', 'vertical']),
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
    startIon: '', 
    endIcon: '', 
  },
  type: 'horizontal',
  title: '',
  description: '',
  button: null,
  startIcon: null,
  endIcon: null,
}

ToastBase.displayName = 'ToastBase'

export default ToastBase
