import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CheckboxBase = React.forwardRef(({ classes, label, checked, onChange, inputProps }, ref) => {
  const [name, setName] = useState('')
  const _checked = checked === null ? name === label : checked

  const handleChange = (e) => {
    if (name === label) {
      setName('')
    } else {
      setName(e.target.name)
    }
    onChange({ name: e.target.name, checked: e.target.checked })
  }

  return (
    <div ref={ref} className={classes.root}>
      <input
        className={classes.input}
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
}

CheckboxBase.displayName = 'CheckboxBase'
export default CheckboxBase
