import React, { useState, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'

import { Delete } from '../icons'


const InputBase = forwardRef(({
  classes,
  value,
  defaultValue,
  placeholder,
  onClick,
  onChange,
  onDelete,
  startIcon,
  endIcon,
  prefix,
  suffix,
  deleteButton,
  size,
  required,
  disabled,
  ...rest
}, ref) => {
  const baseClasses = Object.freeze({
    root: 'flex border',
    input: `w-full ${disabled ? 'cursor-not-allowed' : ''}`,
  })
  const [_value, _setValue] = useState(defaultValue)
  const [_placeholder, _setPlaceholder] = useState(placeholder)
  
  const inputRef = useRef(null)

  const inputOnChange = (e) => {
    if (value === undefined || value === null) {
      _setValue(e.target.value)
    } else {
      _setValue('')
    }
    onChange(e)
  }

  const handleFocus = () => {
    if (defaultValue) {
      _setPlaceholder(defaultValue)
      _setValue('')
    }
  }

  const handleBlur = () => {
    if (!value && _placeholder && defaultValue) {
      _setValue(_placeholder)
      _setPlaceholder('')
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    _setValue('')
    inputRef.current.focus()
    onDelete(e)
    onChange(e)
  }

  return (
    <div ref={ref} className={`${baseClasses.root} ${classes.root}`}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {prefix && <span className={classes.prefix}>{prefix}</span>}
      <input
        ref={inputRef}
        className={`${baseClasses.input} ${classes.input}`}
        value={value || _value}
        onClick={onClick}
        onChange={inputOnChange}
        placeholder={_placeholder}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        {...rest}
      />
      {suffix && <span className={classes.suffix}>{suffix}</span>}
      {endIcon && !(value || _value) && <div className={classes.endIcon}>{endIcon}</div>}
      {deleteButton && (value || _value) &&
        <div className={classes.endIcon} onMouseDown={handleDelete}>
          <Delete className='fill-current text-secondary-600 cursor-pointer' size={size}/>
        </div>
      }
    </div>
  )
})

InputBase.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  deleteButton: PropTypes.bool,
  size: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
}
InputBase.defaultProps = {
  classes: { root: '', input: '', startIon: '', endIcon: '', prefix: '', suffix: '' },
  value: null,
  defaultValue: '',
  placeholder: '',
  onClick: () => {},
  onChange: () => {},
  onDelete: () => {},
  startIcon: null,
  endIcon: null,
  prefix: '',
  suffix: '',
  deleteButton: true,
  size: 'md',
  required: false,
  disabled: false,
}

InputBase.displayName = 'InputBase'

export default InputBase
