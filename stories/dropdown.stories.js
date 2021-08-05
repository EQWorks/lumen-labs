import React from 'react'

import { DropdownBase } from '../src/base-components'
import { DropdownSelect, DropdownSelectSteps } from '../src'

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

const sampleDataBasic = ['test', 'hello', 'sample']

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

const sampleDataSteps = (size = 'md') => ([
  {
    type: 'brands',
    title: 'microsoft',
    startIcon: <Info size={size}/>,
    items: [
      {
        type: 'products',
        title: 'products option',
        items: [
          {
            title: 'option1',
          },
          {
            title: 'option2',
          },
        ],
      },
      {
        type: 'products',
        title: 'products option1',
      },
      {
        type: 'products',
        title: 'products option2',
      },
    ],
  },
  {
    type: 'brands',
    title: 'apple',
    endIcon: <Dollar size={size}/>,
    items: [
      {
        type: 'products',
        title: 'Mac',
        items: [
          {
            title: 'MacBook Air',
          },
          {
            title: 'MacBook Pro',
          },
          {
            title: 'iMac Pro',
          },
          {
            title: 'iMac 24"',
          },
        ],
      },
      {
        type: 'products',
        title: 'iPad',
      },
      {
        type: 'products',
        title: 'iPhone',
      },
      {
        type: 'products',
        title: 'Watch',
      },
    ],
  },
  {
    type: 'brands',
    title: 'huawei',
    items: [
      {
        type: 'products',
        title: 'products option',
        items: [
          {
            title: 'option1',
          },
          {
            title: 'option2',
          },
        ],
      },
      {
        type: 'products',
        title: 'products option1',
      },
      {
        type: 'products',
        title: 'products option2',
      },
    ],
  },
  {
    type: 'brands',
    title: 'google',
    items: [
      {
        type: 'products',
        title: 'products option',
        items: [
          {
            title: 'option',
          },
          {
            title: 'option',
          },
        ],
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
    ],
  },
])

export const Base = () => {
  return (
    <>
      <DropdownBase endIcon={<ArrowDown size='md'/>}>
        <ul>
          {sampleDataBasic.map((item, index) => {
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


export const MultiSelect = () => {
  return (
    <>
      <div className={'flex flex-row'}>
        <div className='mr-5'>
          <p>Multi Select - horizontal</p>
          <DropdownSelect data={sampleData()} endIcon={<ArrowDown size='md'/>} multiSelect/>
        </div>
        <div>
          <p>Multi Select - vertical</p>
          <DropdownSelect data={sampleData()} endIcon={<ArrowDown size='md'/>} multiSelect overflow='vertical'/>
        </div>
      </div>
    </>
  )
}

export const StepsSelect = () => {
  return (
    <>
      <DropdownSelectSteps data={sampleDataSteps()} endIcon={<ArrowDown size='md'/>}/>
    </>
  )
}

export const Large = () => {
  return (
    <>
      <div className={'flex flex-row'}>
        <div className='mr-5'>
          <p>Select</p>
          <DropdownSelect data={sampleData('lg')} size='lg' endIcon={<ArrowDown size='lg'/>} />
        </div>
        <div className='mr-5'>
          <p>Multi Select - horizontal</p>
          <DropdownSelect data={sampleData('lg')} size='lg' endIcon={<ArrowDown size='lg'/>} multiSelect/>
        </div>
        <div>
          <p>Multi Select - vertical</p>
          <DropdownSelect data={sampleData('lg')} size='lg' endIcon={<ArrowDown size='lg'/>} multiSelect overflow='vertical'/>
        </div>
      </div>
      <p>Steps Select</p>
      <DropdownSelectSteps data={sampleDataSteps('lg')} size='lg' endIcon={<ArrowDown size='lg'/>}/>
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
