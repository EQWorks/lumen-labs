import React, { useState, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DropdownBase } from '../base-components'
import { Chip } from '../'
import { Close, ValidationCheck } from '../icons'


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

const DropdownSelect = forwardRef(({ 
  classes, 
  data, 
  button, 
  size, 
  onSelect, 
  startIcon, 
  endIcon, 
  placeholder, 
  multiSelect, 
  showType, 
  overflow, 
  disabled, 
  ...rest 
}, ref) => {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [open, setOpen] = useState(false)

  const contentSize = _contentSize(size)
  const dropdownSelectClasses = Object.freeze({
    listContainer: `capitalize ${classes.listContainer}`,
    itemContainer: `text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 
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
    dropdown: `${!data.length > 0 && 'hidden'} ${classes.dropdown ? classes.dropdown : 'w-full'}`,
    container: classes.container,
    content: classes.content,
  })

  useEffect(() => {
    const initialOptions = []

    data && data.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push(item)
      })
    })
    setSelectedOptions([])
    setOptions(initialOptions)
  }, [data])

  const onClickSelect = () => {
    setOpen(!open)
  }

  const renderSelectedOptions = () => {
    let render = selectedOptions.title ? (<span className='mr-2.5 text-secondary-800'>{selectedOptions.title}</span>) : <></>

    if (multiSelect && selectedOptions.length) {
      render = (
        <>
          {selectedOptions.map((item, index) => {
            return (
              <div key={`chip-${index}`} className={`mr-2.5 z-10 ${contentSize.optionSize}`}>
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
            className={dropdownSelectClasses.itemContainer} 
            onClick={() => handleOnClick(item)}
          >
            <div 
              className={`
                ${dropdownSelectClasses.contentContainer}
                ${multiSelect ? 
            selectedOptions.includes(item) && dropdownSelectClasses.selected
            :
            selectedOptions === item && dropdownSelectClasses.selected
          } 
              `}
            >
              {renderListItem(item)}
              {item.description && <div className={dropdownSelectClasses.description}>{item.description}</div>}
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

  const handleOnClick = (value) => {
    if (multiSelect) {
      const currOptions = options
      const filterOptions = []

      if (selectedOptions.includes(value)) {
        let index = selectedOptions.indexOf(value)
        if (index !== -1) {
          selectedOptions.splice(index, 1)
          currOptions.push(value)
        }
      } else {
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
    } else {
      if (selectedOptions === value) {
        setSelectedOptions([])
      } else {
        setSelectedOptions(value)
        setOpen(!open)
      }
    }
    onSelect(value)
  }
  
  const onClickClose = (e, value) => {
    e.stopPropagation()
    handleOnClick(value)
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
      endIcon={endIcon}
      placeholder={placeholder}
      multiSelect={multiSelect} 
      overflow={overflow}
      disabled={disabled} 
      {...rest}
    >
      <ul>
        {data && data.map((el, index) => {
          return (
            <li key={`list-container-${index}`} className={dropdownSelectClasses.listContainer}>
              {showType && el.type && <label className={dropdownSelectClasses.type} htmlFor="span">{renderListItem(el.type)}</label>}
              {renderList(el.items)}
              {el.divider && <div className={dropdownSelectClasses.dividerContainer}>{renderListItem(el.divider)}</div>}
            </li>
          )
        })}
      </ul>
    </DropdownBase>
  )
})

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
  onSelect: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  multiSelect: PropTypes.bool,
  showType: PropTypes.bool,
  overflow: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
}

DropdownSelect.defaultProps = {
  classes: {
    dropdown: '',
    container: '',
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
