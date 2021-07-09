import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import PanelBase from '../../base-components/accordion-base/panel-base'


const variants = Object.freeze({
  default: Object.freeze({
    icon: 'w-5 h-5',
    iconRoot: 'rounded-sm bg-secondary-100',
    header: 'py-1 text-sm font-semibold',
  }),
  'left-bordered': Object.freeze({
    icon: 'w-3 h-3 fill-current',
    header: 'p-2.5 text-sm font-semibold',
    details: 'px-2.5',
  }),
})

const colorConfig = ({ color }) => {
  // temporary adjustment before color themes are finalized:
  const bgShade = color === 'primary' ? `bg-${color}-10` : `bg-${color}-50`

  if (!color) return {}
  return ({
    default: {
      icon: `text-${color}-700`,
      header: `text-${color}-700`,
      details: bgShade,
    },
    'left-bordered': {
      icon: `text-${color}-700`,
      header: `text-${color}-700 ${bgShade}`,
      details: bgShade,
    },
  })
}

const Panel = ({ children, classes, variant, color, ...props }) => {
  const colors = useMemo(() => colorConfig({ color }), [color])
  const _classes = {
    icon: `${colors[variant]?.icon || ''} ${variants[variant].icon || ''} ${classes.icon}`,
    iconRoot: clsx(`${variants[variant].iconRoot || ''} ${classes.iconRoot}`, {
      'mr-2': props.alignIcon === 'start',
      'ml-2': props.alignIcon === 'end',
    }),
    header: `${colors[variant]?.header || ''} ${variants[variant].header || ''} ${classes.header}`,
    details: `${colors[variant]?.details || ''} ${variants[variant].details || ''} ${classes.details}`,
  }
  const _props = {
    ...props,
    alignIcon: variant === 'left-bordered' ? 'end' : props.alignIcon,
  }

  return (
    <PanelBase classes={_classes}  {..._props}>{children}</PanelBase>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  color: PropTypes.string,
  variant: PropTypes.string,
  alignIcon: PropTypes.string,
}
Panel.defaultProps = {
  classes: { details: 'h-10' },
  color: '',
  variant: 'default',
  alignIcon: 'start',
}

export default Panel
