import React, { useState } from 'react'
import PropTypes from 'prop-types'


const _baseClasses = () => ({
  root: 'flex border border-gray-200',
  input: 'w-full',
})

const InputBase = ({
  classes,
  value,
  defaultValue,
  placeholder,
  onClick,
  onChange,
  startIcon,
  endIcon,
  ...rest
}) => {
  const baseClasses = _baseClasses()
  const [_value, _setValue] = useState(defaultValue)
  const [_placeholder, _setPlaceholder] = useState(placeholder)

  const inputOnChange = (e) => {
    if (value === undefined || value === null) {
      _setValue(e.target.value)
    } else {
      _setValue('')
    }
    onChange(e.target.value)
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
    <div className={`${baseClasses.root} ${classes.root}`} onFocus={handleFocus} onBlur={handleBlur}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      <input
        className={`${baseClasses.input} ${classes.input}`}
        value={value || _value}
        onClick={onClick}
        onChange={inputOnChange}
        placeholder={_placeholder}
        {...rest}
      />
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
    </div>
  )
}

InputBase.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}
InputBase.defaultProps = {
  classes: { root: '', input: '', startIon: '', endIcon: '' },
  value: null,
  defaultValue: '',
  placeholder: '',
  onClick: () => {},
  onChange: () => {},
  startIcon: null,
  endIcon: null,
}

export default InputBase
