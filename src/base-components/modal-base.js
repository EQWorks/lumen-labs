import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@headlessui/react'


const ModalBase = forwardRef(({ classes, children, open, closeModal, ...rest }, ref) => {
  const modalClasses = Object.freeze({
    root: `min-h-screen flex justify-center items-center ${classes.root}`,
    main: `flex justify-center items-center transition-all transform ${classes.main}`,
    overlay: `fixed inset-0 ${classes.overlay}`,
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
ModalBase.defaultProps = {
  classes: { root: '', main: '', overlay: '' },
  open: false,
  closeModal: () => {},
}

ModalBase.displayName = 'ModalBase'

export default ModalBase
