import React, { useState } from 'react'

import SwitchBase from '../src/base-components/switch-base/switch-base'
import SwitchRound from '../src/components/switch-round/switch-round'
import SwitchRect from '../src/components/switch-rect/switch-rect'


export default {
  title: 'Switch',
  component: SwitchBase,
}

/** -- props:
 * [id] - string, identity of the component
 * [classes] - object, custom styling supported keys:
 *    label: classes applied the outer container
 *    button: classes applied to the inner button
 * [styles] - object, custom in-line styling supported keys:
 *    label: classes applied the outer container
 *    button: classes applied to the inner button
 * [checked] - boolean, flag state to watch the status. If true, the component is checked.
 * [onChange] - function, callback fired when the state is changed.
 * [disabled] - boolean, if true, the switch will be disabled.
 * [tabIndex] - number, indicates that its element can be focused, and where it participates in 
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

/** -- props:
 * [id] - string, identity of the component
 * [checked] - boolean, flag state to watch the status. If true, the component is checked.
 * [onChange] - function, callback fired when the state is changed.
 * [disabled] - boolean, if true, the switch will be disabled.
 * [tabIndex] - number, indicates that its element can be focused, and where it participates in 
 * [color] - string, set outer container color - hex value or tailwind class color palette
 */

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
      disabled={true}
    />
  )
}

export const Disabled = () => {
  const [checked, setChecked] = useState(true)

  return (
    <>
      <div className="container my-4">
        <span>Rounded</span>
        <SwitchRound
          id='round'                         
          checked={checked}
          onChange={() => setChecked(!checked)}
          disabled={true}
        />
      </div>
      <div className="container my-4">
        <span>Rectangle</span>
        <SwitchRect
          id='rect'                         
          checked={checked}
          onChange={() => setChecked(!checked)}
          disabled={true}
        />
      </div>
    </>
  )
}
