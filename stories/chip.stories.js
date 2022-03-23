import React, { useState } from 'react'

import { Chip } from '../src'
import { Info, Close } from '../src/icons'


export default {
  title: 'Chip',
  component: Chip,
}

const description = {
  p: 'text-black mt-5 mb-1',
}

const sampleData = [
  { 
    color: 'error',
    selectable: true,
  },
  { 
    color: 'interactive',
    icon: 'end',
    selectable: true,
  },
  { 
    color: 'success',
    icon: 'start',
    selectable: true,
  },
  {
    color: 'warning',
    icon: 'start',
    selectable: true,
  },
  {
    color: 'secondary',
    icon: 'start',
    selectable: true,
  },
]

/** -- props (Chip):
 * [classes] - object, custom styling supported keys:
 *    chip: chip element
 *    content: chip content span
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [startIcon] - node, icon on left side of chip
 * [endIcon] - node, icon on right side of chip
 * [color] - string set chip color
 * [disabled] - boolean disable chip 
 */

export const Normal = () => {
  return (
    <>
      <p className={description.p}>Default: </p>
      <Chip>CHIP</Chip>
      <p className={description.p}>Start Icon: </p>
      <Chip startIcon={<Info size='sm'/>}>CHIP</Chip>
      <p className={description.p}>End Icon: </p>
      <Chip endIcon={<Close size='xs'/>}>CHIP</Chip>
      <p className={description.p}>no selectable: </p>
      <Chip selectable={false}>CHIP</Chip>
    </>
  )
}

export const Multiple = () => {
  return (
    <>
      {sampleData.map((data, index) => {
        return (
          <div key={index}>
            <p className={description.p}>{data.color}: </p>
            {data.icon ?
              ( data.icon === 'start' && <Chip color={data.color} startIcon={<Info size='sm'/>}>CHIP</Chip> ) ||
              ( data.icon === 'end' && <Chip color={data.color} endIcon={<Info size='sm'/>}>CHIP</Chip> )
              : 
              <Chip color={data.color}>CHIP</Chip>
            }
          </div>
        )
      })}
    </>
  )
}

export const Usage = () => {
  const [options, setOptions] = useState(sampleData)
  const [selectedOptions, setSelectedOptions] = useState([
    { 
      color: 'info',
      icon: 'end',
      selectable: false,
    },
  ])

  const handleAddChip = (data) => { 
    const filterOptions = []

    options.forEach(op => {
      if (op.color !== data.color) {
        filterOptions.push(op)
      }
    })

    setOptions(filterOptions)
    selectedOptions.push(data)
  }

  const handleRemoveChip = (data) => {
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
      <p className={description.p}>Click on chip to select</p>
      <div className='flex flex-row'>
        {options.map((data, index) => {
          return (
            <div className='mr-1' key={index}>
              <Chip color={data.color} onClick={() => handleAddChip(data)}>CHIP</Chip>
            </div>
          )
        })}
      </div>
      <p className={description.p}>Selected (default selected item is not removable): </p>
      <div className='flex flex-row'>
        {selectedOptions.map((data, index) => {
          return (
            <div className='mr-1' key={index}>
              <Chip 
                color={data.color} 
                endIcon={data.selectable !== false && <Close size='xs'/>} 
                selectable={data.selectable} 
                onClick={() => handleRemoveChip(data)}
              >
                CHIP
              </Chip>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const Label = () => {
  return (
    <>
      <p className={description.p}>Default: </p>
      <Label>LABEL</Label>
      <p className={description.p}>Start Icon: </p>
      <Label startIcon={<Info size='sm'/>}>LABEL</Label>
      <p className={description.p}>End Icon: </p>
      <Label endIcon={<Close size='xs'/>}>LABEL</Label>
      <p className={description.p}>no selectable: </p>
      <Label selectable={false}>LABEL</Label>
    </>
  )
}
