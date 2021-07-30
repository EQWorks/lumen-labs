import React, { useState, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { DropdownBase } from '../base-components'
import { Chip } from '../'
import { Close } from '../icons'


const DropdownSelect = forwardRef(({ classes, data, startIcon, endIcon, multiSelect, selectable, ...rest }, ref) => {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])

  const dropdownSelectClasses = Object.freeze({
    listContainer: 'capitalize',
    itemContainer: 'py-5px text-secondary-600',
    contentContainer: 'hover:bg-neutral-100 hover:text-secondary-800 cursor-pointer',
    type: 'px-5px py-2.5 flex items-center text-secondary-400',
    title: clsx('px-2.5 py-5px flex items-center cursor-pointer'),
    description: 'px-2.5 pb-5px text-secondary-600 text-xs',
    startIcon: 'mr-2.5 fill-current stroke-current',
    endIcon: 'ml-2.5 fill-current stroke-current',
  })

  useEffect(() => {
    const initialOptions = []

    data.forEach((el) => {
      el.items.forEach((item) => {
        initialOptions.push(item)
      })
    })

    setOptions(initialOptions)
  }, [data])

  const renderListItem = (item, startIcon, endIcon) => {
    return (
      <>
        {startIcon && <div className={dropdownSelectClasses.startIcon}>{startIcon}</div>}
        <span>{item}</span>
        {endIcon && <div className={dropdownSelectClasses.endIcon}>{endIcon}</div>}
      </>
    )
  }

  const renderOptions = () => {
    let render = selectedOptions.title ? selectedOptions.title : ''

    if (multiSelect) {
      render = (
        selectedOptions.map((item, index) => {
          return (
            <div key={`chip-${index}`} className='mr-2.5 mb-5px z-10'>
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
          currOptions.splice(index, 1);
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
    e.stopPropagation();
    handleOnClick(value)
  }

  return (
    <DropdownBase ref={ref} renderOptions={renderOptions} startIcon={startIcon} endIcon={endIcon} disabled={!selectable} {...rest}>
      <ul>
        {data.map((el, index) => {
          return (
            <li key={`list-container-${index}`} className={dropdownSelectClasses.listContainer}>
                {el.type && <label className={dropdownSelectClasses.type} htmlFor="span">{renderListItem(el.type, el.startIcon, el.endIcon)}</label>}
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
                            selectedOptions.includes(item) && 'bg-interactive-100 hover:bg-interactive-100'
                            :
                            selectedOptions === item && 'bg-interactive-100 hover:bg-interactive-100'
                          } 
                        `}
                      >
                        <label className={dropdownSelectClasses.title} htmlFor="span">{renderListItem(item.title, item.startIcon, item.endIcon)}</label>
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
  data: PropTypes.array,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  multiSelect: PropTypes.bool,
  selectable: PropTypes.bool,
}

DropdownSelect.defaultProps = {
  classes: {},
  data: [
    {
      type: '',
      startIcon: '',
      endIcon: '',
      items: [
        {
          title: '',
          description: '',
          startIcon: '',
          endIcon: '',
        },
      ]
    }
  ],
  onClick: () => {},
  startIcon: null,
  endIcon: null,
  multiSelect: false,
  selectable: true,
}

DropdownSelect.displayName = 'DropdownSelect'

export default DropdownSelect
