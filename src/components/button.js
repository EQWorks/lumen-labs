import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from '../base-components'
import clsx from 'clsx'


const Button = ({ children, variant, size, disabled, ...rest }) => {
  const effects = {
    outlined: {
      borderColor: disabled ? 'border-secondary-500' : 'border-primary-700',
      hover: disabled ? 'cursor-default' : 'hover:bg-primary-50',
      text: disabled ? 'text-secondary-500' : 'text-primary-700',
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
    outlined: `border border-1 ${effects[variant].borderColor} rounded-sm ${effects[variant].hover}`,
    borderless: `${effects[variant].bgColor} rounded-sm ${effects[variant].hover}`,
    shaded: `border border-1 border-white bg-white rounded-sm ${effects[variant].hover}`,
    filled: `rounded-sm ${effects[variant].bgColor} ${effects[variant].hover}`,
  }
  const sizes = {
    lg: 'h-9 py-2 px-4',
    md: 'h-6.5 py-0.5 px-2.5',
    sm: 'h-5 py-px px-1',
    squared: {
      lg: 'py-3 px-3',
      md: 'py-2 px-2',
      sm: 'py-1 px-1',
    },
  }

  const classes = {
    button: clsx(`focus:outline-none ${variants[variant]} ${effects[variant].text}`, {
      [sizes[size]]: typeof children === 'string',
      [sizes.squared[size]]: typeof children !== 'string',
    }),
    content: `font-sans text-sm ${effects[variant].text}`,
    startIcon: 'pr-2.5',
    endIcon: 'pl-2.5',
  }

  return (
    <ButtonBase classes={classes} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
}
Button.defaultProps = {
  variant: 'outlined',
  size: 'lg',
  disabled: false,
}

export default Button
