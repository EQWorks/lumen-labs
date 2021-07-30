import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import DialogBase from '../base-components/dialog-base'


const _contentSize = (size) => {
  let contentSize = ''

  switch(size) {
  case 'lg':
    contentSize = {
      box: 'min-h-9 p-sm',
      font: 'text-sm tracking-sm leading-1.43',
    }
    break
  case 'md':
    contentSize = {
      box: 'min-h-7 py-1.5 px-2.5',
      font: 'text-xs tracking-md leading-1.33',
    }
    break
  default:
    break
  }
  
  return contentSize
}

const DropdownBase = forwardRef(({ classes, renderOptions, startIcon, endIcon, size, children, placeholder, disabled }, ref) => {
  const [focus, setFocus] = useState(false)
  const selectedOptions = renderOptions() ? renderOptions().props.children : ''

  const contentSize = _contentSize(size)
  const dropdownClasses = Object.freeze({
    container: clsx(`font-sans ${contentSize.box} ${classes.container ? classes.container : 'w-250px border rounded-sm'}`,
      { 'border-secondary-400 hover:border-secondary-500': !disabled && !focus },
      { 'border-interactive-500 shadow-focused-interactive': focus && !disabled },
    ),
    content: `flex justify-between items-center ${classes.content ? classes.content : 'w-full'}`,
    startIcon: clsx('mr-4 fill-current stroke-current', { 'text-secondary-600': !disabled }),
    endIcon: clsx('ml-4 fill-current stroke-current',
      {
        'text-secondary-600': !disabled,
        'text-interactive-500': focus && !disabled,
      },
    ),
  })
  
  const dialogClasses = Object.freeze({
    root: `${contentSize.font}`,
    dialog: `font-sans ${classes.dropdown ? classes.dropdown : 'w-250px h-auto mt-5px border rounded-sm border-secondary-400'}`
  })

  const handleFocus = () => {
    setFocus(!focus)
  }

  const button = (
    <div className={`${dropdownClasses.container}`}>
      <div className={`${dropdownClasses.content}`}>
        {startIcon && <div className={dropdownClasses.startIcon}>{startIcon}</div>}
        <div className='flex flex-row flex-wrap capitalize'>
          { selectedOptions.length ? 
            renderOptions()
          : 
            placeholder ? placeholder : 'Select' 
          }
        </div>
        {endIcon && <div className={dropdownClasses.endIcon}>{endIcon}</div>}
      </div>
    </div>
  )

  return (
    <>
      <DialogBase ref={ref} classes={dialogClasses} button={button} onClick={handleFocus} open={focus}>
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
  renderOptions: PropTypes.func,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

DropdownBase.defaultProps = {
  classes: { 
    container: '',
    content: '',
    dropdown: '',
  },
  renderOptions: () => {},
  size: 'lg',
  placeholder: '',
  disabled: false,
}

DropdownBase.displayName = 'DropdownBase'

export default DropdownBase
