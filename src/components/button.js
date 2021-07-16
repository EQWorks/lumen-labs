import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { ButtonBase } from '../base-components'
import { makeStyles } from '../utils/make-styles'


const styles = makeStyles({
  squaredLg: { padding: '0.7rem' },
  squaredMd: { padding: '0.5rem' },
  squaredSm: { padding: '0.3rem' },
})

const buttonColoursTransform = (type = 'primary', target = [], shade = [], customShades = []) => {
  if (!target) return
  const shades = {
    default: customShades[0] || 500,
    hover: customShades[1] || 600,
    active: customShades[2] || 700,
  }
  return shade.map((s) => (
    target.map((t) => [(s !== 'default' ? `${s}:${t}` : t), type, shades[s]].join('-')).join(' ')
  )).join(' ')
}

const _shadedDefault = [
  'text-primary-500',
  'hover:text-primary-600',
  'hover:border-primary-600',
  'hover:shadow-light-60',
  'active:border-white',
  'active:text-primary-700',
  'active:shadow-blue-10',
].join(' ')
const buttonConfigs = Object.freeze({
  colors: Object.freeze({
    outlined: Object.freeze({
      default: [
        buttonColoursTransform('primary', ['border', 'text'], ['default', 'hover', 'active']),
        buttonColoursTransform('primary', ['bg'], ['hover', 'active'], [50, 50, 100]),
      ].join(' '),
      normal: [
        'border-none',
        buttonColoursTransform('success', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('success', ['bg'], ['hover', 'active'], [50, 50, 100]),
      ].join(' '),
      warning: [
        'border-none',
        buttonColoursTransform('warning', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('warning', ['bg'], ['hover', 'active'], [50, 50, 100]),
      ].join(' '),
      error: [
        'border-none',
        buttonColoursTransform('error', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('error', ['bg'], ['hover', 'active'], [50, 50, 100]),
      ].join(' '),
      disabled: [
        'cursor-default',
        buttonColoursTransform('secondary', ['border', 'text'], ['default']),
      ].join(' '),
    }),
    borderless: Object.freeze({
      default: [
        buttonColoursTransform('primary', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('primary', ['bg'], ['default', 'hover', 'active'], [50, 100, 200]),
      ].join(' '),
      normal: [
        buttonColoursTransform('success', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('success', ['bg'], ['default', 'hover', 'active'], [50, 100, 200]),
      ].join(' '),
      warning: [
        buttonColoursTransform('warning', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('warning', ['bg'], ['default', 'hover', 'active'], [50, 100, 200]),
      ].join(' '),
      error: [
        buttonColoursTransform('error', ['text'], ['default', 'hover', 'active']),
        buttonColoursTransform('error', ['bg'], ['default', 'hover', 'active'], [50, 100, 200]),
      ].join(' '),
      disabled: 'bg-secondary-200 text-secondary-500 cursor-default',
    }),
    shaded: Object.freeze({
      default: _shadedDefault,
      normal: 'text-success hover:border-success',
      warning: 'text-warning hover:border-warning',
      error: 'text-error hover:border-error',
      disabled: 'text-secondary-500 cursor-default',
    }),
    filled: Object.freeze({
      default: 'bg-primary-700 hover:bg-primary-800',
      normal: 'bg-success hover:bg-success-hover',
      warning: 'bg-warning hover:bg-warning-hover',
      error: 'bg-error hover:bg-error-hover',
      disabled: 'bg-secondary-500 cursor-default',
    }),
  }),
  //sizes + text
  sizes: Object.freeze({
    lg: 'py-2 px-4',
    md: 'py-1.5 px-2.5',
    sm: 'py-0.5 px-1.5',
    squared: Object.freeze({
      lg: styles.squaredLg,
      md: styles.squaredMd,
      sm: styles.squaredSm,
    }),
    text: Object.freeze({
      lg: 'text-sm tracking-sm',
      md: 'text-xs tracking-md',
      sm: 'text-xxs tracking-lg',
    }),
    iconPadding: Object.freeze({
      startIcon: Object.freeze({
        sm: 'pr-1',
        md: 'pr-1.5',
        lg: 'pr-2.5',
      }),
      endIcon: Object.freeze({
        sm: 'pl-1',
        md: 'pl-1.5',
        lg: 'pl-2.5',
      }),
    }),
  }),
})

const Button = ({ children, classes, variant, size, color, disabled, ...rest }) => {
  const { colors, sizes } = buttonConfigs
  const variants = {
    outlined: clsx('border border-1', {
      [colors[variant].disabled]: disabled,
      [colors[variant][color]]: !disabled,
    }),
    borderless: clsx({
      [colors[variant].disabled]: disabled,
      [colors[variant][color]]: !disabled,
    }),
    shaded: clsx('border border-white bg-white shadow-light-10', {
      [`${colors[variant].disabled}`]: disabled,
      [`${colors[variant][color]}`]: !disabled,
    }),
    filled: clsx('text-white', {
      [colors[variant].disabled]: disabled,
      [colors[variant][color]]: !disabled,
    }),
  }

  const _classes = {
    button: clsx(
      `focus:outline-none rounded-sm font-normal ${sizes.text[size]} ${variants[variant]} ${classes.button}`,
      {
        [sizes[size]]: typeof children === 'string',
        [sizes.squared[size]]: typeof children !== 'string',
        'uppercase': size === 'sm',
      },
    ),
    startIcon: `${sizes.iconPadding.startIcon[size]} ${classes.startIcon}`,
    endIcon: `${sizes.iconPadding.endIcon[size]} ${classes.endIcon}`,
  }

  return (
    <ButtonBase classes={_classes} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
}
Button.defaultProps = {
  classes: { button: '', startIcon: '', endIcon: '' },
  variant: 'outlined',
  size: '',
  color: 'default',
  disabled: false,
}

export default Button
