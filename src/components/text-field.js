import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { InputBase } from '../base-components'


const _textFieldClasses = ({ error }) => ({
  label: clsx('font-sans text-sm ml-1', { 'text-primary-700': !error, 'text-error': error }),
  helperText: clsx('font-sans text-xs ml-1', { 'text-primary-700': !error, 'text-error': error }),
})
const _inputBaseClasses = ({ focus, error, width, filled }) => ({
  root: clsx(`${width} rounded-sm p-sm`,
    { 'border-primary shadow-focused-primary': focus && !error },
    { 'border-error shadow-focused-error': focus && error },
    { 'border-primary bg-primary-10': filled },
  ),
  input: clsx('outline-none text-primary-700', { 'bg-primary-10': filled }),
  startIcon: 'mt-2 mr-1',
  endIcon: 'mt-0.5 mx-1',
})

const TextField  = ({ classes, inputProps, label, helperText, error, onSubmit }) => {
  const [filled, setFilled] = useState(false)
  const [value, setValue] = useState(false)
  const [focus, setFocus] = useState(false)
  const { width } = classes
  const textFieldClasses = _textFieldClasses({ error })
  const inputBaseClasses = _inputBaseClasses({ focus, error, width, filled })

  const handleChange = (val) => {
    setValue(val)
    if (inputProps.onChange) {
      inputProps.onChange(val)
    }
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
    <div className='flex flex-col'>
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
      {helperText && <p className={textFieldClasses.helperText}>{helperText}</p>}
    </div>
  )
}

TextField.propTypes = {
  classes: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  onSubmit: PropTypes.func,
}
TextField.defaultProps = {
  classes: { width: '' },
  inputProps: {},
  label: '',
  helperText: '',
  error: false,
  onSubmit: () => {},
}

export default TextField
