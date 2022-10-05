import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { ButtonBase } from '../base-components'
import { makeStyles } from '../utils/make-styles'


const styles = makeStyles({
  squaredLg: { padding: '0.7rem' },
  squaredMd: { padding: '0.5rem' },
  squaredSm: { padding: '0.3rem' },
})

const sizes = Object.freeze({
  lg: 'py-2 px-4', md: 'py-1.5 px-2.5', sm: 'py-0.5 px-1.5',
  squared: Object.freeze({ lg: styles.squaredLg, md: styles.squaredMd, sm: styles.squaredSm }),
  text: Object.freeze({ lg: 'text-sm tracking-sm', md: 'text-xs tracking-md', sm: 'text-xxs tracking-lg' }),
  iconPadding: Object.freeze({
    startIcon: Object.freeze({ sm: 'pr-1', md: 'pr-1.5', lg: 'pr-2.5' }),
    endIcon: Object.freeze({ sm: 'pl-1', md: 'pl-1.5', lg: 'pl-2.5' }),
  }),
})

const buttonColoursTransform = (type = 'primary', target = [], shade = [], customShades = []) => {
  const shades = {
    default: customShades[0] || 500,
    hover: customShades[1] || 600,
    active: customShades[2] || 700,
  }
  return shade.map((s) => (
    target.map((t) => [(s !== 'default' ? `${s}:${t}` : t), type, shades[s]].join('-')).join(' ')
  )).join(' ')
}

const colourTransform = (type) => ({
  outlined: {
    [type]: [
      buttonColoursTransform(type, ['border', 'text'], ['default', 'hover', 'active']),
      buttonColoursTransform(type, ['bg'], ['hover', 'active'], [50, 50, 100]),
    ].join(' '),
    disabled: 'border-secondary-500 text-secondary-500 cursor-default',
  },
  borderless: {
    [type]: [
      buttonColoursTransform(type, ['text'], ['default', 'hover', 'active']),
      buttonColoursTransform(type, ['bg'], ['default', 'hover', 'active'], [50, 100, 200]),
    ].join(' '),
    disabled: 'bg-secondary-200 text-secondary-500 cursor-default',
  },
  elevated: {
    [type]: [
      'active:border-secondary-50', 'hover:shadow-light-60', 'active:shadow-blue-10',
      buttonColoursTransform(type, ['text'], ['default', 'hover', 'active']),
      buttonColoursTransform(type, ['border'], ['hover']),
    ].join(' '),
    disabled: 'text-secondary-500 cursor-default',
  },
  filled: {
    [type]: buttonColoursTransform(type, ['bg'], ['default', 'hover', 'active']),
    disabled: 'bg-secondary-500 cursor-default',
  },
})

const Button = ({ children, classes, variant, size, type, disabled, ...rest }) => {
  const colors = useMemo(() => colourTransform(type), [type])
  const variants = {
    outlined: clsx('border border-1 bg-secondary-50', {
      [colors[variant].disabled]: disabled,
      [colors[variant][type]]: !disabled,
    }),
    borderless: clsx({
      [colors[variant].disabled]: disabled,
      [colors[variant][type]]: !disabled,
    }),
    elevated: clsx('border border-secondary-50 bg-secondary-50 shadow-light-10', {
      [`${colors[variant].disabled}`]: disabled,
      [`${colors[variant][type]}`]: !disabled,
    }),
    filled: clsx('text-secondary-50', {
      [colors[variant].disabled]: disabled,
      [colors[variant][type]]: !disabled,
    }),
  }

  const _classes = {
    button: clsx(
      `focus:outline-none ${classes.button.borderRadius || 'rounded-sm'}
      font-normal ${sizes.text[size]} ${variants[variant]} ${classes.button}`,
      {
        [sizes[size]]: typeof children === 'string',
        [sizes.squared[size]]: typeof children !== 'string',
        'uppercase': size === 'sm',
      },
    ),
    startIcon: `${sizes.iconPadding.startIcon[size]} ${classes.startIcon}`,
    endIcon: `${sizes.iconPadding.endIcon[size]} ${classes.endIcon}`,
  }

  const handleClick = e => {
    e.stopPropagation()
    if (typeof rest?.onClick === 'function') {
      rest.onClick(e)
    }
  }

  return (
    <ButtonBase classes={_classes} disabled={disabled} {...rest} onClick={handleClick}>
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}
Button.defaultProps = {
  classes: { button: '', startIcon: '', endIcon: '' },
  variant: 'outlined',
  size: '',
  type: 'primary',
  disabled: false,
}

export default Button
