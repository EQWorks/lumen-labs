import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@headlessui/react'


const ModalBase = forwardRef(({ classes, children, open, closeModal, ...rest }, ref) => {
  return (
    <Dialog 
      as="div" 
      className='fixed inset-0 z-10 overflow-y-auto'
      open={open} 
      onClose={closeModal}
      {...rest}
    >
      <div className={`min-h-screen flex justify-center items-center p-5 ${classes.root}`}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
        <div className={`w-full transition-all transform ${classes.main}`}>
          {children ||         
            <div className='flex flex-col'>
              <button onClick={closeModal}>close modal</button>
            </div>
          }
        </div>
      </div>
    </Dialog>
  )
})

ModalBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  open: PropTypes.bool,
  closeModal: PropTypes.func,
}
ModalBase.defaultProps = {
  classes: { root: '', main: '', },
  startIcon: null,
  endIcon: null,
  open: false,
  closeModal: () => {},
}

ModalBase.displayName = 'ModalBase'

export default ModalBase