import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@headlessui/react'
import { ModalBase } from '../base-components'
import { Close } from '../icons'


const Modal = forwardRef(({ classes, children, open, closeModal, title, ...rest }, ref) => {
  
  return (
    <ModalBase open={open} closeModal={closeModal} {...rest}>
      <div className="modal-container">
        <div className={`header-container p-5 flex justify-between border-b ${classes.header}`}>
          <Dialog.Title as='span' className={classes.title}>{title}</Dialog.Title>
          <button className={classes.close} onClick={closeModal}>
            <Close size='lg'/>
          </button>
        </div>
        <div className={`content-container ${classes.content}`}>
          <div className='flex flex-col'>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </div>
        </div>
      </div>
    </ModalBase>
  )
})

Modal.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  title: PropTypes.string,
}
Modal.defaultProps = {
  classes: { root: '', main: '', header: '', title: '', close: '', content: '' },
  startIcon: null,
  endIcon: null,
  open: false,
  closeModal: () => {},
  title: 'Title'
}

Modal.displayName = 'Modal'

export default Modal