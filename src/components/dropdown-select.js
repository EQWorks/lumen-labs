import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@headlessui/react'

import { DropdownBase } from '../base-components'
import { Chip } from '../'
import { Close, ValidationCheck, Delete } from '../icons'
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

const DropdownSelect = ({ 
  classes, 
  data, 
  button, 
  size, 
  setSelectedOption,
  onSelect, 
  onDelete,
  startIcon, 
  endIcon, 
  placeholder, 
  multiSelect, 
  limit,
  showType, 
  overflow, 
  disabled, 
  ...rest 
}) => {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState(setSelectedOption || [])
  const [selectLimit, setSelectLimit] = useState(limit || 0)
  const [open, setOpen] = useState(false)
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  
  const contentSize = _contentSize(size)
  const dropdownSelectClasses = Object.freeze({
    listContainer: `capitalize ${classes.listContainer}`,
    itemContainer: `text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 active:bg-neutral-200
      ${contentSize.contentContainer} ${classes.contentContainer}`,
    contentHeader: `w-full flex flex-row items-center justify-between cursor-pointer ${classes.contentHeader}`,
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
    button: classes.button,
    content: classes.content,
  })

  useEffect(() => {
    const initialOptions = []
    let length = 0

    data && data.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push(item)
        length++
      })
    })
    
    setSelectedOptions([])
    !limit && setSelectLimit(length)
    setOptions(initialOptions)
  }, [data])

  if (!componentIsActive && open) {
    setOpen(!open)
  }

  const onClickSelect = () => {
    setComponentIsActive((state) => !state)
    setOpen(!open)
  }

  const renderSelectedOptions = () => {
    let render = selectedOptions.title ? (<span className='mr-2.5 text-secondary-800'>{selectedOptions.title}</span>) : <></>

    if (multiSelect && selectedOptions.length) {
      render = (
        <>
          {selectedOptions.map((item, index) => {
            return (
              <div key={`chip-${index}`} className={`chip-container-${index} mr-2.5 z-10 ${contentSize.optionSize}`}>
                <Chip endIcon={<Close size='xs' onClick={(e) => onClickClose(e, item)}/>}>{item.title}</Chip>
              </div>
            )
          })}
        </>
      )
    }  

    return render
  }

  const renderList = (data) => (
    <>
      {data.map((item, index) => {
        return (
          <div 
            key={`item-container-${index}`} 
            className={`item-container-${index} ${dropdownSelectClasses.itemContainer}`} 
            onClick={() => handleOnClick(index, item)}
          >
            <div 
              className={`content-container-${index}
                ${dropdownSelectClasses.contentContainer}
                ${multiSelect ? 
            selectedOptions.includes(item) && dropdownSelectClasses.selected
            :
            selectedOptions === item && dropdownSelectClasses.selected
          } 
              `}
            >
              {renderListItem(item)}
              {item.description && <div className={`description-container-${index} ${dropdownSelectClasses.description}`}>{item.description}</div>}
            </div>
          </div>
        )
      })}
    </>
  )

  const renderListItem = (item) => {
    let selected = null

    if (multiSelect && size === 'lg' && selectedOptions.includes(item)) {
      selected = (
        <ValidationCheck size='lg'/>
      )
    }

    return (
      <div className={dropdownSelectClasses.contentHeader}>
        <div className='flex flex-row items-center'>
          {item.startIcon && <div className={dropdownSelectClasses.startIcon}>{item.startIcon}</div>}
          <span>{item.title || item.type}</span>
          {item.endIcon && <div className={dropdownSelectClasses.endIcon}>{item.endIcon}</div>}
        </div>
        {selected}
      </div>
    )
  }

  const handleOnClick = (i, value) => {
    if (multiSelect) {
      const currOptions = options
      const filterOptions = []

      if (selectedOptions.includes(value)) {
        let index = selectedOptions.indexOf(value)
        if (index !== -1) {
          selectedOptions.splice(index, 1)
          currOptions.push(value)
        }
      } else if (selectedOptions.length < selectLimit) {
        let index = options.indexOf(value)
        if (index !== -1) {
          currOptions.splice(index, 1)
          selectedOptions.push(value)
        }
      }

      currOptions.forEach((item) => {
        filterOptions.push(item)
      })

      setOptions(filterOptions)
    } else if (!multiSelect) {
      if (selectedOptions === value) {
        setSelectedOptions([])
      } else {
        setSelectedOptions(value)
        onClickSelect()
      }
    }
    onSelect({ ...value, i })
  }
  
  const onClickClose = (e, value) => {
    e.stopPropagation()
    handleOnClick('', value)
  }

  const onClickDelete = (e) => {
    e.stopPropagation()
    setSelectedOptions([])
    onDelete(e)
  }

  return (
    <DropdownBase 
      ref={ref}
      classes={dropdownClasses} 
      renderSelectedOptions={renderSelectedOptions}
      button={button}
      onClick={onClickSelect}
      open={open}
      size={size}
      startIcon={startIcon} 
      endIcon={!multiSelect && selectedOptions.title ? <Delete size={size} onClick={(e) => onClickDelete(e)}/>: endIcon}
      placeholder={placeholder}
      multiSelect={multiSelect} 
      overflow={overflow}
      disabled={disabled} 
      {...rest}
    >
      <ul>
        {data && data.map((el, index) => {
          return (
            <Menu.Item 
              as="li" 
              key={`list-container-${index}`} 
              className={`list-container-${index} ${dropdownSelectClasses.listContainer}`}
            >
              {showType && el.type && <label className={`type-container-${index} ${dropdownSelectClasses.type}`} htmlFor="span">{renderListItem(el.type)}</label>}
              {renderList(el.items)}
              {el.divider && <div className={`divider-container-${index} ${dropdownSelectClasses.dividerContainer}`}>{renderListItem(el.divider)}</div>}
            </Menu.Item>
          )
        })}
      </ul>
    </DropdownBase>
  )
}

DropdownSelect.propTypes = {
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
  button: PropTypes.node,
  size: PropTypes.string,
  setSelectedOption: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  multiSelect: PropTypes.bool,
  limit: PropTypes.number,
  showType: PropTypes.bool,
  overflow: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
}

DropdownSelect.defaultProps = {
  classes: {
    root: '',
    menu: '',
    button: '',
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
  button: null,
  size: 'md',
  onSelect: () => {},
  onDelete: () => {},
  startIcon: null,
  endIcon: null,
  placeholder: 'Select',
  multiSelect: false,
  showType: false,
  overflow: 'horizontal',
  disabled: false,
}

DropdownSelect.displayName = 'DropdownSelect'

export default DropdownSelect
