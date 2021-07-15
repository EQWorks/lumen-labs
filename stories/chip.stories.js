import React from 'react'

import { ChipBase } from '../src/base-components'
import { Add } from '../src/icons'


export default {
  title: 'Chip',
  component: ChipBase,
}

const description = {
  p: 'text-blue-300 mt-5 mb-1',
}

/** -- props (ButtonBase):
 * [classes] - object, custom styling supported keys:
 *    chip: button element
 *    content: button content span
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [startIcon] - node, icon on left side of button
 * [endIcon] - node, icon on right side of button
 * [disabled] - boolean disable chip 
 */
export const Base = () => {
  const classes = { chip: 'border border-1 px-2 py-0.5 text-xs rounded-xl' }

  return (
    <>
      <p className={description.p}>Normal: </p>
      <ChipBase classes={classes}>CHIP</ChipBase>
      <p className={description.p}>Start Icon:</p>
      <ChipBase classes={classes} startIcon={<Add className='w-2 h-2' />}>CHIP</ChipBase>
      <p className={description.p}>End Icon:</p>
      <ChipBase classes={classes} endIcon={<Add className='w-2 h-2' />}>CHIP</ChipBase>
    </>
  )
}
