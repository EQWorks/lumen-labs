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
  onFocus,
  onBlur,
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
    onChange(e)
  }

  const handleFocus = (e) => {
    if (defaultValue) {
      _setPlaceholder(defaultValue)
      _setValue('')
    }

    onFocus(e)
  }

  const handleBlur = (e) => {
    if (!value && _placeholder && defaultValue) {
      _setValue(_placeholder)
      _setPlaceholder('')
    }

    onBlur(e)
  }

  return (
    <div ref={ref} className={`${baseClasses.root} ${classes.root}`}>
      <textarea
        className={`${baseClasses.textarea} ${classes.textarea}`}
        value={value || _value}
        onClick={onClick}
        onChange={textareaOnChange}
        placeholder={_placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}
TextareaBase.defaultProps = {
  classes: { root: '', input: '', startIon: '', endIcon: '', prefix: '', suffix: '' },
  value: '',
  defaultValue: '',
  placeholder: '',
  onClick: () => {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
}

TextareaBase.displayName = 'TextareaBase'

export default TextareaBase
