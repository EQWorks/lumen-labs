import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'
import clsx from 'clsx'


const buttonConfigs = () => ({
  colors: {
    outlined: {
      default: { border: 'border-primary-700', text: 'text-primary-700', hover: 'hover:bg-primary-50' },
      normal: { border: 'border-success', text: 'text-success', hover: 'hover:bg-success-light' },
      warning: {
        border: 'border-warning',
        text: 'text-warning',
        hover: 'hover:bg-warning-light',
      },
      error: {
        border: 'border-error',
        text: 'text-error',
        hover: 'hover:bg-error-light',
      },
      borderDisabled: 'border-secondary-500',
      textDisabled: 'text-secondary-500',
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

  const effects = {
    outlined: {
      // borderColor: disabled ? colors[color].borderDisabled : colors[color].border,
      // hover: disabled ? 'cursor-default' : colors[color].hover,
      // text: disabled ? colors[color].textDisabled : colors[color].text,
      // bgColor: '',
    },
    borderless: {
      bgColor: disabled ? 'bg-secondary-50' : 'bg-primary-10',
      hover: disabled ? 'cursor-default' : 'hover:bg-primary-50',
      text: disabled ? 'text-secondary-500' : 'text-primary-700',
    },
    shaded: {
      hover: disabled ? 'cursor-default' : 'hover:border-primary-700',
      text: disabled ? 'text-secondary-500' : 'text-primary-700',
    },
    filled: {
      bgColor: disabled ? 'bg-secondary-500' : 'bg-primary-700',
      hover: disabled ? 'cursor-default' : 'hover:bg-primary-800',
      text: 'text-white',
    },
  }
  const variants = {
    outlined: clsx(`border border-1 rounded-sm font-body font-normal tracking-wide ${sizes.text[size]}`, {
      [`${colors[variant].borderDisabled} cursor-default ${colors[variant].textDisabled}`]: disabled,
      [`${colors[variant][color].border} ${colors[variant][color].hover} ${colors[variant][color].text}`]: !disabled,
    }),
    borderless: `${effects[variant].bgColor} rounded-sm ${effects[variant].hover}`,
    shaded: `border border-1 border-white bg-white rounded-sm ${effects[variant].hover}`,
    filled: `rounded-sm ${effects[variant].bgColor} ${effects[variant].hover}`,
  }

  const classes = {
    button: clsx(`focus:outline-none ${variants[variant]}`, {
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
