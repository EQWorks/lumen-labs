import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@headlessui/react'

import { DropdownBase } from '../base-components'
import { Chip } from '../'
import { Close, ValidationCheck, Delete } from '../icons'
import { useComponentIsActive } from '../hooks'
import clsx from 'clsx'


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
  uncontrolled,
  defaultValue,
  value,
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
  allowClear,
  simple, 
  ...rest 
}) => {
  const [options, setOptions] = useState([])
  const fallbackEmptyValue = useMemo(() => (
    multiSelect
      ? []
      : simple ? '' : {}
  ), [multiSelect, simple])
  const [selectedOptions, setSelectedOptions] = useState(defaultValue || value || fallbackEmptyValue)
  const [selectLimit, setSelectLimit] = useState(limit || 0)
  const [open, setOpen] = useState(false)
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()

  useEffect(() => {
    if (!uncontrolled) {
      setSelectedOptions(value || fallbackEmptyValue)
    }
  }, [fallbackEmptyValue, uncontrolled, value])

  const simpleData = useMemo(() => ([{ items: data.map(d => ({ title: d })) }]), [data])
  const simpleSelectedOptions = useMemo(() => (
    multiSelect
      ? selectedOptions.map(o => ({ title: o }))
      : { title: selectedOptions }
  ), [multiSelect, selectedOptions])

  const finalSelectedOptions = useMemo(() => simple ? simpleSelectedOptions : selectedOptions, [selectedOptions, simple, simpleSelectedOptions])
  const finalData = useMemo(() => simple ? simpleData : data, [data, simple, simpleData])

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
    selectedOptionTitle: `${classes.selectedOptionTitle ? classes.selectedOptionTitle : 'mr-2.5 text-secondary-800'}`,
  })

  const dropdownClasses = Object.freeze({
    root: classes.root,
    menu: `${!finalData.length > 0 && 'hidden'} ${classes.menu ? classes.menu : 'w-250px'}`,
    button: classes.button,
    content: classes.content,
  })

  useEffect(() => {
    let initialOptions = []
    let length = 0

    finalData?.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push(item)
        length++
      })
    })

    !limit && setSelectLimit(length)
    setOptions(initialOptions)
  }, [finalData])

  if (!componentIsActive && open) {
    setOpen(!open)
  }

  const onClickSelect = () => {
    setComponentIsActive((state) => !state)
    setOpen(!open)
  }

  const renderSelectedOptions = () => {
    if (multiSelect && finalSelectedOptions.length) {
      return (
        <>
          {
            finalSelectedOptions.map((item, index) => {
              return (
                <div key={`chip-${index}`} className={`chip-container-${index} mr-2.5 z-10 ${contentSize.optionSize}`}>
                  <Chip endIcon={<Close size='xs' onClick={(e) => onClickClose(e, item)} />}>{item.title}</Chip>
                </div>
              )
            })
          }
        </>
      )
    }  

    return finalSelectedOptions.title
      ? (<span className={dropdownSelectClasses.selectedOptionTitle}> {finalSelectedOptions.title}</span >)
      : <></>
  }

  const renderList = ({ items, type }) => (
    items.map((item, index) =>
      <div
        key={`item-container-${index}`}
        className={`item-container-${index} ${dropdownSelectClasses.itemContainer}`}
        onClick={() => handleOnClick(index, item, type)}
      >
        <div
          className={clsx(`content-container-${index} ${dropdownSelectClasses.contentContainer}`, {
            [dropdownSelectClasses.selected]: (multiSelect && finalSelectedOptions.some(({ title }) => title === item.title)) || finalSelectedOptions.title === item.title,
          },
          )}
        >
          {renderListItem(item)}
          {item.description && <div className={`description-container-${index} ${dropdownSelectClasses.description}`}>{item.description}</div>}
        </div>
      </div>,
    )
  )

  const renderListItem = (item) => {
    let selected = null

    if (multiSelect && size === 'lg' && finalSelectedOptions.some(({ title }) => title === item.title)) {
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

  const handleOnClick = (i, value, type) => {
    let newSelectedOptions = []
    if (multiSelect) {
      newSelectedOptions = finalSelectedOptions
      const currOptions = options
      const filterOptions = []

      const index = finalSelectedOptions.findIndex(({ title }) => title === value.title)
      if (index != -1) {
        newSelectedOptions.splice(index, 1)
        currOptions.push(value)
      } else if (finalSelectedOptions.length < selectLimit) {
        let index = options.map(({ title }) => title).indexOf(value.title)
        if (index !== -1) {
          currOptions.splice(index, 1)
          newSelectedOptions.push({ ...value, type: type || null, i })
        }
      }

      currOptions.forEach((item) => {
        filterOptions.push(item)
      })

      setOptions(filterOptions)
    } else if (!multiSelect) {
      if (finalSelectedOptions.title === value.title) {
        newSelectedOptions = []
      } else {
        newSelectedOptions = { ...value, type: type || null, i }
        onClickSelect()
      }
    }
    if (simple) {
      const simplified = multiSelect
        ? newSelectedOptions.map(({ title }) => title)
        : newSelectedOptions.title
      setSelectedOptions(simplified)
      onSelect(simplified)
    } else {
      setSelectedOptions(newSelectedOptions)
      onSelect({ ...newSelectedOptions, i })
    }
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
      endIcon={
        !multiSelect && finalSelectedOptions.title
          ? (
            allowClear
              ? <Delete size={size} onClick={(e) => onClickDelete(e)} />
              : null
          )
          : endIcon
      }
      placeholder={placeholder}
      multiSelect={multiSelect} 
      overflow={overflow}
      disabled={disabled} 
      {...rest}
    >
      <ul>
        {finalData && finalData.map((el, index) => {
          return (
            <Menu.Item 
              as="li" 
              key={`list-container-${index}`} 
              className={`list-container-${index} ${dropdownSelectClasses.listContainer}`}
            >
              {showType && el.type && <label className={`type-container-${index} ${dropdownSelectClasses.type}`} htmlFor="span">{renderListItem(el.type)}</label>}
              {renderList(el)}
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
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
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
  ]),
  button: PropTypes.node,
  size: PropTypes.string,
  uncontrolled: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
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
  allowClear: PropTypes.bool,
  simple: PropTypes.bool,
}

DropdownSelect.defaultProps = {
  classes: {
    root: '',
    menu: '',
    button: '',
    content: '',
    selectedOptionTitle: '',
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
  uncontrolled: false,
  onSelect: () => {},
  onDelete: () => {},
  startIcon: null,
  endIcon: null,
  placeholder: 'Select',
  multiSelect: false,
  showType: false,
  overflow: 'horizontal',
  disabled: false,
  allowClear: true,
  simple: false,
}

DropdownSelect.displayName = 'DropdownSelect'

export default DropdownSelect
