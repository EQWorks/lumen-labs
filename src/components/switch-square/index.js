import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'

import SwitchBase from '../../base-components/switch-base'

import './switch-square.css'


const SwitchSquare = forwardRef(({ classes, id, checked, onChange, disabled, tabIndex, color, ...rest }, ref) => {
  const labelColor = concatTargetColor(color, ['bg'], [500])

  const switchSquareClasses = Object.freeze({
    label: `w-5 h-5 cursor-pointer rounded-sm transition ease-in duration-200 
        ${checked ? labelColor : 'bg-secondary-300'} ${classes.label}`,
    button: `switch-square-button flex flex-col-reverse items-center w-4 h-4 left-0.5 ${classes.button}`,
  })

  return (
    <SwitchBase 
      id={id}  
      ref={ref}    
      classes={switchSquareClasses}                   
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    >
      <div 
        className={`switch-button ${switchSquareClasses.button}`}
      >
        <span 
          className={`line w-4 bg-white rounded-xl ${disabled && 'switch-disabled-button'}`}
          tabIndex={tabIndex}
        />
        <span 
          className='dot'
          style={{ borderColor: disabled && '#eaeaea' }}
          tabIndex={tabIndex}
        />
      </div>
    </SwitchBase>
  )
})

SwitchSquare.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchSquare.defaultProps = {
  classes: { label: '', button: '' },
  checked: true,
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
}

SwitchSquare.displayName = 'SwitchSquare'

export default SwitchSquare
