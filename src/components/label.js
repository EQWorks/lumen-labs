import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatStateColor, concatTargetColor } from '../utils/concat-color'

import { ButtonBase } from '../base-components'


const _labelSize = (size) => {
  let labelSize = ''

  switch(size) {
  case 'lg':
    labelSize = {
      box: 'h-9 p-sm',
      font: 'text-sm tracking-sm leading-1.43',
      title: '',
    }
    break
  case 'md':
    labelSize = {
      box: 'h-7 py-1.5 px-2.5',
      font: 'text-xs tracking-md leading-1.33',
      title: '',
    }
    break
  case 'sm':
    labelSize = {
      box: 'h-7 py-1.5 px-2.5',
      font: 'text-xxs tracking-normal leading-1',
    }
  default:
    break
  }
  
  return labelSize
}

const Label = forwardRef(({ classes, children, startIcon, endIcon, title, size, color, selectable, ...rest }, ref) => {
  const labelSize = _labelSize(size)
  const borderElementsColor = concatStateColor(color, 'border', ['focus', 'hover'], [500])
  const buttonColor = concatTargetColor(color, ['bg', 'border', 'text'], [100, 100, 500])
  console.log('label')
  const labelClasses = Object.freeze({
    button: `px-5px rounded-md  ${classes.root ? classes.root : ''}
      border fill-current ${buttonColor} focus:outline-none ${borderElementsColor}
      ${selectable ? 'cursor-pointer' : 'pointer-events-none'}
    `, 
    content: `font-bold ${labelSize.font} ${classes.content ? classes.content : ''}`, 
    title: `font-normal`,
    startIcon: `mr-5px ${classes.startIcon ? classes.startIcon : ''}`, 
    endIcon: `ml-5px ${classes.endIcon ? classes.endIcon : ''}`,
  })

  return (
    <ButtonBase ref={ref} classes={labelClasses} startIcon={startIcon} endIcon={endIcon} disabled={!selectable} {...rest}>
      {children} <span>{title}</span>
    </ButtonBase>
  )
})

Label.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
  selectable: PropTypes.bool,
}

Label.defaultProps = {
  classes: { root: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
  title: '',
  size: 'sm',
  color: 'primary',
  selectable: true,
}

Label.displayName = 'Label'

export default Label
