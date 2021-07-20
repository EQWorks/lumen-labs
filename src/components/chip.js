import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'


const Chip = ({ classes, children, startIcon, endIcon, color, disabled, ...rest }) => {
  const chipClasses = Object.freeze({
    button: `
      ${classes.chip ? classes.chip : 'px-1.5 py-px rounded-md'}
      bg-${color}-100 fill-current text-${color}-500
      ${disabled ? 'cursor-not-allowed focus:outline-none hover:outline-none' : 'cursor-pointer focus:outline-sm hover:outline-sm'}
    `, 
    content: `${classes.content ? classes.content : 'text-xxs font-semibold tracking-lg leading-1.6'}`, 
    startIcon: `${classes.startIcon ? classes.startIcon : 'mr-5px'}`, 
    endIcon: `${classes.endIcon ? classes.endIcon : 'ml-5px'}`,
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
