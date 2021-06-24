import React from 'react'
import PropTypes from 'prop-types'

import SwitchBase from '../../base-components/switch-base'

import './switch-rect.css'

const SwitchRect = ({ id, checked, onChange, disabled, tabIndex, color }) => {
  const switchRectClasses = Object.freeze({
    label: `w-10 h-6 cursor-pointer rounded-sm transition ease-in duration-200 
        ${checked ? color : 'bg-gray-400'}`,
    button: 'switch-rect-button top-0.5 left-1 bg-white duration-200',
  })

  return (
    <SwitchBase 
      id={id}      
      classes={switchRectClasses}                   
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      tabIndex={tabIndex}
    />
  )
}

SwitchRect.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRect.defaultProps = {
  checked: true,
  disabled: false,
  tabIndex: 1,
  color: 'bg-blue-500',
}

export default SwitchRect
