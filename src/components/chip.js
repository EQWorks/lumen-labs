import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatStateColor, concatTargetColor } from '../utils/concat-color'

import { ButtonBase } from '../base-components'


const Chip = forwardRef(({ classes, children, startIcon, endIcon, color, selectable, ...rest }, ref) => {
  const borderElementsColor = concatStateColor(color, 'border', ['focus', 'hover'], [500])
  const buttonColor = concatTargetColor(color, ['bg', 'border', 'text'], [100, 100, 500])

  const chipClasses = Object.freeze({
    button: `
      ${classes.chip ? classes.chip : 'px-5px rounded-md'}
      border fill-current ${buttonColor} 
      focus:outline-none ${borderElementsColor}
      ${selectable ? 'cursor-pointer' : 'pointer-events-none'}
    `, 
    content: `${classes.content ? classes.content : 'text-xxs font-semibold tracking-lg leading-1.6 uppercase'}`, 
    startIcon: `${classes.startIcon ? classes.startIcon : 'mr-5px'}`, 
    endIcon: `${classes.endIcon ? classes.endIcon : 'ml-5px'}`,
  })

  return (
    <ButtonBase ref={ref} classes={chipClasses} startIcon={startIcon} endIcon={endIcon} disabled={!selectable} {...rest}>
      {children}
    </ButtonBase>
  )
})

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

Chip.displayName = 'Chip'

export default Chip
