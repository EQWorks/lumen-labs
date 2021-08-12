import React, { useState, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'

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

const DropdownSelectSteps = forwardRef(({ 
  classes, 
  data, 
  button, 
  size, 
  onSelect, 
  startIcon, 
  endIcon, 
  placeholder, 
  showType, 
  showDivider, 
  disabled, 
  ...rest 
}, ref) => {
  const [options, setOptions] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState('')
  const [categoryData, setCategoryData] = useState('')
  const [subCategoryData, setSubCategoryData] = useState('')

  const contentSize = _contentSize(size)
  const dropdownSelectStepsClasses = Object.freeze({
    listContainer: `w-250px h-auto ${classes.listContainer}`,
    itemContainer: `text-secondary-600 ${contentSize.itemContainer}`,
    contentContainer: `px-2.5 cursor-pointer hover:bg-neutral-100 hover:text-secondary-800 ${contentSize.contentContainer} ${classes.contentContainer}`,
    contentHeader: `w-full flex flex-row items-center justify-between cursor-pointer ${classes.contentHeader}`,
    type: `px-5px flex items-center font-semibold text-secondary-400 ${contentSize.type} ${classes.type}`,
    dividerContainer: `px-2.5 flex flex-row items-center font-bold text-secondary-600 border-t border-secondary-300 cursor-pointer 
      ${contentSize.dividerContainer} ${classes.dividerContainer}`,
    startIcon: 'mr-2.5 fill-current stroke-current',
    endIcon: 'ml-2.5 fill-current stroke-current',
    selected: 'font-semibold text-secondary-900 bg-interactive-100 hover:text-secondary-900 hover:bg-interactive-100',
    category: `${categoryData.items && 'hidden'}`,
    subCategory: `${subCategoryData.items && 'hidden'}`,
  })

  const dropdownClasses = Object.freeze({
    dropdown: `w-auto mt-5px flex flex-row ${!data.length > 0 && 'hidden'} ${classes.dropdown}`,
    container: classes.container,
    content: classes.content,
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
            <li 
              key={index} 
              className={dropdownSelectStepsClasses.itemContainer} 
              onClick={() => handleOnClick(item, index)}
            >
              <div className={`
                ${dropdownSelectStepsClasses.contentContainer} 
                ${Object.values(selectedData).includes(item.title) && dropdownSelectStepsClasses.selected}
              `}>
                {renderListItem(item, selectedData)}
              </div>  
            </li>
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
})

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

DropdownSelectSteps.defaultProps = {
  classes: {
    dropdown: '',
    container: '',
    content: '',
    listContainer: '',
    itemContainer: '',
    contentContainer: '',
    contentHeader: '',
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
  showType: true,
  showDivider: true,
  disabled: false,
}

DropdownSelectSteps.displayName = 'DropdownSelectSteps'

export default DropdownSelectSteps
