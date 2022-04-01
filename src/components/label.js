import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concatStateColor, concatTargetColor } from '../utils/concat-color'

import { ButtonBase } from '../base-components'
import { makeStyles } from '../utils/make-styles'


const _labelSize = (size) => {
  let labelSize = ''

  switch(size) {
  case 'lg':
    labelSize = {
      box: 'px-1.5 py-5px',
      font: 'text-sm',
    }
    break
  case 'md':
    labelSize = {
      box: 'px-1.5 py-1',
      font: 'text-xs',
    }
    break
  case 'sm':
    labelSize = {
      box: 'px-1 py-3px',
      font: 'text-xxs',
    }
    break
  default:
    break
  }
  
  return labelSize
}

const _colorType = (type, color) => {
  let colorType = ''

  switch(type) {
  case 'light':
    const borderElementsColor = concatStateColor(color, 'shadow', ['focus', 'hover'], [500])
    const buttonColor = concatTargetColor(color, ['bg', 'shadow'], [100, 100, 500])
    const textColor = concatTargetColor('secondary', ['text'], [900])

    colorType = `${textColor} ${buttonColor} ${borderElementsColor}`
    break
  case 'dark':
    if (color === 'warning') {
      const borderElementsColor = concatStateColor(color, 'shadow', ['focus', 'hover'], [500])
      const buttonColor = concatTargetColor(color, ['bg', 'shadow'], [100, 100, 500])
      const textColor = concatTargetColor('secondary', ['text'], [900])

      colorType = `${textColor} ${buttonColor} ${borderElementsColor}`
    } else {
      const borderElementsColor = concatStateColor(color, 'shadow', ['focus', 'hover'], [500])
      const buttonColor = concatTargetColor(color, ['bg', 'shadow'], [100, 100, 500])
      const textColor = concatTargetColor('secondary', ['text'], [50])

      colorType = `${textColor} ${buttonColor} ${borderElementsColor}`
    }
    break
  default:
    break
  }
  
  return colorType
}

const customClasses = makeStyles({
  buttonContainer: {
    borderWidth: 0
  }
})

const Label = forwardRef(({ classes, children, startIcon, endIcon, title, size, shade, color, selectable, ...rest }, ref) => {
  const labelSize = _labelSize(size)
  const colorType = _colorType(shade, color)

  const labelClasses = Object.freeze({
    button: `rounded-3px  ${classes.root ? classes.root : ''} ${labelSize.box} ${customClasses.buttonContainer}
      border fill-current focus:outline-none ${colorType}
      ${selectable ? 'cursor-pointer' : 'pointer-events-none'}
    `, 
    content: `font-bold tracking-normal leading-1 ${labelSize.font} ${classes.content ? classes.content : ''}`, 
    title: `font-normal`,
    startIcon: `mr-1 ${classes.startIcon ? classes.startIcon : ''}`, 
    endIcon: `ml-1 ${classes.endIcon ? classes.endIcon : ''}`,
  })

  return (
    <ButtonBase ref={ref} classes={labelClasses} startIcon={startIcon} endIcon={endIcon} disabled={!selectable} {...rest}>
      {children}{title && <>: <span className={`${labelClasses.title}`}>{title}</span></>}
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
  shade: PropTypes.oneOf(['light', 'dark'])
}

Label.defaultProps = {
  classes: { root: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
  title: '',
  size: 'lg',
  shade: 'light',
  color: 'neutral',
  selectable: true,
}

Label.displayName = 'Label'

export default Label
