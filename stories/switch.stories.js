import React, { useState } from 'react'

import SwitchBase from '../src/base-components/switch-base/switch-base'
import SwitchRound from '../src/components/switch-round/switch-round'
import SwitchRect from '../src/components/switch-rect/switch-rect'


export default {
  title: 'Switch',
  component: SwitchBase,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    icon: classes applied to icon svg
 *    message: classes applied to message beside icon
 * [backdrop] - boolean, renders loader as backdrop
 * [open] - boolean, control loader open/close
 * [message] - string, descriptive text beside icon if [backdrop] is true
 * [Icon] - node, any svg icon
 */

export const Base = () => {
  const [checked, setChecked] = useState(true)

  return (
    <SwitchBase 
      id='base'                         
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}

export const Rounded = () => {
  const [checked, setChecked] = useState(true)

  return (
    <SwitchRound
      id='round'                         
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}

export const Rectangle = () => {
  const [checked, setChecked] = useState(true)

  return (
    <SwitchRect
      id='rect'                         
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
