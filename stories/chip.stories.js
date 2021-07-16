import React, { useState } from 'react'

import { Chip } from '../src'
import { Add, Close } from '../src/icons'


export default {
  title: 'Chip',
  component: Chip,
}

const description = {
  p: 'text-black mt-5 mb-1',
}

const sampleData = [
  { 
    color: 'red',
  },
  { 
    color: 'blue',
    icon: 'end',
  },
  { 
    color: 'green',
    icon: 'start',
  },
  {
    color: 'yellow',
    icon: 'start',
  },
  {
    color: 'purple',
    icon: 'end',
  },
  {
    color: 'pink',
    icon: 'start',
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
      <Chip startIcon={<Add />}>CHIP</Chip>
      <p className={description.p}>End Icon: </p>
      <Chip endIcon={<Add />}>CHIP</Chip>
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
              ( data.icon === 'start' && <Chip color={data.color} startIcon={<Add />}>CHIP</Chip> ) ||
              ( data.icon === 'end' && <Chip color={data.color} endIcon={<Add />}>CHIP</Chip> )
              : 
              <Chip color={data.color}>CHIP</Chip>
            }
          </div>
        )
      })}
    </>
  )
}

export const usage = () => {
  const [options, setOptions] = useState(sampleData)
  const [selectedOptions, setSelectedOptions] = useState([])

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
      <p className={description.p}>Selected: </p>
      <div className='flex flex-row'>
        {selectedOptions.map((data, index) => {
          return (
            <div className='mr-1' key={index}>
              <Chip color={data.color} endIcon={<Close />} onClick={() => handleRemoveChip(data)}>CHIP</Chip>
            </div>
          )
        })}
      </div>
    </>
  )
}
