import React from 'react'
import PropTypes from 'prop-types'

import SwitchBase from '../../base-components/switch-base'

import './switch-round.css'

const SwitchRound = ({ id, checked, onChange, disabled, tabIndex, color }) => {
  const switchRoundClasses = Object.freeze({
    label: `w-10 h-5 cursor-pointer rounded-xl transition ease-in duration-200 
        ${checked ? color : 'bg-gray-400'}`,
    button: 'switch-round-button top-px left-px bg-white duration-200',
  })

  return (
    <SwitchBase 
      id={id} 
      classes={switchRoundClasses}                   
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      tabIndex={tabIndex}
    />
  )
}

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
  color: 'bg-blue-500',
}

export default SwitchRound
