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
      optionSize: 'pb-9px',
      itemContainer: 'py-5px',
      contentContainer: 'py-5px',
      type: 'py-2.5',
      description: 'text-xs',
    }
    break
  case 'md':
    contentSize = {
      optionSize: 'pb-5px',
      itemContainer: 'py-3px',
      contentContainer: 'py-3px',
      type: 'py-1.5',
      description: 'text-11px',
    }
    break
  default:
    break
  }
  
  return contentSize
}

const DropdownSelect = forwardRef(({ classes, data, size, startIcon, endIcon, multiSelect, disabled, ...rest }, ref) => {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])

  const contentSize = _contentSize(size)
  const dropdownSelectClasses = Object.freeze({
    listContainer: `capitalize ${classes.listContainer}`,
    itemContainer: `text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 ${contentSize.contentContainer} ${classes.contentContainer}`,
    contentHeader: `w-full flex flex-row items-center justify-between ${classes.contentHeader}`,
    type: `px-5px flex items-center text-secondary-400 ${contentSize.type} ${classes.type}`,
    title: `flex items-center cursor-pointer ${classes.title}`,
    description: `pt-5px text-secondary-500 ${contentSize.description} ${classes.description}`,
    startIcon: 'mr-2.5 fill-current stroke-current',
    endIcon: 'ml-2.5 fill-current stroke-current',
  })

  useEffect(() => {
    const initialOptions = []

    data && data.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push(item)
      })
    })

    setOptions(initialOptions)
  }, [data])

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

  const renderOptions = () => {
    let render = selectedOptions.title ? (<span className='mr-2.5'>{selectedOptions.title}</span>) : ''

    if (multiSelect && selectedOptions.length) {
      render = (
        selectedOptions.map((item, index) => {
          return (
            <div key={`chip-${index}`} className={`mr-2.5 z-10 ${contentSize.optionSize}`}>
              <Chip endIcon={<Close size='xs' onClick={(e) => onClickClose(e, item)}/>}>{item.title}</Chip>
            </div>
          )
        })
      )
    }  

    return (
      <>
        {render}
      </>
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
      }
    }
  }

  const onClickClose = (e, value) => {
    e.stopPropagation()
    handleOnClick(value)
  }
  
  return (
    <DropdownBase 
      ref={ref} 
      size={size}
      renderOptions={renderOptions} 
      startIcon={startIcon} 
      endIcon={endIcon}
      multiSelect={multiSelect} 
      disabled={disabled} 
      {...rest}
    >
      <ul>
        {data && data.map((el, index) => {
          return (
            <li key={`list-container-${index}`} className={dropdownSelectClasses.listContainer}>
              {el.type && <label className={dropdownSelectClasses.type} htmlFor="span">{renderListItem(el.type)}</label>}
              { el.items.map((item, index) => {
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
                    selectedOptions.includes(item) && 
                              'bg-interactive-100 hover:bg-interactive-100 text-secondary-900 hover:text-secondary-900'
                    :
                    selectedOptions === item && 
                              'bg-interactive-100 hover:bg-interactive-100 text-secondary-900 hover:text-secondary-900'
                  } 
                        `}
                    >
                      <label className={dropdownSelectClasses.title} htmlFor="span">
                        {renderListItem(item)}
                      </label>
                      {item.description && <div className={dropdownSelectClasses.description}>{item.description}</div>}
                    </div>
                  </div>
                )
              })}
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
    }),
  ),
  size: PropTypes.string,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  multiSelect: PropTypes.bool,
  disabled: PropTypes.bool,
}

DropdownSelect.defaultProps = {
  classes: {
    listContainer: '',
    itemContainer: '',
    contentContainer: '',
    contentHeader: '',
    type: '',
    title: '',
    description: '',
  },
  data: [],
  size: 'md',
  onClick: () => {},
  startIcon: null,
  endIcon: null,
  multiSelect: false,
  disabled: false,
}

DropdownSelect.displayName = 'DropdownSelect'

export default DropdownSelect