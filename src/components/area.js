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
  container: `font-sans ${container ? container : 'w-96 flex flex-col'} ${inputSizes(size)}`,
  label: 'text-secondary-600',
  helperText: 'mt-1.5 text-secondary-600',
  wordCount: 'mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6',
})

const _textareaBaseClasses = ({ focus, root, filled, disabled }) => ({
  root: clsx(`${root ? root : 'h-24 mt-1.5 rounded-sm p-sm'}`,
    { 'border-secondary-400 hover:border-secondary-500': !disabled && !focus },
    { 'border-interactive-500 shadow-focused-interactive': focus },
    { 'border-interactive-500 bg-secondary-50': filled },
    { 'pointer-events-none bg-secondary-100 text-secondary-300 border-secondary-300': disabled },
  ),
  textarea: clsx('outline-none text-secondary-800', 
    { 'bg-secondary-50': filled },
    { 'bg-secondary-100 placeholder-secondary-300': disabled },
  ),
})

const Area = ({ classes, size, inputProps, label, maxLength, helperText, disabled, onSubmit }) => {
  const [filled, setFilled] = useState(false)
  const [value, setValue] = useState(false)
  const [focus, setFocus] = useState(false)
  const { root, container } = classes
  const areaClasses = _areaClasses({ container, size })
  const textareaBaseClasses = _textareaBaseClasses({ size, focus, root, filled, disabled })

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
    <div className={areaClasses.container}>
      {label && <p className={areaClasses.label}>{label}</p>}
      <form onSubmit={onSubmit}>
        <TextareaBase
          {...inputProps}
          classes={textareaBaseClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </form>
      <div className="grid grid-cols-2">
        {helperText && <p className={areaClasses.helperText}>{helperText}</p>}
        {maxLength && <p className={areaClasses.wordCount}>{value.length || 0}/{maxLength}</p>}
      </div>
    </div>
  )
}

Area.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
}
Area.defaultProps = {
  classes: { root: '', container: '' },
  size: 'md',
  inputProps: {},
  label: '',
  maxLength: 125,
  helperText: '',
  disabled: false,
  onSubmit: () => {},
}

export default Area
