import React, { useState } from 'react'

import { Label } from '../src'
import { Info, Close } from '../src/icons'


export default {
  title: 'Label',
  component: Label,
}

const description = {
  p: 'text-black mt-5 mb-1',
}

const sampleData = [
  { 
    color: 'error',
    selectable: true,
  },
  { 
    color: 'interactive',
    icon: 'end',
    selectable: true,
  },
  { 
    color: 'success',
    icon: 'start',
    selectable: true,
  },
  {
    color: 'warning',
    icon: 'start',
    selectable: true,
  },
  {
    color: 'secondary',
    icon: 'start',
    selectable: true,
  },
]

/** -- props (Chip):
 * [classes] - object, custom styling supported keys:
 *    chip: chip element
 *    content: chip content span
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [startIcon] - node, icon on left side of chip
 * [endIcon] - node, icon on right side of chip
 * [color] - string set chip color
 * [disabled] - boolean disable chip 
 */

export const Normal = () => {
  return (
    <>
      <p className={description.p}>Default: </p>
      <Label title='title'>Label</Label>
      <p className={description.p}>Start Icon: </p>
      <Label startIcon={<Info size='sm'/>}>Label</Label>
      <p className={description.p}>End Icon: </p>
      <Label endIcon={<Close size='sm'/>}>Label</Label>
      <p className={description.p}>no selectable: </p>
      <Label selectable={false}>Label</Label>
    </>
  )
}
