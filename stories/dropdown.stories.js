import React, { useState, useEffect } from 'react'

import { DropdownBase } from '../src/base-components'
import { DropdownSelect, DropdownSelectSteps } from '../src'

import { ArrowDown } from '../src/icons'
import { sampleDataBasic, sampleData, sampleDataLarge, sampleDataSteps, sampleDataLinked, sampleDataSubLinked } from './data/dropdown-data'


export default {
  title: 'Select Dropdown',
  component: DropdownBase,
}

const classes = {
  dividerContainer: 'text-error-500',
}

/** -- props (DropdownBase):
 * [classes] - object, custom styling supported keys:
 *    container: select container div
 *    content: content container element
 *    dropdown: dropdown menu/select container div
 * [renderOptions] - function, to render selected options node, required!
 * [open] - boolean, control dropdown menu/select - open/close, default = false
 * [size] - string, control component size - supported sizes ['md', 'lg'], default = 'md'
 * [placeholder] - string, helper value of input if value is empty
 * [onSelect] - function, returns selected value
 * [startIcon] - node, icon on left side of select container
 * [endIcon] - node, icon on right side of select container
 * [multiSelect] - bool, control component multiple selection feature, default = false
 * [overflow] - string, control selected options x & y overflow - supported values ['horizontal', 'vertical'], default = 'horizontal'
 * [disabled] - bool, disable component status, default = false 
 * [...rest] - any div element properties
 */

export const Base = () => {
  const [value, setValue] = useState('')

  const renderOptions = () => (
    <span>{value}</span>
  )

  return (
    <>
      <DropdownBase renderOptions={renderOptions} endIcon={<ArrowDown size='md'/>}>
        <ul>
          {sampleDataBasic.map((item, index) => {
            return (
              <li key={index} onClick={() => setValue(item)}>{item}</li>
            )
          })}
        </ul>
      </DropdownBase>
    </>
  )
}

/** -- props (DropdownSelect):
 * [classes] - object, custom styling supported keys:
 *    container: select container div
 *    content: content container element
 *    dropdown: dropdown menu/select container div
 *    listContainer: each container div from the dropdown menu/select list
 *    itemContainer: item container inside a listContainer div
 *    contentContainer: content container inside a itemContainer div
 *    contentHeader: header container inside a contentContainer div
 *    description: description container inside a contentContainer div
 *    type: type container inside a listContainer div 
 *    dividerContainer: divider container inside a listContainer div
 * [data] - array, data json structure to render the item inside the dropdown
 *    type: { object, defines the type/category of each item under it.
 *      title: string, name of the type/category
 *      startIcon: node, icon on left side of type title
 *      endIcon: node, icon on right side of type title
 *    }
 *    items: [ array, items to be render inside the dropdown menu/select list
 *      title: string, name of the item
 *      description: string, description text under the item title/name
 *      startIcon: node, icon on left side of item title
 *      endIcon: node, icon on right side of item title
 *    ]
 *    divider: {
 *      title: string, name of the dividir
 *      startIcon: node, icon on left side of divider title
 *      endIcon: node, icon on right side of divider title
 *    }
 * [open] - boolean, control dropdown menu/select - open/close, default = false
 * [size] - string, control component size - supported sizes ['md', 'lg'], default = 'md'
 * [placeholder] - string, helper value of input if value is empty
 * [onSelect] - function, returns selected value
 * [startIcon] - node, icon on left side of select container
 * [endIcon] - node, icon on right side of select container
 * [multiSelect] - bool, control component multiple selection feature, default = false
 * [showType] - bool, control displaying items type label if exists, default - false
 * [overflow] - string, control selected options x & y overflow - supported values ['horizontal', 'vertical'], default = 'horizontal'
 * [disabled] - bool, disable component status, default = false 
 * [...rest] - any div element properties
 */

export const Normal = () => {
  return (
    <>
      <DropdownSelect classes={classes} data={sampleData} endIcon={<ArrowDown size='md'/>} placeholder='Select a subject' showType/>
    </>
  )
}


