import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Dialog } from '@headlessui/react'

import { useComponentIsActive } from '../hooks'


const baseClasses = Object.freeze({
  modal: 'fixed z-20 max-h-full max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  overlay: 'absolute z-10 inset-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-200',
})

const ChildWithProps = ({ children, ...props }) => (React.Children.map(children, (child) => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child, { ...props })
  }
  return child
}))
ChildWithProps.propTypes = { children: PropTypes.node.isRequired }

const HeadlessUIDialog = ({ children, classes, modal, button, open, onClick, onClose }) => {
  const ref = useRef(null)
  const { ref: activeRef, componentIsActive, setComponentIsActive } = useComponentIsActive()
  const controlledOpen = open || open === false || open === ''
  let _open = componentIsActive

  if (controlledOpen) {
    _open = open
  }

  const handleButtonClick = () => {
    if (!controlledOpen) {
      setComponentIsActive((state) => !state)
    }
    onClick()
  }

  const handleClose = () => {
    if (!controlledOpen) {
      return
    }
    onClose()
  }

  const unControlledProps = controlledOpen ? {} : { onClick: handleButtonClick }

  return (
    <>
      <div ref={activeRef} className={classes.root}>
        {button && <ChildWithProps { ...unControlledProps }>
          {onClick && <span onClick={handleButtonClick}>{button}</span>}
          {!onClick && button}
        </ChildWithProps>}
        
        <Dialog initialFocus={ref} open={_open} onClose={handleClose}>
          <div ref={ref} className={clsx({ [`${baseClasses.modal} ${classes.modal}`]: modal, [classes.dialog]: !modal })}>
            {children}
          </div>
        </Dialog>
      </div>
      {_open && modal && <div className={`${baseClasses.overlay} ${classes.overlay}`}></div>}
    </>
  )
}

HeadlessUIDialog.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  modal: PropTypes.bool,
  button: PropTypes.node,
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
}
HeadlessUIDialog.defaultProps = {
  classes: { root: '', button: '', modal: '', dialog: '', overlay: '' },
  modal: false,
  button: null,
  open: undefined,
  onClick: () => {},
  onClose: () => {},
}

export default HeadlessUIDialog
