import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'


const _baseClasses = () => ({
  root: 'flex border',
  input: 'w-full',
})

const InputBase = forwardRef(({
  classes,
  value,
  defaultValue,
  placeholder,
  onClick,
  onChange,
  startIcon,
  endIcon,
  prefix,
  suffix,
  ...rest
}, ref) => {
  const baseClasses = _baseClasses()
  const [_value, _setValue] = useState(defaultValue)
  const [_placeholder, _setPlaceholder] = useState(placeholder)

  const inputOnChange = (e) => {
    if (value === undefined || value === null) {
      _setValue(e.target.value)
    } else {
      _setValue('')
    }
    onChange(`${prefix && prefix}` + `${e.target.value}` + `${suffix && suffix}`)
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
  
  return (
    <div ref={ref} className={`${baseClasses.root} ${classes.root}`} onFocus={handleFocus} onBlur={handleBlur}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {prefix && <span className={classes.prefix}>{prefix}</span>}
      <input
        className={`${baseClasses.input} ${classes.input}`}
        value={value || _value}
        onClick={onClick}
        onChange={inputOnChange}
        placeholder={_placeholder}
        {...rest}
      />
      {suffix && <span className={classes.suffix}>{suffix}</span>}
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
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
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
}
InputBase.defaultProps = {
  classes: { root: '', input: '', startIon: '', endIcon: '', prefix: '', suffix: '' },
  value: null,
  defaultValue: '',
  placeholder: '',
  onClick: () => {},
  onChange: () => {},
  startIcon: null,
  endIcon: null,
  prefix: '',
  suffix: '',
}

InputBase.displayName = 'InputBase'

export default InputBase
