import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { DropdownSelect, TextField, makeStyles } from '..'
import { useComponentIsActive } from '../hooks'


const DropdownMultiSearch = ({
  classes = {
    textFieldRoot: '',
    textFieldInput: '',
    textFieldContainer: '',
    dropdownRoot: '',
    dropdownButton: '',
    dropdownContent: '',
    dropdownInnerButton: '',
  },
  data = [],
  size = 'md',
  defaultValue = '',
  value = '',
  onSearch = () => {},
  onClick = () => {},
  onSelect = () => {},
  onDelete = () => {},
  startIcon = null,
  endIcon = null,
  placeholder = 'Select',
  overflow = 'vertical',
  disabled = false,
  onOpenClose = () => {},
  noOptionsMessage = '',
  ...rest
}) => {
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  const [searchTerm, setSearchTerm] = useState('')
  const [openMenu, setOpenMnu] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(data || [])
  const [selectedFilters, setSelectedFilters] = useState([])
  const [refocus, setRefocus] = useState(false)

  const defaultOption = 'any value'
  const displayValue = selectedFilters?.length ? selectedFilters.join(' or ') : defaultOption
  const inputPlaceholder = openMenu ? 'Type to search' : `is ${displayValue}`

  const styles = makeStyles({
    root: {
      position: 'relative',
      '.dropdown-multi-search-textfield-root': {
        height: '2.35rem',
      },
      '.dropdown-multi-search-textfield-input': {
        cursor: openMenu ? 'text' : 'pointer',
        caretColor: openMenu ? '#000000' : 'transparent',
        '&::placeholder': {
          color: openMenu || displayValue === defaultOption ? '#C8C8C8' : '#000000',
        },
      },
      '.dropdown-multi-search-textfield-container': {},
      '.dropdown-multi-search-dropdown-root':{
        position: 'absolute',
        display: 'block',
        top: '125%',
        zIndex: 1,
      },
      '.dropdown-multi-search-dropdown-root-close': {
        display: 'none',
      },
      '.dropdown-multi-search-dropdown-inner-button': {
        fontSize: '0.8rem',
        padding: '0.2rem 0',
        textTransform: 'none',
        textWrap: 'wrap',
        textAlign: 'start',
        '.chip__content-container': {
          textTransform: 'none',
        },
      },
      '.dropdown-multi-search-dropdown-button': {
        minWidth: '15.6rem',
        borderColor: '#C8C8C8',
        boxShadow: 'none',
        cursor: 'default',
      },
      '.dropdown-multi-search-dropdown-content': {
        '.end-icon': {
          display: 'none',
        },
      },
    },
  })

  const handleSearch = (value) => {
    onSearch(value)
    const filtered = value ? data.filter(option =>
      option.toLowerCase().includes(value.toLowerCase()),
    ) : data
    setSearchTerm(value)
    setFilteredOptions(filtered)
  }

  const handleOnClick = () => {
    onClick()
    setComponentIsActive( (state) => !state)
    setOpenMnu(!openMenu)
  }

  const handleOnSelect = (_, selected) => {
    onSelect(selected)
    setSelectedFilters(selected)
    setFilteredOptions(data)
    setSearchTerm('')
    setRefocus(true)
  }

  useEffect(() => {
    setFilteredOptions(data)
  }, [data])

  if (!componentIsActive && openMenu) {
    setOpenMnu(false)
    setSearchTerm('')
    setFilteredOptions(data)
    setRefocus(false)
  }

  return (
    <div className={styles.root} ref={ref}>
      <TextField
        onChange={handleSearch}
        onClick={handleOnClick}
        inputProps={{ placeholder: inputPlaceholder }}
        classes={{
          root: `dropdown-multi-search-textfield-root ${classes.textFieldRoot}`,
          input: `dropdown-multi-search-textfield-input ${classes.textFieldInput}`,
          container: `dropdown-multi-search-textfield-container ${classes.textFieldContainer}`,
        }}
        value={searchTerm}
        refocus={refocus}
        size={size}
        disabled={disabled}
      />
      <DropdownSelect
        simple
        multiSelect={true}
        classes={{
          root: `${openMenu ? 'dropdown-multi-search-dropdown-root' : 'dropdown-multi-search-dropdown-root-close'} ${classes.dropdownRoot}`,
          button: `dropdown-multi-search-dropdown-button ${classes.dropdownButton}`,
          content: `dropdown-multi-search-dropdown-content ${classes.dropdownContent}`,
          innerButton: `dropdown-multi-search-dropdown-inner-button ${classes.dropdownInnerButton}`,
        }}
        data={filteredOptions?.length > 600 ? [...data.slice(0, 300), ...data.slice(-300)] : filteredOptions}
        placeholder={placeholder}
        onSelect={handleOnSelect}
        overflow={overflow}
        alwaysOpen={true}
        disabled={disabled}
        noOptionsMessage={noOptionsMessage? noOptionsMessage : `No values match "${searchTerm}"`}
        limit={data?.length}
        size={size}
        defaultValue={defaultValue}
        value={value}
        onDelete={onDelete}
        startIcon={startIcon}
        endIcon={endIcon}
        onOpenClose={onOpenClose}
        {...rest}
      />
    </div>
  )
}

DropdownMultiSearch.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.array,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  onSearch: PropTypes.func,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onOpenClose: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  overflow: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
  noOptionsMessage: PropTypes.string,
}

DropdownMultiSearch.displayName = 'DropdownMultiSearch'

export default DropdownMultiSearch
