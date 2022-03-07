import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { InputBase } from '../base-components'
import Area from './area'

const _inputSize = ({ size }) => {
  let inputSize = ''

  switch(size) {
  case 'lg':
    inputSize = {
      box: 'h-9 p-sm',
      font: 'text-sm tracking-sm leading-1.43',
    }
    break
  case 'md':
    inputSize = {
      box: 'h-7 py-1.5 px-2.5',
      font: 'text-xs tracking-md leading-1.33',
    }
    break
  default:
    break
  }
  
  return inputSize
}

const _textFieldClasses = ({ container, inputSize, success, error }) => ({
  container: `flex flex-col font-sans ${container ? container : 'w-250px'} ${inputSize.font}`,
  label: 'text-secondary-600',
  helperText: clsx('mt-1.5 text-secondary-600', { 
    'text-error-500': error, 
    'text-success-500': success, 
  }),
  wordCount: 'mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6',
})

const _inputBaseClasses = ({ label, inputSize, focus, success, error, root, input, filled, disabled }) => ({
  root: clsx(`${`rounded-sm ${label && 'mt-1.5'} ${inputSize.box} ${root && root}`}`,
    { 'border-secondary-400 hover:border-secondary-500 bg-secondary-50': !disabled && !focus && !error && !success },
    { 'border-interactive-500 shadow-focused-interactive': focus && !error && !success },
    { 'border-error-500 shadow-focused-error': error },
    { 'border-success-500 shadow-focused-success': success },
    { 'border-interactive-500 bg-secondary-50': focus && filled },
    { 'pointer-events-none bg-secondary-100 text-secondary-400 border-secondary-400': disabled },
  ),
  input: clsx(`outline-none ${input && input}`, 
    { 'bg-secondary-50': filled },
    { 'text-secondary-800': !disabled },
    { 'bg-secondary-100 text-secondary-400 placeholder-secondary-400': disabled },
  ),
  startIcon: clsx('mt-0.5 mr-4 fill-current stroke-current', { 'text-secondary-600': !disabled }),
  endIcon: clsx('mt-0.5 ml-4 fill-current stroke-current',
    {
      'text-secondary-600': !disabled,
      'text-interactive-500': focus && !error && !success, 
      'text-error-500': error, 
      'text-success-500': success, 
    },
  ),
  prefix: 'mr-2.5 text-secondary-600',
  suffix: 'ml-2.5 text-secondary-600',
})

const TextField  = ({ classes, size, inputProps, label, maxLength, helperText, success, error, required, disabled, deleteButton, onChange, onClick, onDelete, onSubmit, ...rest }) => {
  const [filled, setFilled] = useState(false)
  const [value, setValue] = useState(false)
  const [focus, setFocus] = useState(false)
  const { root, input, container } = classes
  const inputSize = _inputSize({ size })
  const textFieldClasses = _textFieldClasses({ container, inputSize, success, error })
  const inputBaseClasses = _inputBaseClasses({ label, inputSize, focus, success, error, root, input, filled, disabled })

  const handleChange = (val) => {
    setValue(val)
    if (inputProps.onChange) {
      inputProps.onChange(val)
    }

    onChange(val)
  }

  const handleFocus = () => {
    setFocus(true)
    setFilled(false)
  }

  const handleBlur = () => {
    setFocus(false)
    if (value) setFilled(true)
  }

  return (
    <div className={textFieldClasses.container}>
      {label && <div className='flex flex-row'>
        <p className={textFieldClasses.label}>{label}</p>
        {required && <span className='flex flex-row ml-5px text-error-500'>*</span>}
      </div>}
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ ...e, target: e.target.children[0].children[0] })}
      }>
        <InputBase
          {...inputProps}
          classes={inputBaseClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onClick={onClick}
          onDelete={onDelete}
          size={size}
          deleteButton={!disabled && deleteButton}
          required={required}
          {...rest}
        />
      </form>
      <div className="grid grid-cols-2">
        {helperText && <p className={textFieldClasses.helperText}>{helperText}</p>}
        {maxLength && <p className={textFieldClasses.wordCount}>{value.length || 0}/{maxLength}</p>}
      </div>
    </div>
  )
}

TextField.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  helperText: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  deleteButton: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
}
TextField.defaultProps = {
  classes: { root: '', input: '', container: '' },
  size: 'md',
  inputProps: {},
  label: '',
  maxLength: null,
  helperText: '',
  success: false,
  error: false,
  required: false,
  disabled: false,
  deleteButton: true,
  onChange: () => {},
  onClick: () => {},
  onDelete: () => {},
  onSubmit: () => {},
}

TextField.Area = Area

export default TextField
