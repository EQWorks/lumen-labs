import React, { useState } from 'react'

import { DropdownBase } from '../src/base-components'
import { DropdownSelect, Chip } from '../src'

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

const sampleData = [
  {
    items: [
      {
        title: 'mathematics',
      },
      {
        title: 'english',
      }
    ]
  },
  {
    type: 'social sciences',
    items: [
      {
        title: 'geography',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
      },
      {
        title: 'psychology',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
      },
      {
        title: 'history',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
      },
      {
        title: 'sociology',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
      },
    ]
  },
  {
    type: 'Sciences',
    endIcon: <Info size='lg'/>,
    items: [
      {
        title: 'physics',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        startIcon: <Alert size='lg'/>,
      },
      {
        title: 'chemistry',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        endIcon: <Dollar size='lg'/>,
      },
      {
        title: 'biology',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        startIcon: <Info size='lg'/>,
      },
    ]
  },
]

const sampleData1 = ['test', 'hello', 'sample']

export const Base = () => {
  return (
    <>
      <DropdownBase endIcon={<ArrowDown size='lg'/>}>
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
      <DropdownSelect data={sampleData} endIcon={<ArrowDown size='lg'/>} />
    </>
  )
}

export const MultiSelect = () => {
  const [options, setOptions] = useState(sampleData)
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOnClick = (val) => {
    const filterOptions = []

    options.forEach(item => {
      if (item !== val) {
        filterOptions.push(item)
      }
    })

    setOptions(filterOptions)
    selectedOptions.push(val)
  }

  const renderOptions = () => {
    return (
      <>
        {selectedOptions.map((item, index) => {
          return (
            <Chip key={index} selectable={false}>{item}</Chip>
          )
        })}
      </>
    )
  }

  return (
    <>
      <DropdownBase renderOptions={renderOptions} endIcon={<ArrowDown size='lg'/>}>
        <ul>
          {sampleData1.map((item, index) => {
            return (
              <li key={index} onClick={() => handleOnClick(item)}>{item}</li>
            )
          })}
        </ul>
      </DropdownBase>
    </>
  )
}