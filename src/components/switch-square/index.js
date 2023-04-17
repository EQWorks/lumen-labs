import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'
import SwitchBase from '../../base-components/switch-base'


const SwitchSquare = forwardRef(({ classes, id, checked, onChange, label, disabled, tabIndex, color, ...rest }, ref) => {
  const containerColor = concatTargetColor(color, ['bg'], [500])

  const switchSquareClasses = Object.freeze({
    root: `switch-square__root-container ${classes.root}`,
    container: `switch-square__main-container w-5 h-5 cursor-pointer rounded-sm transition ease-in duration-200 
      ${disabled ? 'shadow-secondary-400 bg-secondary-100' : `${checked ? containerColor : 'shadow-secondary-400 bg-secondary-100'}`} ${classes.container}`,
    button: `switch-square__button-container absolute switch-square-button flex flex-col items-center w-4 h-4 left-0.5 
      ${!disabled && `${checked ? 'flex-col bottom-px' : 'flex-col-reverse'}`} ${classes.button}`,
    label: `switch-square__label-container ${classes.label}`,
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
          className={`line w-4 h-3px bg-white rounded-xl ${disabled && 'bg-secondary-400'}
            ${checked ? 'mb-2 bg-secondary-50' : 'bg-secondary-400'}
          `}
          tabIndex={tabIndex}
        />
        <span
          className={`dot w-1 h-1 rounded-2px ${disabled && 'border-secondary-400 bg-secondary-400'}
            ${checked ? 'w-2 h-px bg-secondary-50' : 'mb-1 border border-secondary-400'} 
          `}
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
