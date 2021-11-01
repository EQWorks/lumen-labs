import React, { forwardRef, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { DialogBase } from '../../base-components'
import { ArrowUpDown } from '../../icons'

import './dropdown-auto-center.css'


const DropdownAutoCenter = forwardRef(({ 
  classes, 
  data,
  onSelect,
  setSelectedOption,
  ...rest
}, ref) => {
  const dialogClasses = Object.freeze({
    root: 'min-w-5 min-h-5',
  })

  const dropdownClasses = Object.freeze({
    dropdownButton: `min-w-10 px-1.5 py-0.5 flex items-center text-interactive-500 cursor-pointer rounded-sm shadow-light-10
      ${classes.dropdownButton && classes.dropdownButton}`,
    dropdownMenu: `min-w-10 relative rounded-sm shadow-light-10 bg-secondary-50 ${classes.dropdownMenu && classes.dropdownMenu}`,
    dropdownItem: `rows-selection flex px-1.5 py-0.5 cursor-pointer rounded-sm text-secondary-600
      hover:bg-secondary-50 hover:text-secondary-800 hover:shadow-light-10 hover:shadow-none
      ${classes.dropdownItem && classes.dropdownItem}`,
  })

  const [open, setOpen] = useState(false)
  const [dropdownOffsetTop, setDropdownOffsetTop] = useState(0)
  const [active, setActive] = useState(setSelectedOption || '')
  const dropdownRef = useRef(null)

  useEffect(() => {
    dropdownRef.current && dropdownRef.current.childNodes.forEach((node) => {
      if (node.innerText === active.title.toString()) {
        setDropdownOffsetTop(node.offsetTop + node.clientHeight)
      }
    })
  }, [open])

  const handleSelectRowsOnClick = () => {
    setOpen(!open)
  }

  const onSelectRowOptions = (item) => {
    setOpen(!open)
    onSelect(item)
  }

  const dropdownButton = (
    <div className={dropdownClasses.dropdownButton}>
      <span className='mr-1'>
        {active.title}
      </span>
      <ArrowUpDown size='sm'/>
    </div>
  )

  return (
    <DialogBase classes={dialogClasses} open={open} button={dropdownButton} onClick={handleSelectRowsOnClick}>
      <ul 
        ref={el => dropdownRef.current = el} 
        className={dropdownClasses.dropdownMenu}
        style={{ top: `-${dropdownOffsetTop}px` }}
      >
        {data.map((item, index) => {
          return (
            <li 
              key={index} 
              className={`${dropdownClasses.dropdownItem} ${item.title.toString() === active.title.toString() && 'text-interactive-500'}`} 
              onClick={() => onSelectRowOptions(item)}
              onPointerDown={() => setActive(item)}
            >
              {item.title}
            </li>
          )
        })}
      </ul>
    </DialogBase>
  )
})

DropdownAutoCenter.propTypes = {
  classes: PropTypes.exact({
    root: PropTypes.string,
    button: PropTypes.string,
    content: PropTypes.string,
    menu: PropTypes.string,
  }),
  data: PropTypes.array,
  onSelect: PropTypes.func,
  renderSelectedOptions: PropTypes.func,
  button: PropTypes.node,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  placeholder: PropTypes.string,
  multiSelect: PropTypes.bool,
  customTrigger: PropTypes.node,
  overflow: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
}

DropdownAutoCenter.defaultProps = {
  classes: { 
    root: '',
    button: '',
    content: '',
    menu: '',
  },
  data: [],
  onSelect: () => {},
  renderSelectedOptions: () => {},
  button: null,
  size: 'md',
  startIcon: null,
  endIcon: null,
  placeholder: 'Select',
  multiSelect: false,
  customTrigger: null,
  overflow: 'horizontal',
  disabled: false,
}

DropdownAutoCenter.displayName = 'DropdownAutoCenter'

export default DropdownAutoCenter
