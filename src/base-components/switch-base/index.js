import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import './switch-base.css'


const SwitchBase = forwardRef(({
  classes = {
    root: '',
    container: '',
    button: '',
    label: '',
  },
  id,
  checked = false,
  onChange,
  label = '',
  disabled = false,
  tabIndex = 1,
  children,
  ...rest
}, ref) => {
  const switchClasses = Object.freeze({
    root: `${classes.root} flex items-center`,
    container: `${classes.container ? classes.container : 'w-9 h-4 bg-secondary-300'} relative flex items-center justify-between`,
    button: ` ${classes.button ? classes.button : 'w-4 h-3.5 top-px left-px bg-secondary-800'} absolute`,
    label: `${classes.label}`,
    checkbox: 'w-0 h-0 hidden',
    disabled: 'cursor-not-allowed',
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onChange(e)
    }
  }

  return (
    <div className={`switch-root ${switchClasses.root}`}>
      <input
        ref={ref}
        className={`switch-checkbox ${switchClasses.checkbox}`}
        id={`switch-checkbox-${id}`}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => {onChange(e)}}
        disabled={disabled}
        {...rest}
      />
      <label
        className={`switch-container ${switchClasses.container} ${disabled && switchClasses.disabled}`}
        htmlFor={`switch-checkbox-${id}`}
        tabIndex={disabled ? -1 : 1}
        onKeyDown={(e) => !disabled && handleKeyDown(e)}
        aria-checked={checked}
      >
        {children ?
          children
          :
          <span
            className={`switch-button ${switchClasses.button} ${disabled && switchClasses.disabled}`}
            tabIndex={tabIndex}
          />
        }
      </label>
      {label && <span className={switchClasses.label}>{label}</span>}
    </div>
  )
})

SwitchBase.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.exact({
    root: PropTypes.string,
    container: PropTypes.string,
    button: PropTypes.string,
    label: PropTypes.string,
  }),
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  children: PropTypes.node,
}

SwitchBase.displayName = 'SwitchBase'

export default SwitchBase
