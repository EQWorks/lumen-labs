import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@headlessui/react'

//isOpen, setIsOpen, onClose,
const ModalBase = forwardRef(({ children, isOpen, setIsOpen, onClose, ...rest }, ref) => {
  // const [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog 
      as="div" 
      className='fixed flex justify-center items-center inset-0 z-10 overflow-y-auto'
      open={isOpen} 
      onClose={onClose}
    >
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
        <div className='w-full transition-all transform'>
          <p>
            Are you sure you want to deactivate your account? All of your data will
            be permanently removed. This action cannot be undone.
          </p>
          <button onClick={() => setIsOpen(!isOpen)}>Cancel</button>
        </div>
      </div>
    </Dialog>
  )
  //   let [isOpen, setIsOpen] = useState(true)

  // function closeModal() {
  //   setIsOpen(false)
  // }

  // function openModal() {
  //   setIsOpen(true)
  // }
})

ModalBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onClose: PropTypes.func,
}
ModalBase.defaultProps = {
  classes: { button: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
  isOpen: false,
  setIsOpen: () => {},
  onClose: () => {},
}

ModalBase.displayName = 'ModalBase'

export default ModalBase