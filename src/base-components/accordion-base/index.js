import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import PanelBase from './panel-base'


const AccordionBase = React.forwardRef(({ children, className, onChange, defaultActivePanels }, ref) => {
  const [open, setOpen] = useState([])
  useEffect(() => {
    setOpen(defaultActivePanels)
  }, [])
  return (
    <div ref={ref} className={`inline-flex flex-col ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { open, setOpen, onChange })
        }
        return child
      })}
    </div>
  )
})

AccordionBase.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultActivePanels: PropTypes.array,
}
AccordionBase.defaultProps = {
  className: 'w-full',
  onChange: () => {},
  defaultActivePanels: [],
}

AccordionBase.displayName = 'AccordionBase'
AccordionBase.PanelBase = PanelBase
export default AccordionBase
