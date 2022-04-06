import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'

import { concatStateColor, concatTargetColor } from '../utils/concat-color'

import { ButtonBase } from '../base-components'
import { makeStyles } from '../utils/make-styles'
import { getTailwindConfigColor } from '../utils/tailwind-config-color'


const _labelSize = (size) => {
  let labelSize = ''

  switch(size) {
  case 'lg':
    labelSize = {
      box: 'px-1.5 py-5px',
      font: 'text-sm',
      icon: 'w-2.5 h-2.5',
    }
    break
  case 'md':
    labelSize = {
      box: 'px-1.5 py-1',
      font: 'text-xs',
      icon: 'w-3 h-3',
    }
    break
  case 'sm':
    labelSize = {
      box: 'px-1 py-3px',
      font: 'text-xxs',
      icon: 'w-3.5 h-3.5',
    }
    break
  default:
    break
  }
  
  return labelSize
}

const _colorType = (shade, color, focus) => {
  let colorType = ''
  let hoverColor = concatStateColor(color, 'bg', ['hover'], [focus ? 300 : 100])
  let buttonColor = concatTargetColor(color, ['bg'], [focus ? 200 : 50])
  let textColor = concatTargetColor('secondary', ['text'], [900])

  switch(shade) {
  case 'light':
    if (['neutral', 'secondary'].includes(color)) {
      hoverColor = concatStateColor(color, 'bg', ['hover'], [focus ? 400 : 200])
      buttonColor = concatTargetColor(color, ['bg'], [focus ? 300 : 100])
    }

    colorType = `${textColor} ${buttonColor} ${hoverColor}`
    break
  case 'dark':
    hoverColor = concatStateColor(color, 'bg', ['hover'], [focus ? 700 : 600])
    buttonColor = concatTargetColor(color, ['bg'], [focus ? 700 : 500])
    textColor = concatTargetColor('secondary', ['text'], [50])

    if (color === 'warning') {
      hoverColor = concatStateColor(color, 'bg', ['hover'], [focus ? 700 : 500])
      buttonColor = concatTargetColor(color, ['bg'], [focus ? 600 : 400])
      textColor = concatTargetColor('secondary', ['text'], [900])
    } else if (color === 'secondary') {
      hoverColor = concatStateColor(color, 'bg', ['hover'], [focus ? 900 : 700])
      buttonColor = concatTargetColor(color, ['bg'], [focus ? 800 : 600])
    } else if (focus && color === 'neutral') {
      hoverColor = concatStateColor(color, 'bg', ['hover'], [800])
    }

    colorType = `${textColor} ${buttonColor} ${hoverColor}`
    break
  default:
    break
  }

  return colorType
}

const _outlineColor = (shade, color) => {
  let colorType = ''
  let shadeVal = '500'

  switch(shade) {
  case 'light':
    if (color === 'neutral') {
      shadeVal = '300'
    }

    colorType = `${getTailwindConfigColor(`${color}-${shadeVal}`)}80`
    break
  case 'dark':
    if (color === 'secondary') {
      shadeVal = '800'
    } else {
      shadeVal = '700'
    }

    colorType = `${getTailwindConfigColor(`${color}-${shadeVal}`)}80`
    break
  default:
    break
  }

  return colorType
}

const _iconHoverColor = (shade, color) => {
  let hoverColor = ''
  let shadeVal = '600'

  switch(shade) {
  case 'light':
    if (color === 'success') {
      shadeVal = '500'
    }

    hoverColor = `${getTailwindConfigColor(`${color}-${shadeVal}`)}33`
    break
  case 'dark':
    if (color === 'secondary') {
      shadeVal = '300'
    } else if (color === 'warning') {
      shadeVal = '100'
    } else {
      shadeVal = '50'
    }

    hoverColor = `${getTailwindConfigColor(`${color}-${shadeVal}`)}33`
    break
  default:
    break
  }

  return hoverColor
}

const customClasses = (shade, color) => {
  const iconHoverColor = _iconHoverColor(shade, color)

  return makeStyles({
    buttonContainer: {
      borderWidth: 0,

      '& .icon-hover': {
        '&:hover': {
          backgroundColor: iconHoverColor,
        },
      },
    },
  })
}

const Label = forwardRef(({ 
  classes, 
  children, 
  startIcon, 
  endIcon, 
  title, 
  size, 
  shade, 
  color, 
  onClickStartIcon, 
  onClickEndIcon, 
  disabled, 
  ...rest 
}, ref) => {
  const [focus, setFocus] = useState(false)
  const labelSize = _labelSize(size)
  const colorType = _colorType(shade, color, focus)
  const outlineColor = _outlineColor(shade, color)

  const labelClasses = Object.freeze({
    button: `rounded-3px  ${classes.root} ${labelSize.box} ${customClasses(shade, color).buttonContainer}
      border fill-current focus:outline-none ${colorType}
      ${!disabled ? 'cursor-pointer' : 'pointer-events-none'}
    `, 
    content: `font-bold tracking-normal leading-1 ${labelSize.font} ${classes.content}`, 
    title: `font-normal ${classes.title}`,
    startIcon: `mr-3px p-px flex justify-center items-center ${labelSize.icon} ${classes.startIcon}`, 
    endIcon: `icon-hover ml-3px p-px flex justify-center items-center rounded-3px ${labelSize.icon} ${classes.endIcon}`,
  })

  return (
    <ButtonBase 
      ref={ref} 
      classes={labelClasses} 
      style={{ boxShadow: `0 0 0 0.8px ${outlineColor}` }}
      startIcon={startIcon} 
      endIcon={endIcon} 
      onFocus={() => setFocus(true)} 
      onBlur={() => setFocus(false)}
      onClickStartIcon={onClickStartIcon}
      onClickEndIcon={onClickEndIcon}
      disabled={disabled} 
      {...rest}
    >
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
  shade: PropTypes.oneOf(['light', 'dark']),
  color: PropTypes.string,
  onClickStartIcon: PropTypes.func,
  onClickEndIcon: PropTypes.func,
  disabled: PropTypes.bool,
}

Label.defaultProps = {
  classes: { 
    root: '', 
    content: '', 
    title: '', 
    startIcon: '', 
    endIcon: '', 
  },
  startIcon: null,
  endIcon: null,
  title: '',
  size: 'md',
  shade: 'light',
  color: 'neutral',
  onClickStartIcon: () => {},
  onClickEndIcon: () => {},
  disabled: false,
}

Label.displayName = 'Label'

export default Label
