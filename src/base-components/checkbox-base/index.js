import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import CheckboxGroupBase from './checkbox-group-base'


const CheckboxBase = React.forwardRef(({
  classes,
  label,
  checked,
  defaultChecked,
  indeterminate,
  onChange,
  inputProps,
  isNestingGroup,
}, ref) => {
  const inputRef = useRef()
  const [name, setName] = useState(null)
  const [defaultCheck, setDefaultCheck] = useState(defaultChecked)
  // TODO: debug inconsistency of using [defaultCheck] state for nested grouped checkboxes
  const _defaultCheck = isNestingGroup ? defaultChecked : defaultCheck

  useEffect(() => {
    if (indeterminate !== null) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const handleChange = (e) => {
    if (name === label || (defaultCheck && name === null)) {
      setName('')
    } else {
      setName(e.target.name)
    }
    if (defaultCheck) {
      setDefaultCheck(false)
    }
    if (onChange) {
      onChange({ label: e.target.name, checked: e.target.checked })
    }
  }

  return (
    <div ref={ref} className={classes.root}>
      <input
        ref={inputRef}
        className={`cursor-pointer ${classes.input}`}
        type='checkbox'
        name={label}
        checked={_defaultCheck
          ? _defaultCheck
          : checked === null 
            ? name === label
            : checked}
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
  classes: PropTypes.object,
  label: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  isNestingGroup: PropTypes.bool,
}
CheckboxBase.defaultProps = {
  classes: {
    root: '',
    input: '',
    label: '',
  },
  label: '',
  checked: null,
  defaultChecked: null,
  indeterminate: null,
  onChange: null,
  inputProps: {},
  isNestingGroup: false,
}

CheckboxBase.displayName = 'CheckboxBase'
CheckboxBase.Group = CheckboxGroupBase

export default CheckboxBase
