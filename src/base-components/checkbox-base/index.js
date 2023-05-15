import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import CheckboxGroupBase from './checkbox-group-base'
import { counter } from '../../utils/counter'


const CheckboxBase = React.forwardRef(({
  classes = {
    root: '',
    input: '',
    label: '',
  },
  label = '',
  checked = null,
  defaultChecked = null,
  indeterminate = null,
  onChange = null,
  inputProps = {},
  isNestingGroup = false,
}, ref) => {
  const inputID = counter('styled-checkbox')
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
      <span className='self-center'>
        <input
          className={`form-checkbox cursor-pointer ${classes.input}`}
          ref={inputRef}
          type='checkbox'
          id={inputID}
          name={label}
          checked={_defaultCheck
            ? _defaultCheck
            : checked === null
              ? name === label
              : checked}
          onChange={handleChange}
          {...inputProps}
        />
      </span>
      <span className='self-center align-middle'>
        <label className={classes.label} htmlFor={inputID}>{label}</label>
      </span>
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
  showLabel: PropTypes.bool,
}

CheckboxBase.displayName = 'CheckboxBase'
CheckboxBase.Group = CheckboxGroupBase

export default CheckboxBase
