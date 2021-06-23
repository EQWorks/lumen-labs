import React from 'react'
import PropTypes from 'prop-types'

import './switch-base.css'

const _switchClasses = () => ({
  checkbox: 'w-0 h-0 hidden',
  disabled: 'opacity-50 cursor-not-allowed',
})

const SwitchBase = ({ id, classes, styles, checked, onChange, disabled, tabIndex }) => {
  const switchClasses = _switchClasses()

  return (
    <>
      <input
        className={`switch-checkbox ${switchClasses.checkbox}`}
        id={`switch-checkbox-${id}`}
        type="checkbox"        
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label
        className={`switch-label ${classes.label} ${disabled && switchClasses.disabled}`}
        styles={styles.label}
        htmlFor={`switch-checkbox-${id}`} 
        tabIndex={disabled ? -1 : 1}
      >
        <span 
          className={`switch-button ${classes.button} ${disabled && switchClasses.disabled}`}
          style={styles.button} 
          tabIndex={tabIndex}
        />
      </label>
    </>
  )
}

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
  checked: true,
  disabled: false,
  tabIndex: 1,
}

export default SwitchBase
