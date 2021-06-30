import React from 'react'

import { ButtonBase } from '../../src/base-components'
import { Add } from '../../src/icons'


const label = {
  primary: 'text-blue-300 mt-5 mb-1',
  secondary: 'pr-20 text-secondary-600',
}

/** -- props (ButtonBase):
 * [classes] - object, custom styling supported keys:
 *    button: button element
 *    content: button content span
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [startIcon] - node, icon on left side of button
 * [endIcon] - node, icon on right side of button
 * [...rest] - any button element attributes
 */

export const BaseStory = () => {
  const classes = { button: 'border border-1' }
  return (
    <>
      <p className={label.primary}>Normal:</p>
      <ButtonBase classes={classes}>Click</ButtonBase>
      <p className={label.primary}>Start Icon:</p>
      <ButtonBase classes={classes} startIcon={<Add className='w-4 h-4' />}>Click</ButtonBase>
      <p className={label.primary}>End Icon:</p>
      <ButtonBase classes={classes} endIcon={<Add className='w-4 h-4' />}>Click</ButtonBase>
      <p className={label.primary}>Icon Only:</p>
      <ButtonBase classes={classes}><Add className='w-4 h-4' /></ButtonBase>
    </>
  )
}
