import React, { forwardRef, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { DialogBase } from '../../base-components'

import './dropdown-auto-center.css'


const DropdownAutoCenter = forwardRef(({
  classes = {
    root: '',
    button: '',
    menu: '',
    item: '',
  },
  data = [],
  onSelect = () => {},
  value,
  startIcon = null,
  endIcon = null,
  scrollable = false,
  disabled = false,
  ...rest
}, ref) => {
  const dialogClasses = Object.freeze({
    root: `dropdown-auto-center__root-container min-w-5 min-h-5 text-xxs uppercase tracking-lg ${classes.root}`,
    dialog: `dropdown-auto-center__dialog-container w-full ${classes.dialog}`,
  })

  const dropdownClasses = Object.freeze({
    button: `dropdown-auto-center__button-container min-w-10 px-1.5 py-0.5 flex items-center justify-between cursor-pointer rounded-sm shadow-light-10 shadow-secondary-200
      hover:shadow-primary-50 ${classes.button && classes.button} ${disabled ? 'text-secondary-400' : 'text-interactive-500'}`,
    menu: `dropdown-auto-center__menu-container min-w-10 overflow-y-auto overflow-x-hidden relative rounded-sm shadow-light-10 bg-secondary-50 shadow-secondary-200
      hover:shadow-primary-50 ${scrollable && 'h-10'} ${classes.menu && classes.menu}`,
    item: `dropdown-auto-center__item-container rows-selection flex px-1.5 py-0.5 cursor-pointer rounded-sm text-secondary-600
      hover:bg-secondary-50 hover:text-secondary-800 hover:shadow-light-10
      ${classes.item && classes.item}`,
    disabled: 'dropdown-auto-center__disabled bg-secondary-100 border-secondary-400 cursor-not-allowed pointer-events-none',
  })

  const [open, setOpen] = useState(false)
  const [dropdownOffsetTop, setDropdownOffsetTop] = useState(0)
  const [active, setActive] = useState(value || '')
  const dropdownRef = useRef(null)

  useEffect(() => {
    dropdownRef.current && dropdownRef.current.childNodes.forEach((node) => {
      if (node.innerText.toString() === value.title.toString().toUpperCase()) {
        if (scrollable) {
          if (value.title === data[0].title) {
            dropdownRef.current.style.height = `${dropdownRef.current.clientHeight - (dropdownRef.current.clientHeight / 4)}px`
            setDropdownOffsetTop(node.clientHeight)
          } else if (value.title === data[data.length - 1].title) {
            setDropdownOffsetTop(node.clientHeight + (node.clientHeight / 2))
            dropdownRef.current.style.height = `${dropdownRef.current.clientHeight - (dropdownRef.current.clientHeight / 4)}px`
            dropdownRef.current.scrollTop = (node.offsetTop)
          } else {
            setDropdownOffsetTop(node.clientHeight + node.clientHeight / 2)
            dropdownRef.current.scrollTop = (node.offsetTop - node.clientHeight / 2)
          }
        } else {
          setDropdownOffsetTop(node.offsetTop + node.clientHeight)
        }
      }
    })
  }, [open, value, data, scrollable])

  const handleSelectRowsOnClick = () => {
    setOpen(!open)
  }

  const onSelectRowOptions = (event, item, index) => {
    setOpen(!open)
    onSelect(event, { item, index })
  }

  const dropdownButton = (
    <div className={`${dropdownClasses.button} ${disabled && dropdownClasses.disabled}`}>
      {startIcon && startIcon}
      <span className={`${startIcon && 'ml-1'} ${endIcon && 'mr-1'}`}>{active.title}</span>
      {endIcon && endIcon}
    </div>
  )

  return (
    <>
      <DialogBase ref={ref} classes={dialogClasses} open={open} button={dropdownButton} onClick={handleSelectRowsOnClick}  disabled={disabled} {...rest}>
        <ul
          ref={el => dropdownRef.current = el}
          className={dropdownClasses.menu}
          style={{ top: `-${dropdownOffsetTop}px` }}
        >
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className={`${dropdownClasses.item} ${item.title.toString() === active.title.toString() && 'text-interactive-500 shadow-light-10 scale-105'}`}
                onClick={(e) => onSelectRowOptions(e, item, index)}
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
    dialog: PropTypes.string,
    button: PropTypes.string,
    menu: PropTypes.string,
    item: PropTypes.string,
  }),
  data:  PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ),
  onSelect: PropTypes.func,
  value: PropTypes.any,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  scrollable: PropTypes.bool,
  disabled: PropTypes.bool,
}

DropdownAutoCenter.displayName = 'DropdownAutoCenter'

export default DropdownAutoCenter
