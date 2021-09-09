import React , { useState } from 'react'

import { ModalBase } from '../src/base-components'
import { Modal } from '../src'


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
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ModalBase open={isOpen} closeModal={onClose}>
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
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Modal open={isOpen} closeModal={onClose}/>
      <div className='flex flex-col'>
        <button onClick={() => setIsOpen(!isOpen)}>modal open</button>
      </div>
    </>
  )
}