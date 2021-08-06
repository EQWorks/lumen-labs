import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'

import SwitchBase from '../../base-components/switch-base'

import './switch-rect.css'


const SwitchRect = forwardRef(({ id, checked, onChange, disabled, tabIndex, color , ...rest }, ref) => {
  const labelColor = concatTargetColor(color, ['bg'], [500])

  const switchRectClasses = Object.freeze({
    label: `w-10 h-6 cursor-pointer rounded-sm transition ease-in duration-200 
        ${checked ? labelColor : 'bg-secondary-300'}`,
    button: 'switch-rect-button inset-0.5 left-1 bg-white duration-200',
  })

  return (
    <SwitchBase 
      id={id}  
      ref={ref}    
      classes={switchRectClasses}                   
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    />
  )
})

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
  color: 'interactive',
}

SwitchRect.displayName = 'SwitchRect'

export default SwitchRect
