import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '../../utils/make-styles'
import { getTailwindConfigColor } from '../../utils/tailwind-config-color'


const customStyle = makeStyles({
  boxShadowOnActive: {
    boxShadow: `1px 0 ${getTailwindConfigColor('primary-500')}`,
  },
})

const SideBarItem = forwardRef(({
  id = '',
  classes = { itemContainer: '', itemContainerActive: '', contentContainer: '', icon: '', text: '' },
  label = '',
  icon = null,
  onClick = () => {},
  isSelected = false,
  ...rest
}, ref) => {
  const sideBarItemClasses = Object.freeze({
    itemContainer: `side-bar-item__main-container pl-25px pr-6 py-18px text-secondary-600 cursor-pointer ${classes.itemContainer}
      hover:bg-primary-50`,
    itemContainerActive: `side-bar-item__main-container--active ${classes.itemContainerActive}
      pl-25px pr-6 py-18px text-primary-500 bg-primary-50 cursor-pointer ${customStyle.boxShadowOnActive}`,
    contentContainer: `side-bar-item__content-container flex flex-row items-center ${classes.contentContainer}`,
    icon: `side-bar-item__icon pr-2.5 ${classes.icon}`,
    text: `side-bar-item__text text-base leading-4 font-normal font-rc ${classes.text}`,
  })

  const [isHover, setIsHover] = useState(false)

  return (
    <div
      ref={ref}
      key={id}
      className={`${isSelected ? sideBarItemClasses.itemContainerActive : sideBarItemClasses.itemContainer}`}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...rest}
    >
      <div className={sideBarItemClasses.contentContainer}>
        {icon && (
          <div className={sideBarItemClasses.icon}>
            {React.cloneElement(icon, { ...icon.props, active: (isHover || isSelected) ? 1 : 0 })}
          </div>
        )}
        <div className={sideBarItemClasses.text}>{label}</div>
      </div>
    </div>
  )
})

SideBarItem.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
}

SideBarItem.displayName = 'SideBarItem'

export default SideBarItem
