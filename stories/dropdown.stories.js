import React, { useState, useEffect } from 'react'

import { DropdownBase } from '../src/base-components'
import { DropdownSelect, DropdownSelectSteps, DropdownAutoComplete, DropdownAutoCenter, Button } from '../src'

import { ArrowDown, Search, ArrowUpDown } from '../src/icons'
import { 
  sampleDataBasic, 
  sampleDataGroups, 
  sampleDataDivider, 
  sampleDataIcons, 
  sampleDataDescription, 
  sampleDataMultiselect, 
  sampleDataIconsLarge, 
  sampleDataSteps, 
  sampleDataLinked, 
  sampleDataSubLinked, 
} from './data/dropdown-data'


export default {
  title: 'Select Dropdown',
  component: DropdownBase,
}

/** -- props (DropdownBase):
 * [classes] - object, custom styling supported keys:
 *    root: main container of dropdown component
 *    button: select button container div
 *    innerButton: text inside select button container
 *    content: content container element
 *    menu: dropdown menu/select container div
 *    selectedOptionTitle: text inside selected content element
 * [renderSelectedOptions] - function, to render selected options views/value
 * [button] - node, custom onClick element to trigger select/dropdown menu
 * [onClick] - function, onClick trigger for select/dropdown menu
 * [open] - boolean, control dropdown menu/select - open/close, default = false
 * [size] - string, control component size - supported sizes ['md', 'lg'], default = 'md'
 * [placeholder] - string, helper value of input if value is empty
 * [onSelect] - function, returns selected value
 * [startIcon] - node, icon on left side of select container
 * [endIcon] - node, icon on right side of select container
 * [multiSelect] - bool, control component multiple selection feature, default = false
 * [customTrigger] - node, render your custom trigger to handle dropdown menu/select display
 * [overflow] - string, control selected options x & y overflow - supported values ['horizontal', 'vertical'], default = 'horizontal'
 * [disabled] - bool, disable component status, default = false 
 * [...rest] - any div element properties
 */

export const Base = () => {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleOnClick = () => {
    setOpen(!open)
  }

  const renderSelectedOptions = () => (
    <span>{value}</span>
  )

  return (
    <>
      <DropdownBase onClick={handleOnClick} open={open} renderSelectedOptions={renderSelectedOptions} endIcon={<ArrowDown size='md'/>}>
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

export const Simple = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownSelect simple
            data={sampleDataBasic}
            endIcon={<ArrowDown size='md' />}
            placeholder='Select a word'
          />
        </div>
        <div>
          <p>multi</p>
          <DropdownSelect simple multiSelect
            data={sampleDataBasic}
            endIcon={<ArrowDown size='lg' />}
            placeholder='Select some words'
          />
        </div>
      </div>
    </>
  )
}

/** -- props (DropdownSelect):
 * [classes] - object, custom styling supported keys:
 *    root: main container of dropdown component
 *    button: select button container div
 *    innerButton: text inside select button container
 *    content: content container element
 *    menu: dropdown menu/select container div
 *    listContainer: each container div from the dropdown menu/select list
 *    itemContainer: item container inside a listContainer div
 *    contentContainer: content container inside a itemContainer div
 *    contentHeader: header container inside a contentContainer div
 *    description: description container inside a contentContainer div
 *    type: type container inside a listContainer div 
 *    dividerContainer: divider container inside a listContainer div
 *    selectedOptionTitle: text inside selected content element
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
 * [button] - node, custom onClick element to trigger select/dropdown menu
 * [size] - string, control component size - supported sizes ['md', 'lg'], default = 'md'
 * [value] - array (multiSelect) / object (single), selected option(s) (serves as default value if uncontrolled)
 * [uncontrolled] - bool, don't react to changes in value, default = false 
 * [defaultValue] - array (multiSelect) / object (single), initial selected option 
 * [placeholder] - string, helper value of input if value is empty
 * [onSelect] - function, returns selected value
 * [onDelete] - function, callback function on delete selected value
 * [startIcon] - node, icon on left side of select container
 * [endIcon] - node, icon on right side of select container
 * [multiSelect] - bool, control component multiple selection feature, default = false
 * [showType] - bool, control displaying items type label if exists, default - false
 * [overflow] - string, control selected options x & y overflow - supported values ['horizontal', 'vertical'], default = 'horizontal'
 * [disabled] - bool, disable component status, default = false 
 * [allowClear] - bool, enable clearing button when an option is selected, default = true
 * [simple] - bool, accept arrays of strings instead of the more complex data shape outlined above, default = false 
 * [...rest] - any div element properties
 */

