import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { ToastBase } from '../base-components'


const Tooltip = ({
  classes,
  children,
  type,
  title,
  description,
  width,
  position,
  arrow,
  delay,
  ...rest
}) => {
  const colorType = Object.freeze({
    light: {
      root: 'bg-secondary-50',
      header: 'text-secondary-800',
      description: 'text-secondary-600',
    },
    dark: {
      root: 'bg-neutral-700',
      header: 'text-neutral-50',
      description: 'text-neutral-300',
    },
  })

  const arrowStyles = Object.freeze({
    top: '-top-3.5',
    left: '-left-3.5',
    bottom: '-bottom-3.5',
    right: '-right-3.5',
  })

  const tooltipPosition = Object.freeze({
    top: `bottom-full ${arrow ? 'mb-9px' : 'mb-5px'}`,
    left: `right-full ${arrow ? 'mr-9px' : 'mr-5px'}`,
    bottom: `top-full ${arrow ? 'mt-9px' : 'mt-5px'}`,
    right: `left-full ${arrow ? 'ml-9px' : 'ml-5px'}`,
  })

  const tooltipClasses = Object.freeze({
    root: `tooltip__root-container tooltip absolute p-2.5 invisible opacity-0 rounded-sm shadow-dark-10 z-20 transition-all duration-500 ${classes.root && classes.root} ${colorType[type].root} ${tooltipPosition[position]}`,
    arrow: `tooltip__arrow-container tooltip w-2.5 h-2.5 absolute invisible opacity-0 transform rotate-45 z-20 transition-all duration-500 ${classes.arrow} ${arrowStyles[position]} ${colorType[type].root}`,
    header: `tooltip__header-container header text-xs font-bold tracking-md leading-1.33 capitalize ${(title && description) && 'mb-5px'} ${classes.header && classes.header} ${colorType[type].header}`,
    title: `tooltip__title-container title ${classes.title && classes.title}`,
    content: `tooltip__content-container content ${classes.content && classes.content}`,
    description: `tooltip__description-container description text-xxs font-normal tracking-md leading-1.2 
      ${classes.description && classes.description} ${colorType[type].description}`,
  })

  const tooltipRef = useRef(null)
  let timeOut = ''

  const handleMouseEnter = () => {
    const tooltipEl = tooltipRef.current.getElementsByClassName('tooltip')
    timeOut = setTimeout(() => {
      Array.from(tooltipEl).forEach(el => {
        el.style.visibility = 'visible'
        el.style.opacity = 1
      })
    }, delay)
  }

  const handleMouseLeave = () => {
    const tooltipEl = tooltipRef.current.getElementsByClassName('tooltip')
    Array.from(tooltipEl).forEach(el => {
      el.style.visibility = 'hidden'
      el.style.opacity = 0
    })
    if (timeOut) clearTimeout(timeOut)
  }

  return (
    <div 
      ref={tooltipRef}
      className={`${classes.container} relative inline-flex flex-col items-center justify-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ToastBase
        classes={tooltipClasses}
        variant='vertical'
        title={title} 
        description={description}
        width={width}
        {...rest}
      />
      { arrow && <>  
        <div
          className={`shadow-dark-10 ${tooltipClasses.arrow}`}
          style={{
            zIndex: 19,
          }}
        />
        <div
          className={tooltipClasses.arrow}
        />
      </>}
      {children}
    </div> 
  )
}

Tooltip.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  arrow: PropTypes.bool,
  delay: PropTypes.number,
}

Tooltip.defaultProps = {
  classes: { 
    container: '', 
    root: '', 
    arrow: '', 
    header: '', 
    title: '',
    content: '', 
    description: '',
  },
  onClose: () => {},
  type: 'light',
  title: '',
  description: '',
  width: 'auto',
  position: 'top',
  arrow: true,
  delay: 0,
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
