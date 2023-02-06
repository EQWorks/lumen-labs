import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { TextareaBase } from '../base-components'


const inputSizes = (size) => {
  let inputSize = ''

  switch(size) {
  case 'lg':
    inputSize = 'text-sm tracking-sm leading-1.43'
    break
  case 'md':
    inputSize = 'text-xs tracking-md leading-1.33'
    break
  default:
    break
  }
  
  return inputSize
}


const _areaClasses = ({ container, size }) => ({
  container: `textarea__main-container w-96 flex flex-col font-sans ${container ? container : ''} ${inputSizes(size)}`,
  label: 'text-secondary-600',
  helperText: 'mt-1.5 text-secondary-600',
  wordCount: 'mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6',
})

const _textareaBaseClasses = ({ focus, root, filled, disabled }) => ({
  root: clsx(`textarea__root-container h-24 mt-1.5 rounded-sm p-sm ${root ? root : ''}`,
    { 'border-secondary-400 hover:border-secondary-500': !disabled && !focus },
    { 'border-interactive-500 shadow-focused-interactive': focus },
    { 'border-interactive-500 bg-secondary-50': filled },
    { 'pointer-events-none bg-secondary-100 text-secondary-300 border-secondary-300': disabled },
  ),
  textarea: clsx('textarea__content-container outline-none text-secondary-800', 
    { 'bg-secondary-50': filled },
    { 'bg-secondary-100 placeholder-secondary-300': disabled },
  ),
})

const Area = ({ 
  classes, 
  size, 
  inputProps, 
  label, 
  value,
  maxLength, 
  helperText, 
  disabled, 
  onChange, 
  onSubmit, 
  onFocus, 
  onBlur, 
  ...rest 
}) => {
  const [filled, setFilled] = useState(false)
  const [_value, _setValue] = useState(value)
  const [focus, setFocus] = useState(false)
  const { root, container } = classes
  const areaClasses = _areaClasses({ container, size })
  const textareaBaseClasses = _textareaBaseClasses({ size, focus, root, filled, disabled })

  const handleChange = (e) => {
    _setValue(e.target ? e.target.value : e)

    if (inputProps.onChange) {
      inputProps.onChange(e.target? e.target.value : e)
    }
  
    onChange(e.target ? e.target.value : e)
  }

  const handleFocus = (e) => {
    setFocus(true)
    setFilled(false)
    onFocus(e)
  }

  const handleBlur = (e) => {
    setFocus(false)
    if (_value) setFilled(true)
    onBlur(e)
  }

  return (
    <div className={areaClasses.container}>
      {label && <p className={areaClasses.label}>{label}</p>}
      <form onSubmit={onSubmit}>
        <TextareaBase
          {...inputProps}
          {...rest}
          classes={textareaBaseClasses}
          value={value || _value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </form>
      <div className="grid grid-cols-2">
        {helperText && <p className={areaClasses.helperText}>{helperText}</p>}
        {!isNaN(maxLength) && <p className={areaClasses.wordCount}>{_value?.length || 0}/{maxLength}</p>}
      </div>
    </div>
  )
}

Area.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.oneOf([NaN]), PropTypes.number]),
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}
Area.defaultProps = {
  classes: { root: '', container: '' },
  size: 'md',
  inputProps: {},
  label: '',
  value: '',
  maxLength: NaN,
  helperText: '',
  disabled: false,
  onSubmit: () => {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
}

export default Area
