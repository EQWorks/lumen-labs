import React from 'react'

import { DialogBase } from '../src/base-components'


export default {
  title: 'Dialog',
  component: DialogBase,
}

export const Base = () => {
  const button = (<button>Open Dialog</button>)
  return (
    <DialogBase button={button}>
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
