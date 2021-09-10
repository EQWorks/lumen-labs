import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'

import SwitchBase from '../../base-components/switch-base'

import './switch-rect.css'


const SwitchRect = forwardRef(({ classes, id, checked, onChange, disabled, tabIndex, color , ...rest }, ref) => {
  const labelColor = concatTargetColor(color, ['bg'], [500])

  const switchRectClasses = Object.freeze({
    label: `w-10 h-6 cursor-pointer rounded-sm transition ease-in duration-200 
        ${checked ? labelColor : 'bg-secondary-300'} ${classes.label}`,
    button: `switch-rect-button inset-0.5 left-1 bg-white duration-200 ${classes.button}`,
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
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRect.defaultProps = {
  classes: { label: '', button: '' },
  checked: true,
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
}

SwitchRect.displayName = 'SwitchRect'

export default SwitchRect
