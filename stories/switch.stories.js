import React, { useState } from 'react'

import { SwitchBase } from '../src/base-components'
import { SwitchRound, SwitchRect, SwitchSquare, makeStyles } from '../src'


export default {
  title: 'Switch',
  component: SwitchBase,
}

const multipleSwitch = [
  {
    type: 'Rounded',
    color: 'error',
  },
  {
    type: 'Rectangle',
    color: 'success',
  },
  {
    type: 'Square',
    color: 'warning',
  },
]

/** -- props:
 * [id] - string, identity of the component
 * [classes] - object, custom styling supported keys:
 *    root: classes applied to the main container
 *    container: classes applied the inner container
 *    button: classes applied to the button inside the container
 *    label: classes applied to the label
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
 * [classes] - object, custom styling supported keys:
 *    root: classes applied to the main container
 *    container: classes applied the inner container
 *    button: classes applied to the button inside the container
 *    label: classes applied to the label
 * [checked] - boolean, flag state to watch the status. If true, the component is checked.
 * [onChange] - function, callback fired when the state is changed.
 * [disabled] - boolean, if true, the switch will be disabled.
 * [tabIndex] - number, indicates that its element can be focused, and where it participates in
 * [color] - string, set outer container color - only classes color palette
 */

export const Rounded = () => {
  const [checked, setChecked] = useState(true)

  return (
    <SwitchRound
      id='round'
      checked={checked}
      onChange={() => {
        setChecked(!checked)
      }}
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

export const Square = () => {
  const [checked, setChecked] = useState(true)

  return (
    <SwitchSquare
      id='square'
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}


export const CustomColor = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const handleOnChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
  }

  const renderMultipleSwitch = (data, index) => {
    switch(data.type) {
    case 'Rounded':
      return (
        <SwitchRound
          id={`${data.type}-${index}`}
          checked={checkedItems[`${data.type}-${index}`]}
          onChange={handleOnChange}
          label='label'
          color={data.color}
        />
      )
    case 'Rectangle':
      return (
        <SwitchRect
          id={`${data.type}-${index}`}
          checked={checkedItems[`${data.type}-${index}`]}
          onChange={handleOnChange}
          label='label'
          color={data.color}
        />
      )
    case 'Square':
      return (
        <SwitchSquare
          id={`${data.type}-${index}`}
          checked={checkedItems[`${data.type}-${index}`]}
          onChange={handleOnChange}
          label='label'
          color={data.color}
        />
      )
    default:
      break
    }
  }

  return (
    <>
      {multipleSwitch.map((data, index) => (
        <div key={index} className="container my-4">
          <span>{data.type} - Color {data.color}</span>
          {renderMultipleSwitch(data, index)}
        </div>
      ))}
    </>
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
      <div className="container my-4">
        <span>Square</span>
        <SwitchSquare
          id='square'
          checked={checked}
          onChange={() => setChecked(!checked)}
          disabled={true}
        />
      </div>
    </>
  )
}

const customStyling = ({ checked }) => makeStyles({
  root: {
    marginTop: '10px',
  },
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '48px',
    height: '23px',
    background: checked ? '#289DC8' : 'shadow-secondary-400 bg-secondary-100',
    border: '0.5px solid #289DC8;',
    borderRadius: '50px',
  },
  button: {
    width: '17px',
    height: '17px',
    background: '#FEFEFE',
    boxShadow: '0px 3px 12px rgba(81, 113, 151, 0.1)',
  },
  label: {
    width: '41px',
    height: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.25px',
    color: '#4C4C4C',
    marginLeft: '5px',
  },
})

export const CustomStyling = () => {
  const [checked, setChecked] = useState(true)

  const customClasses = customStyling({ checked })

  return (
    <>
      <div className="container my-4">
        <span>Custom Styling</span>
        <SwitchRound
          id='round'
          classes={customClasses}
          checked={checked}
          onChange={() => setChecked(!checked)}
          disabled={false}
          label='label'
        />
      </div>
    </>
  )
}
