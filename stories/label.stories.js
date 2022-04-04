import React, { useState } from 'react'

import { Label } from '../src'
import { Info, Close } from '../src/icons'


export default {
  title: 'Label',
  component: Label,
}

const description = {
  p: 'text-black mt-5 mb-1',
}

const sampleData = [
  { 
    color: 'neutral',
    disabled: false,
  },
  { 
    color: 'secondary',
    disabled: false,
  },
  { 
    color: 'success',
    disabled: false,
  },
  {
    color: 'warning',
    disabled: false,
  },
  {
    color: 'error',
    disabled: false,
  },
]

/** -- props (Label):
 * [classes] - object, custom styling supported keys:
 *    root: label root container element
 *    content: label content span
 *    title: label title span
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [size] - string set label size, ['sm', 'md', 'lg']. Default = 'md'
 * [color] - string set label color
 * [shade] - string set label shades/type of color ['light', 'dark']. Default = 'light'
 * [startIcon] - node, icon on left side of label
 * [endIcon] - node, icon on right side of label
 * [onClickStartIcon] - func, called when startIcon is clicked
 * [onClickEndIcon] - func, called when endIcon is clicked
 * [disabled] - boolean disable label 
 */

export const Normal = () => {
  return (
    <>
      <p className={description.p}>Default: </p>
      <Label title='title'>Label</Label>
      <p className={description.p}>Start Icon: </p>
      <Label startIcon={<Info size='sm'/>}>Label</Label>
      <p className={description.p}>End Icon: </p>
      <Label endIcon={<Close size='xs'/>}>Label</Label>
      <p className={description.p}>no selectable: </p>
      <Label disabled={true}>Label</Label>
    </>
  )
}

export const variants = () => {
  return (
    <div className="flex">
      <div className='mr-10'>
        <h3>Light medium (default)</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                color={data.color} 
                startIcon={<Info size='sm'/>}
                endIcon={<Close size='xs'/>}
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Dark medium (default)</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                shade='dark'
                color={data.color} 
                startIcon={<Info size='sm'/>}
                endIcon={<Close size='xs'/>}
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Light medium (default) without icon</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                color={data.color} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Dark medium (default) without icon</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                shade='dark'
                color={data.color} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const variantsWithTitle = () => {
  return (
    <div className="flex">
      <div className='mr-10'>
        <h3>Light medium (default)</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                color={data.color} 
                title='title sample'
                startIcon={<Info size='sm'/>}
                endIcon={<Close size='xs'/>}
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Dark medium (default)</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                shade='dark'
                color={data.color} 
                title='title sample'
                startIcon={<Info size='sm'/>}
                endIcon={<Close size='xs'/>}
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Light medium (default) without icon</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                color={data.color} 
                title='title sample'
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Dark medium (default) without icon</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                shade='dark'
                color={data.color} 
                title='title sample'
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="flex">
      <div className='mr-10'>
        <h3>Light small</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                size='sm'
                title='title sample'
                color={data.color} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Dark small</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                size='sm'
                title='title sample'
                shade='dark'
                color={data.color} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Light large</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                size='lg'
                title='title sample'
                color={data.color} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
      <div className='mr-10'>
        <h3>Dark large</h3>
        {sampleData.map((data, index) => {
          return (
            <div key={index}>
              <p className={description.p}>{data.color}: </p>
              <Label 
                size='lg'
                title='title sample'
                shade='dark'
                color={data.color} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Usage = () => {
  const [options, setOptions] = useState(sampleData)
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleAddLabel = (data) => { 
    const filterOptions = []

    options.forEach(op => {
      if (op.color !== data.color) {
        filterOptions.push(op)
      }
    })

    setOptions(filterOptions)
    selectedOptions.push(data)
  }

  const handleRemoveLabel = (data) => {
    const filterOptions = []

    selectedOptions.forEach(op => {
      if (op.color !== data.color) {
        filterOptions.push(op)
      }
    })

    setSelectedOptions(filterOptions)
    options.push(data)
  }

  return (
    <>
      <p className={description.p}>Click on Label to select</p>
      <div className='flex flex-row'>
        {options.map((data, index) => {
          return (
            <div className='mr-1' key={index}>
              <Label shade='dark' color={data.color} onClick={() => handleAddLabel(data)}>Label</Label>
            </div>
          )
        })}
      </div>
      <p className={description.p}>Selected: </p>
      <div className='flex flex-row'>
        {selectedOptions.map((data, index) => {
          return (
            <div className='mr-1' key={index}>
              <Label 
                shade='dark'
                color={data.color} 
                endIcon={data.disabled !== true && <Close size='xs'/>} 
                onClickEndIcon={() => handleRemoveLabel(data)}
                disabled={data.disabled} 
              >
                Label
              </Label>
            </div>
          )
        })}
      </div>
    </>
  )
}
