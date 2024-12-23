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
  classes = {
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
  data = [],
  size = 'md',
  value,
  onSelect = () => {},
  onDelete = () => {},
  inputProps = {},
  showType = false,
  disabled = false,
  ...rest
}) => {
  const [options, setOptions] = useState(data)
  const [selectedOptions, setSelectedOptions] = useState(value || {})
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState(value ? value.title : '')
  const [filteredOptions, setFilteredOptions] = useState([])
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  const contentSize = _contentSize(size)

  const dropdownAutoCompleteClasses = Object.freeze({
    listContainer: `dropdown-auto-complete__list-container capitalize ${classes.listContainer}`,
    itemContainer: `dropdown-auto-complete__item-container text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `dropdown-auto-complete__content-container px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 active:bg-neutral-200
      ${contentSize.contentContainer} ${classes.contentContainer}`,
    contentHeader: `dropdown-auto-complete__content-header w-full flex flex-row items-center justify-between ${classes.contentHeader}`,
    type: `dropdown-auto-complete__type-container px-5px flex items-center font-semibold text-secondary-400 ${contentSize.type} ${classes.type}`,
    description: `dropdown-auto-complete__description-container pt-5px font-normal text-secondary-500 ${contentSize.description} ${classes.description}`,
    dividerContainer: `dropdown-auto-complete__divider-container px-2.5 flex flex-row items-center font-bold text-secondary-600 border-t border-secondary-300 cursor-pointer 
      ${contentSize.dividerContainer} ${classes.dividerContainer}`,
    startIcon: 'dropdown-auto-complete__start-icon-container mr-2.5 fill-current stroke-current',
    endIcon: 'dropdown-auto-complete__end-icon-container ml-2.5 fill-current stroke-current',
    selected: 'dropdown-auto-complete__selected font-semibold text-secondary-900 bg-interactive-100 hover:text-secondary-900 hover:bg-interactive-100',
  })

  const dropdownClasses = Object.freeze({
    root: `dropdown-auto-complete__root-container ${classes.root}`,
    menu: `dropdown-auto-complete__menu-container ${!data.length > 0 && 'hidden'} ${classes.menu ? classes.menu : 'w-250px'}`,
    content: `dropdown-auto-complete__main-container ${classes.content}`,
  })

  const textFieldClasses =  Object.freeze({
    container: `dropdown-auto-complete__input-contaienr ${classes.inputContainer}`,
    input: `dropdown-auto-complete__input capitalize ${classes.input}`,
  })

  useEffect(() => {
    const initialOptions = []

    data && data.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push({ ...item, type: el.type && el.type.title })
      })
    })

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
                ${selectedOptions.title === item.title && dropdownAutoCompleteClasses.selected} 
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
    if (selectedOptions && selectedOptions.title === value.title) {
      setSelectedOptions([])
      setUserInput('')
    } else {
      setSelectedOptions(value)
      setUserInput(value.title)
      onClickSelect()
    }

    onSelect({ ...value, i })
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

    if (val) {
      setOpen(true)
      setComponentIsActive(true)
    }

    setFilteredOptions(filteredSuggestions)
    setUserInput(val)
  }

  const onClickDelete = (e) => {
    onDelete(e)
  }

  const autoComplete = (
    <TextField
      classes={textFieldClasses}
      size={size}
      value={userInput}
      onClick={onClickSelect}
      onChange={onChange}
      onDelete={onClickDelete}
      inputProps={inputProps}
      disabled={disabled}
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
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  inputProps: PropTypes.object,
  showType: PropTypes.bool,
  disabled: PropTypes.bool,
}

DropdownAutoComplete.displayName = 'DropdownAutoComplete'

export default DropdownAutoComplete
