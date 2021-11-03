import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatTargetColor } from '../../utils/concat-color'
import SwitchBase from '../../base-components/switch-base'


const SwitchRound = forwardRef(({ classes, id, checked, onChange, label, disabled, tabIndex, color, ...rest }, ref) => {
  const containerColor = concatTargetColor(color, ['bg'], [500])

  const switchRoundClasses = Object.freeze({
    root: classes.root,
    container: `w-10 h-5 cursor-pointer rounded-xl transition ease-in duration-200 
      ${disabled ? 'shadow-secondary-400 bg-secondary-100' : `${checked ? containerColor : 'shadow-secondary-400 bg-secondary-100'}`} ${classes.container}`,
    button: `w-18px h-18px top-0.5 left-0.5 bg-white rounded-full duration-200 
      ${disabled ? 'bg-secondary-400' : `${checked ? 'bg-secondary-50' : 'bg-secondary-400'}`} ${classes.button}`,
    label: classes.label,
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
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
}

SwitchRound.defaultProps = {
  classes: { root: '', container: '', button: '', label: '' },
  checked: true,
  label: '',
  disabled: false,
  tabIndex: 1,
  color: 'interactive',
}

SwitchRound.displayName = 'SwitchRound'

export default SwitchRound
