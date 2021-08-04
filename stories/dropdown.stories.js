import React from 'react'

import { DropdownBase } from '../src/base-components'
import { DropdownSelect } from '../src'

import { Dollar, Info, Alert, ArrowDown } from '../src/icons'


export default {
  title: 'Select Dropdown',
  component: DropdownBase,
}

/** -- props (InputBase):
 * [classes] - object, custom styling supported keys:
 *    root: input container div
 *    input: input element
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [value] - string, value of input
 * [defaultValue] - string, value of input on initial render
 * [placeholder] - string, helper value of input if value is empty
 * [onClick] - function, input click handler
 * [onChange] - function, input value change handler
 * [startIcon] - node, icon on left side of input
 * [endIcon] - node, icon on right side of input
 * [prefix] - string, value placed before the input value
 * [suffix] - string, value placed after the input value
 * [...rest] - any input element properties
 */

const sampleData1 = ['test', 'hello', 'sample']

const sampleData = (size = 'md') => ([
  {
    items: [
      {
        title: 'mathematics',
      },
      {
        title: 'english',
      },
    ],
  },
  {
    type: {
      title: 'social sciences',
    },
    items: [
      {
        title: 'geography',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'psychology',
      },
      {
        title: 'history',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'sociology',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
    ],
  },
  {
    type: {
      title: 'Sciences',
      endIcon: <Info size={size}/>,
    },
    items: [
      {
        title: 'physics',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        startIcon: <Alert size={size}/>,
      },
      {
        title: 'chemistry',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        endIcon: <Dollar size={size}/>,
      },
      {
        title: 'biology',
        startIcon: <Info size={size}/>,
      },
    ],
  },
])

export const Base = () => {
  return (
    <>
      <DropdownBase endIcon={<ArrowDown size='md'/>}>
        <ul>
          {sampleData1.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
      </DropdownBase>
    </>
  )
}

export const Normal = () => {
  return (
    <>
      <DropdownSelect data={sampleData()} endIcon={<ArrowDown size='md'/>}/>
    </>
  )
}

export const Large = () => {
  return (
    <>
      <DropdownSelect data={sampleData('lg')} size='lg' endIcon={<ArrowDown size='lg'/>} multiSelect/>
    </>
  )
}

export const MultiSelect = () => {
  return (
    <>
      <DropdownSelect data={sampleData()} endIcon={<ArrowDown size='md'/>} multiSelect/>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <DropdownSelect data={sampleData()} endIcon={<ArrowDown size='md'/>} disabled/>
    </>
  )
}