export const MultiSelect = () => {
  return (
    <>
      <div className={'flex flex-row'}>
        <div className='mr-5'>
          <p>Multi Select - horizontal</p>
          <DropdownSelect classes={classes} data={sampleData} endIcon={<ArrowDown size='md'/>} placeholder='Select a subject' multiSelect showType/>
        </div>
        <div>
          <p>Multi Select - vertical</p>
          <DropdownSelect classes={classes} data={sampleData} endIcon={<ArrowDown size='md'/>} overflow='vertical' placeholder='Select a subject' multiSelect showType/>
        </div>
      </div>
    </>
  )
}

/** -- props (DropdownSelectSteps):
 * [classes] - object, custom styling supported keys:
 *    container: select container div
 *    content: content container element
 *    dropdown: dropdown menu/select container div
 *    listContainer: each container div from the dropdown menu/select list
 *    itemContainer: item container inside a listContainer div
 *    contentContainer: content container inside a itemContainer div
 *    contentHeader: header container inside a contentContainer div
 *    type: type container inside a listContainer div 
 *    dividerContainer: divider container inside a listContainer div
 * [data] - array, data json structure to render the item inside the dropdown
 *    type: string, defines the type/category of each item under it.
 *    title: string, name of the type/category
 *    startIcon: node, icon on left side of type title
 *    endIcon: node, icon on right side of type title
 *    items: [ array, category items to be render inside the dropdown menu/select list
 *      type: string, defines the type/subcategory of each subItem under it.
 *      title: string, name of the item
 *      startIcon: node, icon on left side of item title
 *      endIcon: node, icon on right side of item title
 *      items: [ array, subcategory items to be render inside the dropdown menu/select list
 *        title: string, name of the subItem
 *        startIcon: node, icon on left side of item title
 *        endIcon: node, icon on right side of item title
 *      ]
 *    ]
 * [open] - boolean, control dropdown menu/select - open/close, default = false
 * [size] - string, control component size - supported sizes ['md', 'lg'], default = 'md'
 * [placeholder] - string, helper value of input if value is empty
 * [onSelect] - function, returns selected value
 * [startIcon] - node, icon on left side of select container
 * [endIcon] - node, icon on right side of select container
 * [showType] - bool, control displaying items type label if exists, default - true
 * [showDivider] - bool, control displaying items type label at bottom of the list to return previous step, default - true
 * [disabled] - bool, disable component status, default = false 
 * [...rest] - any div element properties
 */

export const StepsSelect = () => {
  return (
    <>
      <DropdownSelectSteps data={sampleDataSteps} endIcon={<ArrowDown size='md'/>} placeholder='Choose an option'/>
    </>
  )
}

export const LinkedSelect = () => {
  const [value, setValue] = useState('')
  const [subData, setSubData] = useState([])
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (value) {
      sampleDataSubLinked.forEach((data) => {
        if (value.title === data.type) {
          setSubData([{ items: data.items }])
          setDisabled(false)
        }
      })
    } else {
      setDisabled(true)
      setSubData([])
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
        <DropdownSelect data={sampleDataLinked} onSelect={onSelect} endIcon={<ArrowDown size='md'/>} placeholder='API Category'/>
      </div>
      <div>
        <DropdownSelect data={subData} open={value ? true : false} endIcon={<ArrowDown size='md'/>} placeholder='API Subcategory' disabled={disabled}/>
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
      <div className='flex flex-row'>
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
    <div className='flex flex-row'>
      <div className='mr-5'>
        <p>Medium</p>
        <DropdownSelect classes={classes} endIcon={<ArrowDown size='lg'/>} disabled/>
      </div>
      <div>
        <p>Large</p>
        <DropdownSelect classes={classes} size='lg' endIcon={<ArrowDown size='lg'/>} disabled/>
      </div>
    </div>
  )
}
