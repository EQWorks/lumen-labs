import React from 'react'

import { Button } from '../../src'
import { BaseStory } from './base-story'
import ButtonStory from './button-story'


export default {
  title: 'Buttons',
  component: Button,
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
export const Base = () => <BaseStory />

/** -- props (Button):
 * [classes] - object, custom styling supported keys:
 *    button: button element of ButtonBase
 *    startIcon: startIcon container div of ButtonBase
 *    endIcon: endIcon container div of ButtonBase
 * [variant] - string, includes: outlined/borderless/shaded/filled
 * [size] - string, includes: lg/md/sm
 * [color] - string, includes: default/normal/warning/error
 * [...rest] - any button element attributes
 */
export const Outlined = () => <ButtonStory variant='outlined' />
export const Borderless = () => <ButtonStory variant='borderless' />
export const Shaded = () => <ButtonStory variant='shaded' />
export const Filled = () => <ButtonStory variant='filled' />
