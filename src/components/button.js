import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'
import clsx from 'clsx'


const buttonConfigs = Object.freeze({
  colors: Object.freeze({
    outlined: Object.freeze({
      default: 'border-primary-700 text-primary-700 hover:bg-primary-50',
      normal: 'border-success text-success hover:bg-success-light',
      warning: 'border-warning text-warning hover:bg-warning-light',
      error: 'border-error text-error hover:bg-error-light',
      disabled: 'border-secondary-500 text-secondary-500 cursor-default',
    }),
    borderless: Object.freeze({
      default: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
      normal: 'bg-success-light text-success hover:bg-success hover:bg-opacity-50',
      warning: 'bg-warning-light text-warning hover:bg-warning hover:bg-opacity-50',
      error: 'bg-error-light text-error hover:bg-error hover:bg-opacity-50',
      disabled: 'bg-secondary-50 text-secondary-500 cursor-default',
    }),
    shaded: Object.freeze({
      default: 'text-primary-700 hover:border-primary-700',
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
  sizes: Object.freeze({
    lg: 'h-9 py-2 px-4',
    md: 'h-6.5 py-1 px-2.5',
    sm: 'h-5 py-px px-1',
    squared: Object.freeze({
      lg: 'p-2.5',
      md: 'p-1.5',
      sm: 'p-1',
    }),
    text: Object.freeze({
      lg: 'text-sm tracking-sm',
      md: 'text-xs tracking-md',
      sm: 'text-xxs tracking-lg',
    }),
    iconPadding: Object.freeze({
      startIcon: Object.freeze({
        sm: 'pr-2.5',
        md: 'pr-3',
        lg: 'pr-3.5',
      }),
      endIcon: Object.freeze({
        sm: 'pl-2.5',
        md: 'pl-3',
        lg: 'pl-3.5',
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
    shaded: clsx('border border-1 border-white bg-white', {
      [`${colors[variant].disabled} shadow-10`]: disabled,
      [`${colors[variant][color]} shadow-blue-10 hover:shadow-blue-30`]: !disabled,
    }),
    filled: clsx('text-white', {
      [colors[variant].disabled]: disabled,
      [colors[variant][color]]: !disabled,
    }),
  }

  const _classes = {
    button: clsx(
      `focus:outline-none rounded-sm ${sizes.text[size]} font-body font-normal ${variants[variant]} ${classes.button}`,
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
