import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'

import SwitchBase from '../../base-components/switch-base'

import './switch-square.css'


const SwitchSquare = forwardRef(({ classes, id, checked, onChange, label, disabled, tabIndex, color, ...rest }, ref) => {
  const containerColor = concatTargetColor(color, ['bg'], [500])

  const switchSquareClasses = Object.freeze({
    root: classes.root,
    container: `w-5 h-5 cursor-pointer rounded-sm transition ease-in duration-200 
        ${checked ? containerColor : 'bg-secondary-300'} ${classes.container}`,
    button: `switch-square-button flex flex-col-reverse items-center w-4 h-4 left-0.5 ${classes.button}`,
    label: classes.label,
  })

  return (
    <SwitchBase 
      id={id}  
      ref={ref}    
      classes={switchSquareClasses}                   
      checked={checked}
      onChange={onChange}
      label={label}
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
  label: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchSquare.defaultProps = {
  classes: { root: '', container: '', button: '', label: '' },
  checked: true,
  label: '',
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
}

SwitchSquare.displayName = 'SwitchSquare'

export default SwitchSquare
