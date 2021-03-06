import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { ModalBase } from '../../base-components'
import Header from './header'
import Content from './content'
import Footer from './footer'


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

const Modal = forwardRef(({ classes, children, open, closeModal, size, ...rest }, ref) => {
  const modalSize = _modalSize(size)

  const modalClasses = Object.freeze({
    container: `flex flex-col justify-between bg-secondary-50 rounded-sm border shadow-blue-60 ${modalSize.container} ${classes.content}`,
  })

  const modalBaseClasses = Object.freeze({
    root: `px-10 py-5 ${classes.root}`,
    main: classes.main,
    overlay: `bg-secondary-700 opacity-70 ${classes.overlay}`,
  })
  
  return (
    <ModalBase ref={ref} classes={modalBaseClasses} open={open} closeModal={closeModal} {...rest}>
      <div className={`modal-container ${modalClasses.container}`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, child.type.displayName === 'Header' && { close: closeModal })
          }
          return child
        })}
      </div>
    </ModalBase>
  )
})

Modal.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  size: PropTypes.string,
}

Modal.defaultProps = {
  classes: { 
    root: '', 
    main: '', 
    overlay: '', 
    container: '', 
  },
  open: false,
  closeModal: () => {},
  size: 'md',
}

Modal.displayName = 'Modal'
Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer

export default Modal
