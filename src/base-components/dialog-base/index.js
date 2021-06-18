import React from 'react'
import PropTypes from 'prop-types'

import { useComponentIsActive } from '../../hooks'


const _baseClasses = ({ anchor, modal }) => ({
  root: `flex ${anchor === 'bottom' ? 'flex-col'
    : anchor === 'top' ? 'flex-col-reverse'
      : anchor === 'left' ? 'flex-row-reverse'
        : anchor === 'right' ? 'flex-row'
          : ''
  }`,
  modal: modal
    ? 'fixed z-20 max-h-full max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white'
    : '',
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
        <div className={classes.button} onClick={handleClick}>{button}</div>
        {_open && <>
          <div className={`${baseClasses.modal} ${classes.dialog}`}>{children}</div>
        </>}
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
  anchor: 'bottom',
  onClick: () => {},
}
export default DialogBase
