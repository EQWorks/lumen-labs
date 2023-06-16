import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const Panel = forwardRef(({
  id,
  children,
  classes = {
    root: '',
  },
}, ref) => {
  const PanelClasses = Object.freeze({
    root: `panel__root ${classes.root}`,
  })

  return (
    <div
      id={id}
      ref={ref}
      className={`${PanelClasses.root}`}
    >
      {children}
    </div>
  )
})

Panel.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
}

Panel.displayName = 'Panel'

export default Panel
