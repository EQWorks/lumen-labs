import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { InputBase } from '../base-components'
import Area from './area'


const _textFieldClasses = ({ container, success, error }) => ({
  container: `${container ? container : 'w-250px flex flex-col'}`,
  label: 'text-secondary-600',
  helperText: clsx('mt-1.5 text-secondary-600', { 
    'text-error-500': error, 
    'text-success-500': success, 
  }),
  wordCount: 'mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6',
})

const _inputBaseClasses = ({ focus, success, error, root, filled, disabled }) => ({
  root: clsx(`${root ? root : 'h-9 mt-1.5 rounded-sm p-sm font-sans text-sm tracking-sm leading-1.43'}`,
    { 'border-secondary-600': !disabled },
    { 'border-interactive-500 shadow-focused-interactive': focus && !error && !success },
    { 'border-error-500 shadow-focused-error': error },
    { 'border-success-500 shadow-focused-success': success },
    { 'border-interactive-500 bg-neutral-50': filled },
    { 'pointer-events-none bg-secondary-100 text-secondary-300 border-secondary-300': disabled },
  ),
  input: clsx('outline-none text-secondary-800', 
    { 'bg-neutral-50': filled },
    { 'bg-secondary-100 placeholder-secondary-300': disabled },
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

const TextField  = ({ classes, inputProps, label, maxLength, helperText, success, error, disabled, onChange, onSubmit }) => {
  const [filled, setFilled] = useState(false)
  const [value, setValue] = useState(false)
  const [focus, setFocus] = useState(false)
  const { root, container } = classes
  const textFieldClasses = _textFieldClasses({ container, success, error })
  const inputBaseClasses = _inputBaseClasses({ focus, success, error, root, filled, disabled })

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
      {label && <p className={textFieldClasses.label}>{label}</p>}
      <form onSubmit={onSubmit}>
        <InputBase
          {...inputProps}
          classes={inputBaseClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
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
  inputProps: PropTypes.object,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  helperText: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
TextField.defaultProps = {
  classes: { root: '', container: '' },
  inputProps: {},
  label: '',
  maxLength: null,
  helperText: '',
  success: false,
  error: false,
  disabled: false,
  onChange: () => {},
  onSubmit: () => {},
}

TextField.Area = Area

export default TextField
