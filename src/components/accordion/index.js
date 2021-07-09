import React from 'react'
import PropTypes from 'prop-types'

import AccordionBase from '../../base-components/accordion-base'
import Panel from './panel'
import clsx from 'clsx'


const variants = Object.freeze({
  'left-bordered': 'border-l-4',
})

const Accordion = ({ children, variant, color, className, ...props }) => {
  const _color = (variant !== 'default') && !color ? 'primary' : color
  return (
    <AccordionBase className={clsx(`${variants[variant]} ${className}`, {
      [`border-${_color}-700`]: _color,
    })} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { variant, color: _color })
        }
        return child
      })}
    </AccordionBase>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
}
Accordion.defaultProps = {
  className: '',
  variant: 'default',
  color: '',
}

Accordion.Panel = Panel
export default Accordion
