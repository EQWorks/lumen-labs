import React, { useState, useEffect } from 'react'

import { DropdownBase } from '../src/base-components'
import { DropdownSelect, DropdownSelectSteps } from '../src'

import { ArrowDown } from '../src/icons'
import { sampleDataBasic, sampleData, sampleDataLarge, sampleDataSteps, sampleDataLinked, sampleDataSubLinked } from '../src/data/dropdown-data'


export default {
  title: 'Select Dropdown',
  component: DropdownBase,
}

const classes = {
  dividerContainer: 'text-error-500',
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
      <DropdownSelect classes={classes} data={sampleData} endIcon={<ArrowDown size='md'/>} showType/>
    </>
  )
}


export const MultiSelect = () => {
  return (
    <>
      <div className={'flex flex-row'}>
        <div className='mr-5'>
          <p>Multi Select - horizontal</p>
          <DropdownSelect classes={classes} data={sampleData} endIcon={<ArrowDown size='md'/>} multiSelect showType/>
        </div>
        <div>
          <p>Multi Select - vertical</p>
          <DropdownSelect classes={classes} data={sampleData} endIcon={<ArrowDown size='md'/>} multiSelect showType overflow='vertical'/>
        </div>
      </div>
    </>
  )
}

export const StepsSelect = () => {
  return (
    <>
      <DropdownSelectSteps data={sampleDataSteps} endIcon={<ArrowDown size='md'/>}/>
    </>
  )
}

export const LinkedSelect = () => {
  const [value, setValue] = useState('')
  const [subData, setSubData] = useState([])
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    value && sampleDataSubLinked.forEach((data) => {
      if (value.title === data.type) {
        setSubData([{ items: data.items }])
        setDisabled(false)
      }
    })
    console.log(value)
    if (!value) {
      setDisabled(true)
    }
  }, [value])

  const onSelect = (selected) => {
    if (value === selected) {
      setValue('')
    } else {
      setValue(selected)
    }
  }
  
  return (
    <div className={'flex flex-row'}>
      <div className='mr-2.5'>
        <DropdownSelect data={sampleDataLinked} onSelect={onSelect} endIcon={<ArrowDown size='md'/>}/>
      </div>
      <div>
        <DropdownSelect data={subData} endIcon={<ArrowDown size='md'/>} disabled={disabled}/>
      </div>
    </div>
  )
}

export const Large = () => {
  const [value, setValue] = useState('')
  const [subData, setSubData] = useState([])
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    value && sampleDataSubLinked.forEach((data) => {
      if (value.title === data.type) {
        setSubData([{ items: data.items }])
        setDisabled(false)
      }
    })
    console.log(value)
    if (!value) {
      setDisabled(true)
    }
  }, [value])

  const onSelect = (selected) => {
    if (value === selected) {
      setValue('')
    } else {
      setValue(selected)
    }
  }

  return (
    <>
      <div className={'flex flex-row'}>
        <div className='mr-5'>
          <p>Select</p>
          <DropdownSelect classes={classes} data={sampleDataLarge} size='lg' endIcon={<ArrowDown size='lg'/>} showType/>
        </div>
        <div className='mr-5'>
          <p>Multi Select - horizontal</p>
          <DropdownSelect classes={classes} data={sampleDataLarge} size='lg' endIcon={<ArrowDown size='lg'/>} multiSelect showType/>
        </div>
        <div>
          <p>Multi Select - vertical</p>
          <DropdownSelect classes={classes} data={sampleDataLarge} size='lg' endIcon={<ArrowDown size='lg'/>} multiSelect showType overflow='vertical'/>
        </div>
      </div>
      <p>Steps Select</p>
      <DropdownSelectSteps data={sampleDataSteps} size='lg' endIcon={<ArrowDown size='lg'/>}/>
      <p>Linked Select</p>
      <div className='flex flex-row'>
        <div className='mr-2.5'>
          <DropdownSelect data={sampleDataLinked} size='lg' onSelect={onSelect} endIcon={<ArrowDown size='lg'/>}/>
        </div>
        <div>
          <DropdownSelect data={subData} size='lg' endIcon={<ArrowDown size='lg'/>} disabled={disabled}/>
        </div>
      </div>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <DropdownSelect data={sampleData} endIcon={<ArrowDown size='md'/>} disabled/>
    </>
  )
}
