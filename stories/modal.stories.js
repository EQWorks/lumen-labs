import React , { useState } from 'react'

import { ModalBase } from '../src/base-components'
import { Modal, Button, TextField } from '../src'


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
          <Button size='md' onClick={() => onClick('lg')}>Cancel</Button>
          <Button variant='filled' size='md'>Submit</Button>
        </>
        :
        <>
          <Button size='md' type='error' onClick={() => onClick('lg')}>Cancel</Button>
          <div className="right-button flex flex-row">
            <div className="pr-4">
              <Button variant='outlined' size='md'>Reset</Button>
            </div>
            <Button variant='filled' size='md'>Save Selection</Button>
          </div>
        </>
      }
    </>
  )
  
  return (
    <>
      <Modal 
        classes={modalClasses} 
        size={size} 
        open={isOpen} 
        closeModal={onClose} 
        footerContent={footerContent} 
        title={`Modal size - ${size.toUpperCase()}`}
      >
        <div className='flex flex-col'>
          <TextField
            size='md'
            inputProps={{ ...inputProps, prefix: 'https://', suffix: '.com' }}
            label='Email'
          />
          <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </div>
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
