import React , { useState } from 'react'

import { ModalBase } from '../src/base-components'
import { Modal, Button } from '../src'


export default {
  title: 'Modal',
  component: ModalBase,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    root: dialog container div
 *    button: dialog button container div
 *    modal: dialog content container div when [modal] is true
 *    dialog: dialog content container div
 *    overlay: overlay div (if [modal] is true)
 * [button] - button (or any node) controlling dialog toggle
 * [modal] - boolean (by default adds overlay)
 * [open] - boolean, control dialog open/close
 * [anchor] - string, control position of dialog relative to [button], supported positions = horizontal/vertical
 * [onClick] - function, click handler for [button] div container
 */

export const Base = () => {
  const modalBaseClasses = Object.freeze({
    overlay: `bg-black opacity-50`,
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

export const Normal = () => {
  const modalClasses = Object.freeze({
    footer: `flex justify-between`,
  })

  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState('md')

  const onClose = () => {
    setIsOpen(false)
  }

  const onClick = (s) => {
    setIsOpen(!isOpen) 
    setSize(s)
  }

  const footerContent = (
    <>
      <Button size='md' onClick={() => onClick('lg')}>Cancel</Button>
      <Button variant='filled' size='md'>Submit</Button>
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
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
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