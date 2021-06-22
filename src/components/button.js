import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'
import clsx from 'clsx'


const buttonConfigs = () => ({
  colors: {
    outlined: {
      default: { border: 'border-primary-700', text: 'text-primary-700', hover: 'hover:bg-primary-50' },
      normal: { border: 'border-success', text: 'text-success', hover: 'hover:bg-success-light' },
      warning: { border: 'border-warning', text: 'text-warning', hover: 'hover:bg-warning-light' },
      error: { border: 'border-error', text: 'text-error', hover: 'hover:bg-error-light' },
      borderDisabled: 'border-secondary-500',
      textDisabled: 'text-secondary-500',
    },
    borderless: {
      default: { bgColor: 'bg-primary-10', text: 'text-primary-700', hover: 'hover:bg-primary-50' },
      normal: { bgColor: 'bg-success-light', text: 'text-success', hover: 'hover:bg-success hover:bg-opacity-50' },
      warning: { bgColor: 'bg-warning-light', text: 'text-warning', hover: 'hover:bg-warning hover:bg-opacity-50' },
      error: { bgColor: 'bg-error-light', text: 'text-error', hover: 'hover:bg-error hover:bg-opacity-50' },
      bgColorDisabled: 'bg-secondary-50',
      textDisabled: 'text-secondary-500',
    },
    shaded: {
      default: { text: 'text-primary-700', hover: 'hover:border-primary-700' },
      normal: { text: 'text-success', hover: 'hover:border-success' },
      warning: { text: 'text-warning', hover: 'hover:border-warning' },
      error: { text: 'text-error', hover: 'hover:border-error' },
      textDisabled: 'text-secondary-500',
    },
    filled: {
      default: { bgColor: 'bg-primary-700', hover: 'hover:bg-primary-800' },
      normal: { bgColor: 'bg-success', hover: 'hover:bg-success-hover' },
      warning: { bgColor: 'bg-warning', hover: 'hover:bg-warning-hover' },
      error: { bgColor: 'bg-error', hover: 'hover:bg-error-hover' },
      bgColorDisabled: 'bg-secondary-500',
    },
  },
  sizes: {
    lg: 'h-9 py-2 px-4',
    md: 'h-6.5 py-1 px-2.5',
    sm: 'h-5 py-px px-1',
    squared: {
      lg: 'p-2.5',
      md: 'p-1.5',
      sm: 'p-1',
    },
    text: {
      lg: 'text-sm',
      md: 'text-xs',
      sm: 'text-xxs',
    },
  },
})

const Button = ({ children, variant, size, color, disabled, ...rest }) => {
  const { colors, sizes } = buttonConfigs()
  const variants = {
    outlined: clsx('border border-1', {
      [`${colors[variant].borderDisabled} cursor-default ${colors[variant].textDisabled}`]: disabled,
      [`${colors[variant][color].border} ${colors[variant][color].hover} ${colors[variant][color].text}`]: !disabled,
    }),
    borderless: clsx({
      [`${colors[variant].bgColorDisabled} cursor-default ${colors[variant].textDisabled}`]: disabled,
      [`${colors[variant][color].bgColor} ${colors[variant][color].hover} ${colors[variant][color].text}`]: !disabled,
    }),
    shaded: clsx('border border-1 border-white bg-white', {
      [`${colors[variant].textDisabled} cursor-default shadow-10`]: disabled,
      [`${colors[variant][color].text} ${colors[variant][color].hover} shadow-blue-10 hover:shadow-blue-30`]: !disabled,
    }),
    filled: clsx('text-white', {
      [`${colors[variant].bgColorDisabled} cursor-default`]: disabled,
      [`${colors[variant][color].bgColor} ${colors[variant][color].hover}`]: !disabled,
    }),
  }

  const classes = {
    button: clsx(`focus:outline-none rounded-sm ${sizes.text[size]} font-body font-normal tracking-wide ${variants[variant]}`, {
      [sizes[size]]: typeof children === 'string',
      [sizes.squared[size]]: typeof children !== 'string',
    }),
    startIcon: 'pr-2.5',
    endIcon: 'pl-2.5',
  }

  return (
    <ButtonBase classes={classes} disabled={disabled} {...rest}>
      {(typeof children === 'string' && size === 'sm') ? children.toUpperCase() : children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
}
Button.defaultProps = {
  variant: 'outlined',
  size: 'lg',
  color: 'default',
  disabled: false,
}

export default Button
