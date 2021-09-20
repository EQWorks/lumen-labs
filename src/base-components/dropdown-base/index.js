import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Menu } from '@headlessui/react'

import './dropdown-base.css'


const _contentSize = (size, multiSelect, selectedOptions) => {
  let contentSize = ''

  switch(size) {
  case 'lg':
    contentSize = {
      menu: 'py-5px',
      box: `min-h-9 px-2.5 ${ selectedOptions && multiSelect ? 'py-9px' : 'py-2'}`,
      font: 'text-sm tracking-sm leading-1.43',
      icon: 'mb-9px',
    }
    break
  case 'md':
    contentSize = {
      menu: 'py-3px',
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

const DropdownBase = forwardRef(({ 
  classes, 
  renderSelectedOptions, 
  button, 
  onClick,
  open,
  startIcon, 
  endIcon, 
  size, 
  children, 
  placeholder, 
  multiSelect, 
  customTrigger,
  overflow,
  disabled,
  ...rest
}, ref) => {
  const selectedOptions = typeof renderSelectedOptions === 'function' && Boolean(renderSelectedOptions()?.props?.children)

  const contentSize = _contentSize(size, multiSelect, selectedOptions)
  const dropdownClasses = Object.freeze({
    button: clsx(`font-sans cursor-pointer border rounded-sm ${classes.button ? classes.button : 'w-250px'}`,
      { 'border-secondary-400 hover:border-secondary-500': !disabled && !open },
      { 'border-interactive-500 shadow-focused-interactive': open && !disabled },
      { 'pointer-events-none bg-secondary-100 text-secondary-400 border-secondary-400': disabled },
    ),
    content: `flex justify-between items-center ${contentSize.box} ${classes.content ? classes.content : 'w-full'}`,
    placeholder: `normal-case ${disabled ? 'text-secondary-300' : 'text-secondary-400'}`,
    startIcon: clsx(`mr-2.5 fill-current stroke-current ${selectedOptions && multiSelect && contentSize.icon}`, 
      { 'text-secondary-600': !disabled },
    ),
    endIcon: clsx(`fill-current stroke-current 
      ${selectedOptions && multiSelect && contentSize.icon}
      ${overflow === 'horizontal' && 'ml-2.5'}`,
    { 'text-secondary-600': !disabled },
    { 'text-interactive-500': open && !disabled },
    ),
  })
  
  const containerClasses = Object.freeze({
    root: `relative ${contentSize.font} ${classes.root}`,
    menu: `absolute max-h-screen overflow-y-auto font-sans bg-white z-10 shadow-blue-30 mt-5px border rounded-sm border-secondary-400 focus:outline-none
      ${contentSize.menu} ${classes.menu ? classes.menu : 'w-full'}`,
  })

  const _button = (
    <div className={`${selectedOptions && multiSelect && 'pb-0'} ${dropdownClasses.content}`}>
      {startIcon && <div className={dropdownClasses.startIcon}>{startIcon}</div>}
      <div className={
        `dropdown-content flex flex-row capitalize whitespace-nowrap 
        ${overflow === 'vertical' && selectedOptions && 'flex-wrap'}
        ${overflow === 'horizontal' && selectedOptions && 'scroll-overlay overflow-x-auto overflow-y-hidden'}`
      }>
        { selectedOptions ? 
          renderSelectedOptions()
          : 
          (
            <span className={dropdownClasses.placeholder}>
              {placeholder}
            </span>
          )
        }
      </div>
      {endIcon && <div className={dropdownClasses.endIcon}>{endIcon}</div>}
    </div>
  )

  return (
    <div ref={ref} className={containerClasses.root} {...rest}>
      <Menu>
        {customTrigger ||
          <Menu.Button as="div">
            <div className={`${button ? 'button-container' : dropdownClasses.button}`} onClick={onClick}>
              {button ? button : _button}
            </div>
          </Menu.Button>
        }
        {open && (
          <Menu.Items static className={containerClasses.menu}>
            {children}
          </Menu.Items>
        )}
      </Menu>
    </div>
  )
})

DropdownBase.propTypes = {
  classes: PropTypes.exact({
    root: PropTypes.string,
    button: PropTypes.string,
    content: PropTypes.string,
    menu: PropTypes.string,
  }),
  children: PropTypes.node,
  renderSelectedOptions: PropTypes.func,
  button: PropTypes.node,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  multiSelect: PropTypes.bool,
  customTrigger: PropTypes.node,
  overflow: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
}

DropdownBase.defaultProps = {
  classes: { 
    root: '',
    button: '',
    content: '',
    menu: '',
  },
  children: null,
  renderSelectedOptions: () => {},
  button: null,
  size: 'md',
  startIcon: null,
  endIcon: null,
  placeholder: 'Select',
  multiSelect: false,
  customTrigger: null,
  overflow: 'horizontal',
  disabled: false,
}

DropdownBase.displayName = 'DropdownBase'

export default DropdownBase
