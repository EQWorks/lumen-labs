import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import './switch-base.css'

const _switchClasses = () => ({
  checkbox: 'w-0 h-0 hidden',
})

const SwitchBase = forwardRef(({ classes, id, styles, checked, onChange, disabled, tabIndex }, ref) => {
  const switchClasses = _switchClasses()

  return (
    <>
      <input
        ref={ref}
        className={`switch-checkbox ${switchClasses.checkbox}`}
        id={`switch-checkbox-${id}`}
        name={id}
        type="checkbox"        
        checked={disabled ? false : checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label
        className={`switch-label ${classes.label} ${disabled && 'switch-disabled-label'}`}
        style={styles.label}
        htmlFor={`switch-checkbox-${id}`} 
        tabIndex={disabled ? -1 : 1}
      >
        <span 
          className={`switch-button ${classes.button} ${disabled && 'switch-disabled-button'}`}
          style={styles.button} 
          tabIndex={tabIndex}
        />
      </label>
    </>
  )
})

SwitchBase.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.exact({
    label: PropTypes.string,
    button: PropTypes.string,
  }),
  styles: PropTypes.exact({
    label: PropTypes.object,
    button: PropTypes.object,
  }),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
}

SwitchBase.defaultProps = {
  classes: { 
    label: 'w-9 h-4 bg-gray-400', 
    button: 'w-4 h-3.5 top-px left-px bg-white', 
  },
  styles: { label: {}, button: {} },
  checked: false,
  disabled: false,
  tabIndex: 1,
}

SwitchBase.displayName = 'SwitchBase'

export default SwitchBase
