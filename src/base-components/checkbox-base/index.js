import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CheckboxGroupBase from './checkbox-group-base'


const CheckboxBase = React.forwardRef((
  { classes, label, checked, onChange, inputProps, inputRef },
  ref,
) => {
  const [name, setName] = useState('')
  const _checked = checked === null ? name === label : checked

  const handleChange = (e) => {
    if (name === label) {
      setName('')
    } else {
      setName(e.target.name)
    }
    onChange({ label: e.target.name, checked: e.target.checked })
  }

  return (
    <div ref={ref} className={classes.root}>
      <input
        ref={inputRef}
        className={`cursor-pointer ${classes.input}`}
        type='checkbox'
        name={label}
        checked={_checked}
        onChange={handleChange}
        {...inputProps}
      />
      <label
        className={classes.label}
        htmlFor={label}
      >{label}</label>
    </div>
  )
})

CheckboxBase.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  inputRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
}
CheckboxBase.defaultProps = {
  classes: {
    root: '',
    input: '',
    label: '',
  },
  checked: null,
  onChange: () => {},
  inputProps: {},
  inputRef: () => {},
}

CheckboxBase.displayName = 'CheckboxBase'
CheckboxBase.Group = CheckboxGroupBase

export default CheckboxBase
