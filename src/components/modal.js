import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '@headlessui/react'
import { ModalBase } from '../base-components'
import { Close } from '../icons'


const _modalSize = (size) => {
  let modalSize = {}

  switch(size) {
  case 'sm':
    modalSize = {
      container: 'w-450px h-300px',
    }
    break
  case 'md':
    modalSize = {
      container: 'w-600px h-500px',
    }
    break
  case 'lg':
    modalSize = {
      container: 'w-1000px h-760px',
    }
    break
  default:
    break
  }
  
  return modalSize
}

const Modal = forwardRef(({ classes, children, footerContent, open, closeModal, size, title, ...rest }, ref) => {
  const modalSize = _modalSize(size)

  const modalClasses = Object.freeze({
    container: `flex flex-col justify-between bg-secondary-50 rounded-sm border shadow-blue-60 ${modalSize.container} ${classes.content}`,
    header: `p-5 flex justify-between border-b ${classes.header}`,
    title: `font-bold text-xl font-sans text-secondary-900 tracking-xs leading-1.2 ${classes.title}`,
    close: `focus:outline-none text-secondary-600 fill-current ${classes.close}`,
    content: `h-full px-5 my-15px overflow-y-auto ${modalSize.content} ${classes.content}`,
    footer: `p-5 border-t ${classes.footer}`,
  })

  const modalBaseClasses = Object.freeze({
    root: `px-10 py-5 ${classes.root}`,
    main: classes.main,
    overlay: `bg-secondary-700 opacity-70 ${classes.overlay}`,
  })
  
  return (
    <ModalBase classes={modalBaseClasses} open={open} closeModal={closeModal} {...rest}>
      <div className={`modal-container ${modalClasses.container}`}>
        <div className={`header-container ${modalClasses.header}`}>
          <Dialog.Title as='span' className={modalClasses.title}>{title}</Dialog.Title>
          <button className={modalClasses.close} onClick={closeModal}>
            <Close size='lg'/>
          </button>
        </div>
        <div className={`content-container ${modalClasses.content}`}>
          {children}
        </div>
        {footerContent && 
          <div className={`footer-container ${modalClasses.footer}`}>
            {footerContent}
          </div>
        }
      </div>
    </ModalBase>
  )
})

Modal.propTypes = {
  children: PropTypes.any,
  footerContent: PropTypes.any,
  classes: PropTypes.object,
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
}

Modal.defaultProps = {
  classes: { 
    root: '', 
    main: '', 
    overlay: '', 
    container: '', 
    header: '', 
    title: '', 
    close: '', 
    content: '', 
    footer: '', 
  },
  open: false,
  closeModal: () => {},
  size: 'md',
  title: '',
}

Modal.displayName = 'Modal'

export default Modal