import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'

import SwitchBase from '../../base-components/switch-base'

import './switch-round.css'


const SwitchRound = forwardRef(({ classes, id, checked, onChange, disabled, tabIndex, color, ...rest }, ref) => {
  const labelColor = concatTargetColor(color, ['bg'], [500])

  const switchRoundClasses = Object.freeze({
    label: `w-10 h-5 cursor-pointer rounded-xl transition ease-in duration-200 
        ${checked ? labelColor : 'bg-secondary-300'} ${classes.label}`,
    button: `switch-round-button top-px left-px bg-white duration-200 ${classes.button}`,
  })

  return (
    <SwitchBase 
      id={id} 
      ref={ref}
      classes={switchRoundClasses}                   
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
})

SwitchRound.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRound.defaultProps = {
  classes: { label: '', button: '' },
  checked: true,
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
}

SwitchRound.displayName = 'SwitchRound'

export default SwitchRound
