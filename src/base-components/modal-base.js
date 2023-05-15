import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@headlessui/react'


const ModalBase = forwardRef(({
  classes = { root: '', main: '', overlay: '' },
  children,
  open = false,
  closeModal = () => {},
  ...rest
}, ref) => {
  const modalClasses = Object.freeze({
    root: `${classes.root} min-h-screen flex justify-center items-center`,
    main: `${classes.main} flex justify-center items-center transition-all transform`,
    overlay: `${classes.overlay} fixed inset-0`,
  })

  return (
    <Dialog
      ref={ref}
      as="div"
      className='fixed inset-0 z-10 overflow-y-auto'
      open={open}
      onClose={closeModal}
      {...rest}
    >
      <div className={modalClasses.root}>
        <Dialog.Overlay className={modalClasses.overlay}/>
        <div className={modalClasses.main}>
          {children}
        </div>
      </div>
    </Dialog>
  )
})

ModalBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
}

ModalBase.displayName = 'ModalBase'

export default ModalBase
