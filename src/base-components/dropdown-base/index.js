import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import DialogBase from '../dialog-base'

import './dropdown-base.css'


const _contentSize = (size, multiSelect, selectedOptions) => {
  let contentSize = ''

  switch(size) {
  case 'lg':
    contentSize = {
      box: `min-h-9 px-2.5 ${ selectedOptions && multiSelect ? 'py-9px' : 'py-2'}`,
      font: 'text-sm tracking-sm leading-1.43',
      icon: 'mb-9px',
    }
    break
  case 'md':
    contentSize = {
      box: `min-h-7 px-2.5 ${ selectedOptions && multiSelect ? 'p-5px' : 'py-1.5'}`,
      font: 'text-xs tracking-md leading-1.33',
      icon: 'mb-5px',
    }
    break
  default:
    break
  }
  
  return contentSize
}

const DropdownBase = forwardRef((
  { classes, 
    renderOptions, 
    startIcon, 
    endIcon, 
    size, 
    children, 
    placeholder, 
    multiSelect, 
    overflow,
    disabled,
  }, ref) => {
  const [focus, setFocus] = useState(false)
  const selectedOptions = renderOptions() && renderOptions().props.children ? true : false

  const contentSize = _contentSize(size, multiSelect, selectedOptions)
  const dropdownClasses = Object.freeze({
    container: clsx(`font-sans cursor-pointer ${classes.container ? classes.container : 'w-250px border rounded-sm'}`,
      { 'border-secondary-400 hover:border-secondary-500': !disabled && !focus },
      { 'border-interactive-500 shadow-focused-interactive': focus && !disabled },
      { 'pointer-events-none bg-secondary-100 text-secondary-300 border-secondary-300': disabled },
    ),
    content: `flex justify-between items-center ${contentSize.box} ${classes.content ? classes.content : 'w-full'}`,
    placeholder: `${disabled ? 'text-secondary-300' : 'text-secondary-400'}`,
    startIcon: clsx(`mr-2.5 fill-current stroke-current ${selectedOptions && multiSelect && contentSize.icon}`, 
      { 'text-secondary-600': !disabled },
    ),
    endIcon: clsx(`fill-current stroke-current 
      ${selectedOptions && multiSelect && contentSize.icon}
      ${overflow === 'horizontal' && 'ml-2.5'}`,
    { 'text-secondary-600': !disabled },
    { 'text-interactive-500': focus && !disabled },
    ),
  })
  
  const dialogClasses = Object.freeze({
    root: `${contentSize.font}`,
    dialog: `max-h-screen overflow-y-auto font-sans bg-white z-10 ${classes.dropdown ? classes.dropdown : 'w-250px mt-5px border rounded-sm border-secondary-400'}`,
  })

  const handleFocus = () => {
    setFocus(!focus)
  }

  const button = (
    <div className={`${dropdownClasses.container}`}>
      <div className={`${selectedOptions && multiSelect && 'pb-0'} ${dropdownClasses.content}`}>
        {startIcon && <div className={dropdownClasses.startIcon}>{startIcon}</div>}
        <div className={
          `dropdown-content flex flex-row capitalize whitespace-nowrap 
          ${overflow === 'vertical' && selectedOptions && 'flex-wrap'}
          ${overflow === 'horizontal' && selectedOptions && 'scroll-overlay overflow-auto'}`
        }>
          { selectedOptions ? 
            renderOptions()
            : 
            (
              <span className={dropdownClasses.placeholder}>
                {placeholder ? placeholder : 'Select' }
              </span>
            )
          }
        </div>
        {endIcon && <div className={dropdownClasses.endIcon}>{endIcon}</div>}
      </div>
    </div>
  )

  return (
    <>
      <DialogBase ref={ref} classes={dialogClasses} button={button} onClick={handleFocus} open={focus} disabled={disabled}>
        {children}
      </DialogBase>
    </>
  )
})

DropdownBase.propTypes = {
  classes: PropTypes.exact({
    container: PropTypes.string,
    content: PropTypes.string,
    dropdown: PropTypes.string,
  }),
  children: PropTypes.node,
  renderOptions: PropTypes.func,
  size: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  multiSelect: PropTypes.bool,
  overflow: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
}

DropdownBase.defaultProps = {
  classes: { 
    container: '',
    content: '',
    dropdown: '',
  },
  children: null,
  renderOptions: () => {},
  size: 'md',
  startIcon: null,
  endIcon: null,
  placeholder: '',
  multiSelect: false,
  overflow: 'horizontal',
  disabled: false,
}

DropdownBase.displayName = 'DropdownBase'

export default DropdownBase
