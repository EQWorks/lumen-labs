import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'


const Chip = ({ classes, children, startIcon, endIcon, color, disabled, ...rest }) => {
  const chipClasses = Object.freeze({
    button: `
      ${classes.chip ? classes.chip : 'px-2 py-0.5 rounded-md'}
      border bg-${color}-100 border-${color}-100 fill-current text-${color}-500
      focus:border-${color}-500 hover:border-${color}-500 focus:outline-none
      ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    `, 
    content: `${classes.content ? classes.content : 'text-xs'}`, 
    startIcon: `${classes.startIcon ? classes.startIcon : 'mr-1'}`, 
    endIcon: `${classes.endIcon ? classes.endIcon : 'ml-1'}`,
  })

  return (
    <ButtonBase classes={chipClasses} startIcon={startIcon} endIcon={endIcon} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  )
}

Chip.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
}

Chip.defaultProps = {
  classes: { chip: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
  color: 'primary',
  disabled: false,
}

export default Chip
