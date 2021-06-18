import React from 'react'

import { DialogBase } from '../src/base-components'


export default {
  title: 'Dialog',
  component: DialogBase,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    root: dialog container div
 *    button: dialog button container div
 *    dialog: dialog content container div
 *    overlay: overlay div (if [modal] is true)
 * [button] - button (or any node) controlling dialog toggle
 * [modal] - boolean (by default adds overlay)
 * [open] - boolean, control dialog open/close
 * [anchor] - string, control position of dialog relative to [button], supported positions = horizontal/vertical
 * [onClick] - function, click handler for [button] div container
 */

export const Base = () => {
  const button = (<button>Open Dialog</button>)
  return (
    <DialogBase classes={{ dialog: 'w-screen' }} button={button}>
      <p>
        I am just a simple dialog.
        More improvements needed to make my usage more flexible.
      </p>
    </DialogBase>
  )
}

export const BaseModal = () => {
  const button = (<button>Open Modal</button>)
  return (
    <DialogBase modal button={button}>
      <p>
        I am just a simple modal.
        More improvements needed to make my usage more flexible.
      </p>
    </DialogBase>
  )
}

export const CustomDialog = () => {
  const button = (<button className='focus:outline-none'>Open Dialog</button>)
  const customClasses = {
    button: 'w-32 p-4 rounded-md cursor-pointer bg-blue-50 hover:bg-blue-100',
    dialog: 'w-96 p-4 shadow-md mt-1 bg-blue-200',
  }
  return (
    <DialogBase classes={customClasses} button={button}>
      <p>
        I am just a simple dialog.
        More improvements needed to make my usage more flexible.
      </p>
    </DialogBase>
  )
}
