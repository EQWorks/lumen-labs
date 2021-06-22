import React from 'react'

import { Button } from '../../src'
import { BaseStory } from './base-story'
import { OutlinedStory } from './outlined-story'


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
 * [variant] - string, includes: outlined/borderless/shaded/filled
 * [size] - string, includes: lg/md/sm
 * [...rest] - any button element attributes
 */
export const Outlined = () => <OutlinedStory />
