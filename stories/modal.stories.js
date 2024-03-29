import React , { useState } from 'react'

import { ModalBase } from '../src/base-components'
import { Modal, Button, TextField, makeStyles } from '../src'


export default {
  title: 'Modal',
  component: ModalBase,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    root: modal root container div
 *    main: modal main container div
 *    overlay: overlay div (if [open] is true)
 * [children] - any, render inner modal elements. NOTE: Must have a focusable element ex: button.
 * [open] - boolean, whether the Dialog is open or not.
 * [closeModal] - function, called when the Modal is dismissed (via the overlay or Escape key). Typically used to close the Modal by setting open to false.
 */

export const Base = () => {
  const modalBaseClasses = Object.freeze({
    overlay: 'bg-black opacity-50',
  })

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ModalBase classes={modalBaseClasses} open={isOpen} closeModal={onClose}>
        <div className='flex flex-col'>
          <button onClick={onClose}>X</button>
        </div>
      </ModalBase>
      <div className='flex flex-col'>
        <button onClick={() => setIsOpen(!isOpen)}>modal open</button>
      </div>
    </>
  )
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    root: modal root container div
 *    main: modal main container div
 *    overlay: overlay div (if [open] is true)
 *    container: 'inner main container div',
 *    header: 'header container div',
 *    title: 'inner header container title',
 *    close: 'inner header container close button',
 *    content: 'content container div',
 *    footer: 'footer container div',
 * [children] - any, render inner modal elements. NOTE: Must have a focusable element ex: button.
 * [open] - boolean, whether the Dialog is open or not.
 * [closeModal] - function, called when the Modal is dismissed (via the overlay or Escape key). Typically used to close the Modal by setting open to false.
 * [size] - string, determines the size of the component by ['lg', 'md', 'sm'] - default 'md'
 * [title] - string, value of title
 */

const contentText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

export const Normal = () => {
  const modalClasses = Object.freeze({
    footer: 'flex justify-between',
  })

  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState('md')

  const inputProps = { placeholder: 'Placeholder text' }

  const onClose = () => {
    setIsOpen(false)
  }

  const onClick = (s) => {
    setIsOpen(!isOpen)
    setSize(s)
  }

  const footerContent = (
    <>
      {size === 'sm' ?
        <>
          <Button size={size === 'lg' ? 'lg' : 'md'} onClick={() => onClick('lg')}>Cancel</Button>
          <Button variant='filled' size={size === 'lg' ? 'lg' : 'md'}>Submit</Button>
        </>
        :
        <>
          <Button size={size === 'lg' ? 'lg' : 'md'} type='error' onClick={() => onClick('lg')}>Cancel</Button>
          <div className="right-button flex flex-row">
            <div className="pr-4">
              <Button variant='outlined' size={size === 'lg' ? 'lg' : 'md'}>Reset</Button>
            </div>
            <Button variant='filled' size={size === 'lg' ? 'lg' : 'md'}>Save Selection</Button>
          </div>
        </>
      }
    </>
  )

  return (
    <>
      <Modal
        size={size}
        open={isOpen}
        closeModal={onClose}
      >
        <Modal.Header>
          Modal size - {size.toUpperCase()}
        </Modal.Header>
        <Modal.Content>
          <TextField
            size='md'
            inputProps={{ ...inputProps, prefix: 'https://', suffix: '.com' }}
            label='Email'
          />
          <span className='mt-2'>{contentText}</span>
        </Modal.Content>
        <Modal.Footer classes={modalClasses}>
          {footerContent}
        </Modal.Footer>
      </Modal>
      <div className='flex flex-row'>
        <div className='mx-5'>
          <Button size='md' onClick={() => onClick('lg')}>Large Modal</Button>
        </div>
        <div className='mx-5'>
          <Button size='md' onClick={() => onClick('md')}>Medium Modal</Button>
        </div>
        <div className='mx-5'>
          <Button size='md' onClick={() => onClick('sm')}>Small Modal</Button>
        </div>
      </div>
    </>
  )
}

export const CustomStyling = () => {
  const customStyling = makeStyles({
    container: {
      background: '#EE6E91',
      borderRadius: '10px',
    },
    header: {
      background: '#000000',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    title: {
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#FFFFFF',
    },
    content: {
      fontWeight: '700',
      fontSize: '14px',
    },
    footer: {
      background: '#000000',
      color: '#FFFFFF',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
  })

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Modal
        size='md'
        open={isOpen}
        classes={customStyling}
        closeModal={onClose}
      >
        <Modal.Header classes={customStyling}>
        Custom Styling
        </Modal.Header>
        <Modal.Content classes={customStyling}>
          <span className='mt-2'>{contentText}</span>
        </Modal.Content>
        <Modal.Footer classes={customStyling}>
          Redirecting in 1 second...
        </Modal.Footer>
      </Modal>
      <div className='flex flex-row'>
        <div className='mx-5'>
          <Button size='md' onClick={() => onClick('md')}>Custom-Styled Modal</Button>
        </div>
      </div>
    </>
  )
}
