import React, { forwardRef, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
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
    root: `min-w-5 min-h-5 text-xxs uppercase tracking-lg ${classes.root}`,
  })

  const dropdownClasses = Object.freeze({
    button: `min-w-10 px-1.5 py-0.5 flex items-center text-interactive-500 cursor-pointer rounded-sm shadow-light-10
      ${classes.button && classes.button}`,
    menu: `min-w-10 relative rounded-sm shadow-light-10 bg-secondary-50 ${classes.menu && classes.menu}`,
    item: `rows-selection flex px-1.5 py-0.5 cursor-pointer rounded-sm text-secondary-600
      hover:bg-secondary-50 hover:text-secondary-800 hover:shadow-light-10 hover:shadow-none
      ${classes.item && classes.item}`,
  })

  const [open, setOpen] = useState(false)
  const [dropdownOffsetTop, setDropdownOffsetTop] = useState(0)
  const [active, setActive] = useState(setSelectedOption || '')
  const dropdownRef = useRef(null)

  useEffect(() => {
    dropdownRef.current && dropdownRef.current.childNodes.forEach((node) => {
      if (node.innerText.toString() === active.title.toString().toUpperCase()) {
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
    <div className={dropdownClasses.button}>
      <span className='mr-1'>{active.title}</span>
      <ArrowUpDown size='sm'/>
    </div>
  )

  return (
    <>
      <DialogBase ref={ref} classes={dialogClasses} open={open} button={dropdownButton} onClick={handleSelectRowsOnClick} {...rest}>
        <ul 
          ref={el => dropdownRef.current = el} 
          className={dropdownClasses.menu}
          style={{ top: `-${dropdownOffsetTop}px` }}
        >
          {data.map((item, index) => {
            return (
              <li 
                key={index} 
                className={`${dropdownClasses.item} ${item.title.toString() === active.title.toString() && 'text-interactive-500'}`} 
                onClick={() => onSelectRowOptions(item)}
                onPointerDown={() => setActive(item)}
              >
                {item.title}
              </li>
            )
          })}
        </ul>
      </DialogBase>
    </>
  )
})

DropdownAutoCenter.propTypes = {
  classes: PropTypes.exact({
    root: PropTypes.string,
    button: PropTypes.string,
    menu: PropTypes.string,
    item: PropTypes.string,
  }),
  data:  PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ),
  onSelect: PropTypes.func,
  setSelectedOption: PropTypes.any,
}

DropdownAutoCenter.defaultProps = {
  classes: { 
    root: '',
    button: '',
    menu: '',
    item: '',
  },
  data: [],
  onSelect: () => {},
}

DropdownAutoCenter.displayName = 'DropdownAutoCenter'

export default DropdownAutoCenter