export const Groups = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownSelect data={sampleDataGroups} endIcon={<ArrowDown size='md'/>} placeholder='Select a subject' showType/>
        </div>
        <div>
          <p>Large</p>
          <DropdownSelect data={sampleDataGroups} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='Select a subject' showType/>
        </div>
      </div>
    </>
  )
}

export const Divider = () => {
  const classes = {
    dividerContainer: 'text-error-500',
  }

  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownSelect classes={classes} data={sampleDataDivider} endIcon={<ArrowDown size='md'/>} placeholder='Select an action'/>
        </div>
        <div>
          <p>Large</p>
          <DropdownSelect classes={classes} data={sampleDataDivider} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='Select an action'/>
        </div>
      </div>
    </>
  )
}

export const Icons = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownSelect data={sampleDataIcons} endIcon={<ArrowDown size='md'/>} placeholder='Select an option'/>
        </div>
        <div className='mr-5'>
          <p>Large</p>
          <DropdownSelect data={sampleDataIconsLarge} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='Select an option'/>
        </div>
        <div>
          <p>Clearing disabled</p>
          <DropdownSelect data={sampleDataIconsLarge} size='lg' endIcon={<ArrowDown size='lg' />} allowClear={false} placeholder='Select an option' />
        </div>
      </div>
    </>
  )
}

export const Description = () => {
  const classes = {
    button: 'w-80',
    menu: 'w-80',
  }

  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownSelect classes={classes} data={sampleDataDescription} endIcon={<ArrowDown size='md'/>} placeholder='Select an option'/>
        </div>
        <div>
          <p>Large</p>
          <DropdownSelect classes={classes} data={sampleDataDescription} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='Select an option'/>
        </div>
      </div>
    </>
  )
}

export const MultiSelect = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default - horizontal</p>
          <DropdownSelect data={sampleDataMultiselect} endIcon={<ArrowDown size='md'/>} placeholder='Select a subject' multiSelect/>
        </div>
        <div className='mr-5'>
          <p>Default - vertical</p>
          <DropdownSelect data={sampleDataMultiselect} endIcon={<ArrowDown size='md'/>} overflow='vertical' placeholder='Select a subject' multiSelect/>
        </div>
        <div className='mr-5'>
          <p>Large - horizontal</p>
          <DropdownSelect data={sampleDataMultiselect} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='Select a subject' multiSelect/>
        </div>
        <div>
          <p>Large - vertical</p>
          <DropdownSelect data={sampleDataMultiselect} size='lg' endIcon={<ArrowDown size='lg'/>} overflow='vertical' placeholder='Select a subject' multiSelect/>
        </div>
      </div>
    </>
  )
}

/** -- props (DropdownAutoComplete):
 * [classes] - object, custom styling supported keys:
 *    root: main container of dropdown component
 *    content: content container element
 *    inputContainer: container of input element
 *    input: input element
 *    menu: dropdown menu/select container div
 *    listContainer: each container div from the dropdown menu/select list
 *    itemContainer: item container inside a listContainer div
 *    contentContainer: content container inside a itemContainer div
 *    contentHeader: header container inside a contentContainer div
 *    description: description container inside a contentContainer div
 *    type: type container inside a listContainer div 
 *    dividerContainer: divider container inside a listContainer div
 *    selectedOptionTitle: text inside selected content element
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
 * [size] - string, control component size - supported sizes ['md', 'lg'], default = 'md'
 * [value] - object, set initial selected option
 * [inputProps] - object, accepts all InputBase props
 * [onSelect] - function, returns selected value
 * [onDelete] - function, callback function on delete selected value
 * [showType] - bool, control displaying items type label if exists, default - false
 * [disabled] - bool, disable component status, default = false 
 * [...rest] - any div element properties
 */

export const AutoComplete = () => {
  const classes = {
    inputContainer: 'w-80',
    menu: 'w-80',
  }

  return (
    <>
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownAutoComplete 
            classes={classes} 
            data={sampleDataGroups} 
            inputProps={{ placeholder: 'Search', endIcon: <Search size='md'/> }} 
            showType
          />
        </div>
        <div>
          <p>Large</p>
          <DropdownAutoComplete 
            classes={classes} 
            data={sampleDataGroups} 
            size='lg' 
            inputProps={{ placeholder: 'Search', endIcon: <Search size='lg'/> }} 
            showType
          />
        </div>
      </div>
    </>
  )
}

