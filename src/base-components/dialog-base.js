import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { useComponentIsActive } from '../hooks'


const _baseClasses = ({ anchor }) => ({
  root: clsx('relative inline-flex', {
    'flex-row': anchor === 'horizontal',
    'flex-col': anchor === 'vertical',
  }),
  dialog: 'absolute',
  modal: 'fixed z-20 max-h-full max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white',
  overlay: 'absolute z-10 inset-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-200',
})

const DialogBase = ({ classes, button, children, modal, open, anchor, onClick }) => {
  const baseClasses = _baseClasses({ anchor, modal })
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  const controlledOpen = open || open === false || open === ''
  let _open = componentIsActive

  if (controlledOpen) {
    _open = open
  }

  const handleClick = () => {
    if (!controlledOpen) {
      setComponentIsActive(!componentIsActive)
    }
    onClick()
  }

  return (
    <>
      <div ref={ref} className={`${baseClasses.root} ${classes.root}`}>
        <span className={classes.button} onClick={handleClick}>{button}</span>
        {_open &&<span><div className={clsx({
          [baseClasses.modal]: modal,
          [`${baseClasses.dialog} ${classes.dialog}`]: !modal,
        })}
        >{children}</div></span>}
      </div>
      {_open && modal && <div className={`${baseClasses.overlay} ${classes.overlay}`}></div>}
    </>
  )
}

DialogBase.propTypes = {
  button: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  modal: PropTypes.bool,
  open: PropTypes.bool,
  anchor: PropTypes.string,
  onClick: PropTypes.func,
}
DialogBase.defaultProps = {
  classes: { root: '', button: '', dialog: '' },
  modal: false,
  open: undefined,
  anchor: 'vertical',
  onClick: () => {},
}
export default DialogBase
