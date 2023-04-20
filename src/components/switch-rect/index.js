import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'
import SwitchBase from '../../base-components/switch-base'


const SwitchRect = forwardRef(({ classes, id, checked, onChange, label, disabled, tabIndex, color , ...rest }, ref) => {
  const containerColor = concatTargetColor(color, ['bg'], [500])
  const containerCheckedStyling = checked ? containerColor : 'shadow-secondary-400 bg-secondary-100'
  const buttonCheckedStyling = checked ? 'bg-secondary-50' : 'bg-secondary-400'

  const switchRectClasses = Object.freeze({
    root: `switch-rect__root-container ${classes.root || ''}`,
    container: `switch-rect__main-container  ${classes.container || ''} w-6 h-4 cursor-pointer rounded-3px transition ease-in duration-200
      ${disabled ? 'shadow-secondary-400 bg-secondary-100' : containerCheckedStyling}`,
    button: `switch-rect__button-container  ${classes.button || ''} h-3 w-5px inset-0.5 bg-white rounded-2px duration-200
      ${disabled ? 'bg-secondary-400' : buttonCheckedStyling}`,
    label: `switch-rect__label-container ${classes.label || ''}`,
  })

  return (
    <SwitchBase
      id={id}
      ref={ref}
      classes={switchRectClasses}
      checked={checked}
      onChange={onChange}
      label={label}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
})

SwitchRect.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRect.defaultProps = {
  classes: { root: '', container: '', button: '', label: '' },
  checked: true,
  label: '',
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
  onChange: () => {},
}

SwitchRect.displayName = 'SwitchRect'

export default SwitchRect
