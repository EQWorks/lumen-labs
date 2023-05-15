import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'
import SwitchBase from '../../base-components/switch-base'


const SwitchRound = forwardRef(({
  classes = {
    root: '',
    container: '',
    button: '',
    label: '',
  },
  id,
  checked = true,
  onChange,
  label = '',
  disabled = false,
  tabIndex = 1,
  color = 'interactive',
  ...rest
}, ref) => {
  const containerColor = concatTargetColor(color, ['bg'], [500])
  const containerCheckedStyling = checked ? containerColor : 'shadow-secondary-400 bg-secondary-100'
  const buttonCheckedStyling = checked ? 'bg-secondary-50' : 'bg-secondary-400'

  const switchRoundClasses = Object.freeze({
    root: `switch-round__root-container ${classes.root || ''}`,
    container: `switch-round__main-container ${classes.container || ''} w-10 h-5 cursor-pointer rounded-xl transition ease-in duration-200
      ${disabled ? 'shadow-secondary-400 bg-secondary-100' : containerCheckedStyling}`,
    button: `switch-round__button-container ${classes.button || ''} w-4 h-4 top-0.5 left-0.5 bg-white rounded-full duration-200
      ${disabled ? 'bg-secondary-400' : buttonCheckedStyling}`,
    label: `switch-round__label-container ${classes.label || ''}`,
  })

  return (
    <SwitchBase
      id={id}
      ref={ref}
      classes={switchRoundClasses}
      checked={checked}
      onChange={onChange}
      label={label}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
})

SwitchRound.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRound.displayName = 'SwitchRound'

export default SwitchRound
