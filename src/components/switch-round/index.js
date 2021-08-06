import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'

import SwitchBase from '../../base-components/switch-base'

import './switch-round.css'


const SwitchRound = forwardRef(({ id, checked, onChange, disabled, tabIndex, color, ...rest }, ref) => {
  const labelColor = concatTargetColor(color, ['bg'], [500])

  const switchRoundClasses = Object.freeze({
    label: `w-10 h-5 cursor-pointer rounded-xl transition ease-in duration-200 
        ${checked ? labelColor : 'bg-secondary-300'}`,
    button: 'switch-round-button top-px left-px bg-white duration-200',
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
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRound.defaultProps = {
  checked: true,
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
}

SwitchRound.displayName = 'SwitchRound'

export default SwitchRound
