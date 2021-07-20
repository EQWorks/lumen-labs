import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'


const Chip = ({ classes, children, startIcon, endIcon, color, selectable, ...rest }) => {
  const chipClasses = Object.freeze({
    button: `
      ${classes.chip ? classes.chip : 'px-5px rounded-md'}
      border bg-${color}-100 border-${color}-100 fill-current text-${color}-500
      focus:outline-none focus:border-${color}-500 hover:border-${color}-500
      ${selectable ? 'cursor-pointer' : 'pointer-events-none'}
    `, 
    content: `${classes.content ? classes.content : 'text-xxs font-semibold tracking-lg leading-1.6'}`, 
    startIcon: `${classes.startIcon ? classes.startIcon : 'mr-5px'}`, 
    endIcon: `${classes.endIcon ? classes.endIcon : 'ml-5px'}`,
  })

  return (
    <ButtonBase classes={chipClasses} startIcon={startIcon} endIcon={endIcon} disabled={!selectable} {...rest}>
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
  selectable: PropTypes.bool,
}

Chip.defaultProps = {
  classes: { chip: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
  color: 'primary',
  selectable: true,
}

export default Chip
