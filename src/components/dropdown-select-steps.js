import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@headlessui/react'

import { DropdownBase } from '../base-components'
import { ArrowLeft, ValidationCheck } from '../icons'


const _contentSize = (size) => {
  let contentSize = ''

  switch(size) {
  case 'lg':
    contentSize = {
      itemContainer: 'py-5px',
      contentContainer: 'py-5px',
      type: 'py-2.5',
      dividerContainer: 'pt-3.5 pb-2.5',
    }
    break
  case 'md':
    contentSize = {
      itemContainer: 'py-3px',
      contentContainer: 'py-3px',
      type: 'py-1.5',
      dividerContainer: 'pt-2 pb-1.5',
    }
    break
  default:
    break
  }

  return contentSize
}

const DropdownSelectSteps = ({
  classes = {
    root: '',
    menu: '',
    button: '',
    content: '',
    listContainer: '',
    itemContainer: '',
    contentContainer: '',
    contentHeader: '',
    type: '',
    dividerContainer: '',
  },
  data = [],
  button = null,
  size = 'md',
  onSelect = () => {},
  startIcon = null,
  endIcon = null,
  placeholder = 'Select',
  showType = true,
  showDivider = true,
  disabled = false,
  ...rest
}) => {
  const [options, setOptions] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState('')
  const [categoryData, setCategoryData] = useState('')
  const [subCategoryData, setSubCategoryData] = useState('')

  const contentSize = _contentSize(size)
  const dropdownSelectStepsClasses = Object.freeze({
    listContainer: `dropdown-select-steps__list-container w-250px h-auto focus:outline-none ${classes.listContainer}`,
    itemContainer: `dropdown-select-steps__item-container text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `dropdown-select-steps__content-container px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 active:bg-neutral-200 
      ${contentSize.contentContainer} ${classes.contentContainer}`,
    contentHeader: `dropdown-select-steps__content-header w-full flex flex-row items-center justify-between cursor-pointer ${classes.contentHeader}`,
    type: `dropdown-select-steps__type-container px-5px flex items-center font-semibold text-secondary-400 ${contentSize.type} ${classes.type}`,
    dividerContainer: `dropdown-select-steps__divider-container px-2.5 flex flex-row items-center font-bold text-secondary-600 border-t border-secondary-300 cursor-pointer 
      ${contentSize.dividerContainer} ${classes.dividerContainer}`,
    startIcon: 'dropdown-select-steps__start-icon-container mr-2.5 fill-current stroke-current',
    endIcon: 'dropdown-select-steps__end-icon-container ml-2.5 fill-current stroke-current',
    selected: 'dropdown-select-steps__selected font-semibold text-secondary-900 bg-interactive-100 hover:text-secondary-900 hover:bg-interactive-100',
    category: `dropdown-select-steps__category-container ${categoryData.items && 'hidden'}`,
    subCategory: `dropdown-select-steps__subcategory-container ${subCategoryData.items && 'hidden'}`,
  })

  const dropdownClasses = Object.freeze({
    root: `dropdown-select-steps__root-container ${classes.root}`,
    menu: `dropdown-select-steps__menu-container w-auto mt-5px flex flex-row ${!data.length > 0 && 'hidden'} ${classes.menu}`,
    button: `dropdown-select-steps__button-container ${classes.container}`,
    content: `dropdown-select-steps__main-container ${classes.content}`,
  })

  useEffect(() => {
    setOptions(data)
  }, [data])

  const onClickSelect = () => {
    setOpen(!open)
  }

  const renderSelectedOptions = () => (
    <>
      {categoryData.title ?
        (<span className='mr-2.5 text-secondary-800'>
          {`${categoryData.title} ${subCategoryData && `> ${subCategoryData.title}`} ${selectedOptions && `> ${selectedOptions.title}`}`}
        </span>)
        :
        ''
      }
    </>
  )

  const handleCategoryOnClick = (value, index) => {
    if (categoryData === value) {
      setCategoryData('')
      setSubCategoryData('')
      setSelectedOptions('')
    } else {
      setCategoryData(value)
      !value.items && setOpen(!open)
      onSelect({ ...value, index })
    }
  }

  const handleSubCategoryOnClick = (value, index) => {
    const selectedItem = {
      type: categoryData.type,
      title: categoryData.title,
      item: value,
      index,
    }

    if (subCategoryData === value) {
      setSubCategoryData('')
      setSelectedOptions('')
    } else {
      setSubCategoryData(value)
      !value.items && setOpen(!open)
      onSelect(selectedItem)
    }
  }

  const handleItemOnClick = (value, index) => {
    const selectedItem = {
      type: categoryData.type,
      title: categoryData.title,
      item: {
        type: subCategoryData.type,
        title: subCategoryData.title,
        subItem: value,
        index,
      },
    }

    if (selectedOptions === value) {
      setSelectedOptions('')
    } else {
      setSelectedOptions(value)
      setOpen(!open)
      onSelect(selectedItem)
    }
  }

  const renderList = (data, type) => {
    let handleOnClick = ''
    let selectedData = ''

    switch(type) {
    case 'category':
      handleOnClick = handleCategoryOnClick
      selectedData = categoryData
      break
    case 'subcategory':
      handleOnClick = handleSubCategoryOnClick
      selectedData = subCategoryData
      break
    case 'item':
      handleOnClick = handleItemOnClick
      selectedData = selectedOptions
      break
    default:
      break
    }

    return (
      <>
        { data.map((item, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              className={`item-container-${index} ${dropdownSelectStepsClasses.itemContainer}`}
              onClick={() => handleOnClick(item, index)}
            >
              <div className={`content-container-${index}
                ${dropdownSelectStepsClasses.contentContainer} 
                ${Object.values(selectedData).includes(item.title) && dropdownSelectStepsClasses.selected}
              `}>
                {renderListItem(item, selectedData)}
              </div>
            </Menu.Item>
          )
        })}
      </>
    )
  }


  const renderListItem = (item, selectedData) => {
    let selected = ''

    if (!item.items && Object.values(selectedData).includes(item.title)) {
      selected = (
        <ValidationCheck size={size}/>
      )
    }

    return (
      <div className={dropdownSelectStepsClasses.contentHeader}>
        <div className='flex flex-row items-center'>
          {item.startIcon && <div className={dropdownSelectStepsClasses.startIcon}>{item.startIcon}</div>}
          <span>{item.title || item.type}</span>
          {item.endIcon && <div className={dropdownSelectStepsClasses.endIcon}>{item.endIcon}</div>}
        </div>
        {selected}
      </div>
    )
  }

  return (
    <DropdownBase
      classes={dropdownClasses}
      renderSelectedOptions={renderSelectedOptions}
      button={button}
      onClick={onClickSelect}
      open={open}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      placeholder={placeholder}
      disabled={disabled}
      {...rest}
    >
      <ul className={`capitalize ${dropdownSelectStepsClasses.listContainer} ${dropdownSelectStepsClasses.category}`}>
        { options && renderList(options, 'category') }
      </ul>
      { categoryData.items &&
        <ul className={`${dropdownSelectStepsClasses.listContainer} ${dropdownSelectStepsClasses.subCategory}`}>
          {showType && categoryData.type &&
          <label className={`capitalize ${dropdownSelectStepsClasses.type}`} htmlFor="span">
            {renderListItem(categoryData)}
          </label>}
          { renderList(categoryData.items, 'subcategory') }
          {showDivider && categoryData.type &&
          <div
            className={`capitalize ${dropdownSelectStepsClasses.dividerContainer}`}
            onClick={() => handleCategoryOnClick(categoryData)}
          >
            <ArrowLeft className={dropdownSelectStepsClasses.startIcon} size={size}/>
            <span>{categoryData.type}</span>
          </div>}
        </ul>
      }
      { subCategoryData.items &&
        <ul className={dropdownSelectStepsClasses.listContainer}>
          {showType && categoryData.type &&
          <label className={dropdownSelectStepsClasses.type} htmlFor="span">
            {renderListItem(subCategoryData)}
          </label>}
          { renderList(subCategoryData.items, 'item') }
          {showDivider && subCategoryData.type &&
          <div
            className={dropdownSelectStepsClasses.dividerContainer}
            onClick={() => handleSubCategoryOnClick(subCategoryData)}
          >
            <ArrowLeft className={dropdownSelectStepsClasses.startIcon} size={size}/>
            <span>{subCategoryData.type}</span>
          </div>}
        </ul>
      }
    </DropdownBase>
  )
}

DropdownSelectSteps.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      startIcon: PropTypes.node,
      endIcon: PropTypes.node,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          title: PropTypes.string,
          startIcon: PropTypes.node,
          endIcon: PropTypes.node,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string,
              startIcon: PropTypes.node,
              endIcon: PropTypes.node,
            }),
          ),
        }),
      ),
    }),
  ),
  button: PropTypes.node,
  size: PropTypes.string,
  onSelect: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  showType: PropTypes.bool,
  showDivider: PropTypes.bool,
  disabled: PropTypes.bool,
}

DropdownSelectSteps.displayName = 'DropdownSelectSteps'

export default DropdownSelectSteps
