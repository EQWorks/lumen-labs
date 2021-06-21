import React from 'react'

import { ButtonBase } from '../src/base-components'
import { Add } from '../src/icons'


export default {
  title: 'Buttons',
  component: ButtonBase,
}

const labelClass = 'text-blue-300 mt-5 mb-1'

/** -- props (ButtonBase):
 * [classes] - object, custom styling supported keys:
 *    button: button element
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [startIcon] - node, icon on left side of button
 * [endIcon] - node, icon on right side of button
 * [...rest] - any button element attributes
 */

export const Base = () => {
  const classes = { button: 'border border-1' }
  return (
    <>
      <p className={labelClass}>Normal:</p>
      <ButtonBase classes={classes}>Click</ButtonBase>
      <p className={labelClass}>Start Icon:</p>
      <ButtonBase classes={classes} startIcon={<Add />}>Click</ButtonBase>
      <p className={labelClass}>End Icon:</p>
      <ButtonBase classes={classes} endIcon={<Add />}>Click</ButtonBase>
      <p className={labelClass}>Icon Only:</p>
      <ButtonBase classes={classes}><Add /></ButtonBase>
    </>
  )
}
