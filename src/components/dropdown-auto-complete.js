import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@headlessui/react'

import { DropdownBase } from '../base-components'
import { TextField } from '..'
import { useComponentIsActive } from '../hooks'


const _contentSize = (size) => {
  let contentSize = ''

  switch(size) {
  case 'lg':
    contentSize = {
      optionSize: 'mb-9px',
      itemContainer: 'py-5px',
      contentContainer: 'py-5px',
      type: 'py-2.5',
      description: 'text-xs',
      dividerContainer: 'pt-3.5 pb-2.5',
    }
    break
  case 'md':
    contentSize = {
      optionSize: 'mb-5px',
      itemContainer: 'py-3px',
      contentContainer: 'py-3px',
      type: 'py-1.5',
      description: 'text-11px',
      dividerContainer: 'pt-2 pb-1.5',
    }
    break
  default:
    break
  }
  
  return contentSize
}

const DropdownAutoComplete = ({ 
  classes, 
  data, 
  size, 
  onSelect, 
  inputProps, 
  showType, 
  disabled, 
  ...rest 
}) => {
  const [options, setOptions] = useState(data)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  
  const contentSize = _contentSize(size)
  const dropdownAutoCompleteClasses = Object.freeze({
    listContainer: `capitalize ${classes.listContainer}`,
    itemContainer: `text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 active:bg-neutral-200
      ${contentSize.contentContainer} ${classes.contentContainer}`,
    contentHeader: `w-full flex flex-row items-center justify-between ${classes.contentHeader}`,
    type: `px-5px flex items-center font-semibold text-secondary-400 ${contentSize.type} ${classes.type}`,
    description: `pt-5px font-normal text-secondary-500 ${contentSize.description} ${classes.description}`,
    dividerContainer: `px-2.5 flex flex-row items-center font-bold text-secondary-600 border-t border-secondary-300 cursor-pointer 
      ${contentSize.dividerContainer} ${classes.dividerContainer}`,
    startIcon: 'mr-2.5 fill-current stroke-current',
    endIcon: 'ml-2.5 fill-current stroke-current',
    selected: 'font-semibold text-secondary-900 bg-interactive-100 hover:text-secondary-900 hover:bg-interactive-100',
  })

  const dropdownClasses = Object.freeze({
    root: classes.root,
    menu: `${!data.length > 0 && 'hidden'} ${classes.menu ? classes.menu : 'w-250px'}`,
    content: classes.content,
  })

  const textFieldClasses =  Object.freeze({
    container: classes.inputContainer,
    input: `capitalize ${classes.input}`,
  })

  useEffect(() => {
    const initialOptions = []

    data && data.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push({ ...item, type: el.type && el.type.title })
      })
    })

    setSelectedOptions([])
    setOptions(initialOptions)
    setFilteredOptions(initialOptions)
  }, [data])

  if (!componentIsActive && open) {
    setOpen(!open)
  }

  const onClickSelect = () => {
    setComponentIsActive((state) => !state)
    setOpen(!open)
  }

  const renderList = (data) => (
    <>
      {data.map((item, index) => {
        return (
          <div 
            key={`item-container-${index}`} 
            className={`item-container-${index} 
              ${dropdownAutoCompleteClasses.itemContainer}
              ${!filteredOptions.some(op => op.title === item.title) && 'hidden'} 
            `} 
            onClick={() => handleOnClick(index, item)}
          >
            <div 
              className={`content-container-${index}
                ${dropdownAutoCompleteClasses.contentContainer}
                ${selectedOptions === item && dropdownAutoCompleteClasses.selected} 
              `}
            >
              {renderListItem(item)}
              {item.description && <div className={`description-container-${index} ${dropdownAutoCompleteClasses.description}`}>{item.description}</div>}
            </div>
          </div>
        )
      })}
    </>
  )

  const renderListItem = (item) => {
    let selected = null
    return (
      <div className={dropdownAutoCompleteClasses.contentHeader}>
        <div className='flex flex-row items-center'>
          {item.startIcon && <div className={dropdownAutoCompleteClasses.startIcon}>{item.startIcon}</div>}
          <span>{item.title || item.type}</span>
          {item.endIcon && <div className={dropdownAutoCompleteClasses.endIcon}>{item.endIcon}</div>}
        </div>
        {selected}
      </div>
    )
  }

  const handleOnClick = (i, value) => {
    if (selectedOptions === value) {
      setSelectedOptions([])
    } else {
      setSelectedOptions(value)
      onClickSelect()
    }
    
    onSelect({ ...value, i })
    setUserInput(value.title)
    setFilteredOptions(options)
  }

  const onChange = (val) => {
    const filteredSuggestions = options.filter(
      suggestion =>
        suggestion.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
        suggestion.type && suggestion.type.toLowerCase().indexOf(val.toLowerCase()) > -1,
    )

    if (!val || val != selectedOptions.title) {
      setSelectedOptions([])
    }

    if (filteredSuggestions.length) {
      setOpen(true)
    } else {
      setOpen(false)
    }
    setFilteredOptions(filteredSuggestions)
    setUserInput(val)
  }
  
  const autoComplete = (
    <TextField 
      classes={textFieldClasses}
      size={size} 
      value={userInput}
      onClick={onClickSelect} 
      onChange={onChange}
      inputProps={inputProps} 
    />
  )

  return (
    <DropdownBase 
      ref={ref}
      classes={dropdownClasses} 
      open={open}
      size={size}
      customTrigger={autoComplete}
      disabled={disabled} 
      {...rest}
    >
      <ul>
        {data && data.map((el, index) => {
          return (
            <Menu.Item 
              as="li" 
              key={`list-container-${index}`} 
              className={`list-container-${index} ${dropdownAutoCompleteClasses.listContainer}`}
            >
              {showType && el.type && 
                <label 
                  className={`
                    type-container-${index} ${dropdownAutoCompleteClasses.type}
                    ${!filteredOptions.some(op => op.type === el.type.title) && 'hidden'}
                  `} 
                  htmlFor="span"
                >
                  {renderListItem(el.type)}
                </label>
              }
              {renderList(el.items)}
              {el.divider && <div className={`divider-container-${index} ${dropdownAutoCompleteClasses.dividerContainer}`}>{renderListItem(el.divider)}</div>}
            </Menu.Item>
          )
        })}
      </ul>
    </DropdownBase>
  )
}

DropdownAutoComplete.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        title: PropTypes.string,
        startIcon: PropTypes.node,
        endIcon: PropTypes.node,
      }),
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          startIcon: PropTypes.node,
          endIcon: PropTypes.node,
        }),
      ),
      divider: PropTypes.shape({
        title: PropTypes.string,
        startIcon: PropTypes.node,
        endIcon: PropTypes.node,
      }),
    }),
  ),
  size: PropTypes.string,
  onSelect: PropTypes.func,
  inputProps: PropTypes.object,
  showType: PropTypes.bool,
  disabled: PropTypes.bool,
}

DropdownAutoComplete.defaultProps = {
  classes: {
    root: '',
    menu: '',
    input: '',
    inputContainer: '',
    content: '',
    listContainer: '',
    itemContainer: '',
    contentContainer: '',
    contentHeader: '',
    description: '',
    type: '',
    dividerContainer: '',
  },
  data: [],
  size: 'md',
  onSelect: () => {},
  inputProps: {},
  showType: false,
  disabled: false,
}

DropdownAutoComplete.displayName = 'DropdownAutoComplete'

export default DropdownAutoComplete
