import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'


const _baseClasses = () => ({
  root: 'flex border',
  textarea: 'w-full resize-none',
})

const TextareaBase = forwardRef(({
  classes,
  value,
  defaultValue,
  placeholder,
  onClick,
  onChange,
  ...rest
}, ref) => {
  const baseClasses = _baseClasses()
  const [_value, _setValue] = useState(defaultValue)
  const [_placeholder, _setPlaceholder] = useState(placeholder)

  const textareaOnChange = (e) => {
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
    <div ref={ref} className={`${baseClasses.root} ${classes.root}`} onFocus={handleFocus} onBlur={handleBlur}>
      <textarea
        className={`${baseClasses.textarea} ${classes.textarea}`}
        value={value || _value}
        onClick={onClick}
        onChange={textareaOnChange}
        placeholder={_placeholder}
        {...rest}
      />
    </div>
  )
})

TextareaBase.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
}
TextareaBase.defaultProps = {
  classes: { root: '', input: '', startIon: '', endIcon: '', prefix: '', suffix: '' },
  value: null,
  defaultValue: '',
  placeholder: '',
  onClick: () => {},
  onChange: () => {},
}

TextareaBase.displayName = 'TextareaBase'

export default TextareaBase
