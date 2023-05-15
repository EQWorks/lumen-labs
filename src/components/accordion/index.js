import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import AccordionBase from '../../base-components/accordion-base'
import Panel from './panel'
import DetailedPanel from './detailed-panel'


const variants = Object.freeze({
  'left-bordered': 'border-l-4',
})

const Accordion = ({
  classes = {
    root: '',
  },
  children,
  variant = 'default',
  color = '',
  className = '',
  ...props
}) => {
  const accordionClasses = Object.freeze({
    root: `accordion__root ${classes.root}`,
  })

  const _color = (variant !== 'default') && !color ? 'primary' : color
  const borderColor = ['border', (_color === 'primary' ? 'interactive' : _color), (_color === 'primary' ? 500 : 700)].join('-')

  return (
    <AccordionBase className={clsx(`${accordionClasses.root} ${variants[variant]} ${className}`, {
      [borderColor]: _color,
    })} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type.__docgenInfo.displayName === 'Panel') {
          return React.cloneElement(child, { variant, color: _color })
        }
      })}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type.__docgenInfo.displayName === 'DetailedPanel') {
          return React.cloneElement(child)
        }
      })}
    </AccordionBase>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
}

Accordion.Panel = Panel
Accordion.DetailedPanel = DetailedPanel
export default Accordion