/** -- props (DropdownSelectSteps):
 * [classes] - object, custom styling supported keys:
 *    root: main container of dropdown component
 *    button: select button container div
 *    content: content container element
 *    menu: dropdown menu/select container div
 *    listContainer: each container div from the dropdown menu/select list
 *    itemContainer: item container inside a listContainer div
 *    contentContainer: content container inside a itemContainer div
 *    contentHeader: header container inside a contentContainer div
 *    type: type container inside a listContainer div 
 *    dividerContainer: divider container inside a listContainer div
 *    selectedOptionTitle: text inside selected content element
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
 * [button] - node, custom onClick element to trigger select/dropdown menu
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
      <div className='flex flex-row'>
        <div className='mr-5'>
          <p>Default</p>
          <DropdownSelectSteps data={sampleDataSteps} endIcon={<ArrowDown size='md'/>} placeholder='Choose an option'/>
        </div>
        <div>
          <p>Large</p>
          <DropdownSelectSteps data={sampleDataSteps} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='Choose an option'/>
        </div>
      </div>
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
    if (value.title === selected.title) {
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
        <DropdownSelect data={subData} endIcon={<ArrowDown size='md'/>} placeholder='API Subcategory' disabled={disabled}/>
      </div>
    </div>
  )
}

export const LinkedSelectLarge = () => {
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
    if (value.title === selected.title) {
      setValue('')
    } else {
      setValue(selected)
    }
  }

  return (
    <div className='flex flex-row'>
      <div className='mr-2.5'>
        <DropdownSelect data={sampleDataLinked} size='lg' onSelect={onSelect} endIcon={<ArrowDown size='lg'/>} placeholder='API Category'/>
      </div>
      <div>
        <DropdownSelect data={subData} size='lg' endIcon={<ArrowDown size='lg'/>} placeholder='API Subcategory' disabled={disabled}/>
      </div>
    </div>
  )
}

export const CustomButton = () => {
  const button = <Button variant='outlined' size='lg'>Click me</Button>
  return (
    <>
      <DropdownSelect data={sampleDataGroups} button={button} endIcon={<ArrowDown size='md'/>} placeholder='Select a subject' showType/>
    </>
  )
}

/** -- props (DropdownAutoCenter):
 * [classes] - object, custom styling supported keys:
 *    root: main container of dropdown component
 *    root: menu/dialog container of dropdown component
 *    button: select button container div
 *    content: content container element
 *    menu: dropdown menu/select container div
 *    selectedOptionTitle: text inside selected content element
 * [data] - array, data json structure to render the item inside the dropdown
 *    title: string, name of the item
 * [onSelect] - function, returns selected value
 * [value] - any, set initial selected option
 * [startIcon] - node, icon on left side of select container
 * [endIcon] - node, icon on right side of select container
 * [scrollable] - bool, controls component y-axis scroll
 * [disabled] - bool, controls component status, default = false
 * [...rest] - any div element properties
 */

export const DropdownCenterSelectedItem = () => {
  const [value, setValue] = useState({ title: 'orange' })

  return (
    <>
      <div className='flex flex-row'>
        <div>No padding</div>
        <DropdownAutoCenter 
          data={sampleDataMultiselect[0].items} 
          value={{ title: 'orange' }}
          endIcon={<ArrowUpDown size='sm'/>}
          scrollable
        />
      </div>
      <div className='flex flex-row p-20'>
        <div>With padding</div>
        <DropdownAutoCenter 
          data={sampleDataMultiselect[0].items} 
          value={value}
          endIcon={<ArrowUpDown size='sm'/>}
          onSelect={(_, val) => { setValue({ title: val.item.title, index: val.index })}}
          scrollable
        />
      </div>
      <div className='flex flex-row p-20'>
        <div>With padding no scroll</div>
        <DropdownAutoCenter 
          data={sampleDataMultiselect[0].items} 
          value={{ title: 'orange' }}
          endIcon={<ArrowUpDown size='sm'/>}
        />
      </div>
    </>
  )
}

export const Disabled = () => {
  return (
    <div className='flex flex-row'>
      <div className='mr-5'>
        <p>Default</p>
        <DropdownSelect endIcon={<ArrowDown size='lg'/>} disabled/>
      </div>
      <div className='mr-5'>
        <p>Large</p>
        <DropdownSelect size='lg' endIcon={<ArrowDown size='lg'/>} disabled/>
      </div>
      <div className='mr-5'>
        <p>Auto Complete</p>
        <DropdownAutoComplete 
          data={sampleDataGroups} 
          inputProps={{ placeholder: 'Search', endIcon: <Search size='md'/> }} 
          showType
          disabled
        />
      </div>
      <div>
        <p>Auto Center</p>
        <DropdownAutoCenter 
          data={sampleDataMultiselect[0].items} 
          value={{ title: 'orange' }}
          endIcon={<ArrowUpDown size='sm'/>}
          disabled
        />
      </div>
    </div>
  )
}
