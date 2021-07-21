import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import './switch-base.css'


const SwitchBase = forwardRef(({ classes, id, styles, checked, onChange, disabled, tabIndex, children, ...rest }, ref) => {
  const switchClasses = Object.freeze({
    label: `${classes.label ? classes.label : 'w-9 h-4 bg-secondary-400'}`,
    button: `${classes.button ? classes.button : 'w-4 h-3.5 top-px left-px bg-white'}`,
    checkbox: 'w-0 h-0 hidden',
  })

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
        {...rest}
      />
      <label
        className={`switch-label ${switchClasses.label} ${disabled && 'switch-disabled-label'}`}
        style={styles.label}
        htmlFor={`switch-checkbox-${id}`} 
        tabIndex={disabled ? -1 : 1}
      >
        {children ? 
          children 
          :
          <span 
            className={`switch-button ${switchClasses.button} ${disabled && 'switch-disabled-button'}`}
            style={styles.button} 
            tabIndex={tabIndex}
          />
        }
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
  children: PropTypes.node,
}

SwitchBase.defaultProps = {
  classes: { 
    label: '', 
    button: '', 
  },
  styles: { label: {}, button: {} },
  checked: false,
  disabled: false,
  tabIndex: 1,
}

SwitchBase.displayName = 'SwitchBase'

export default SwitchBase
