import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'


const _baseClasses = () => ({
  root: '',
  input: 'w-full',
})

const ToastVerticalBase = forwardRef(({
  classes,
  title,
  description,
  button,
  startIcon,
  endIcon,
  ...rest
}, ref) => {
  const toastVerticalBaseClasses = Object.freeze({
    root: `flex flex-col p-2.5 border ${classes.root ? classes.root : 'w-80'}`,
    header: `flex flex-row justify-between items-center ${classes.header && classes.header}`,
    title: `flex flex-row items-center ${classes.title && classes.title}`,
    content: `mx-6 ${classes.content && classes.content}`,
    description: `flex justify-center ${classes.description && classes.description}`,
    startIcon: `mr-2.5 ${classes.startIcon && classes.startIcon}`,
    endIcon: `${classes.endIcon && classes.endIcon}`,
  })
  
  return (
    <div ref={ref} className={`${toastVerticalBaseClasses.root} ${classes.root}`}>
      <div className={toastVerticalBaseClasses.header}>
        <div className={toastVerticalBaseClasses.title}>
          {startIcon && <div className={toastVerticalBaseClasses.startIcon}>{startIcon}</div>}
          {title && <label>{title}</label>}
        </div>
        {endIcon && <div className={toastVerticalBaseClasses.endIcon}>{endIcon}</div>}
      </div>
      <div className={toastVerticalBaseClasses.content}>
        {description && <div>{description}</div>}
        {button && button}
      </div>
    </div>
  )
})

ToastVerticalBase.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.node,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}

ToastVerticalBase.defaultProps = {
  classes: { 
    root: '', 
    header: '', 
    title: '',
    content: '', 
    description: '',
    startIon: '', 
    endIcon: '', 
  },
  title: '',
  description: '',
  button: null,
  startIcon: null,
  endIcon: null,
}

ToastVerticalBase.displayName = 'ToastVerticalBase'

export default ToastVerticalBase
