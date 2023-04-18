import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const NavbarItem = forwardRef(({
  id,
  classes,
  label,
  icon,
  onClick,
  isSelected,
  ...rest
}, ref) => {
  const NavbarItemClasses = Object.freeze({
    itemContainer: `navbar-item__main-container ${classes.itemContainer} cursor-pointer mx-6`,
    itemContainerActive: `navbar-item__main-container--active ${classes.itemContainerActive} py-2 px-4 mx-2 rounded-full bg-black`,
    contentContainer: `navbar-item__content-container ${classes.contentContainer} flex flex-row items-center`,
    icon: `navbar-item__icon ${classes.icon} pr-2.5`,
    iconActive: `navbar-item__icon--active ${classes.iconActive} pr-2.5 text-white`,
    text: `navbar-item__text ${classes.text} text-black`,
    textActive: `navbar-item__text--active ${classes.textActive} text-white`,
  })

  return (
    <div
      ref={ref}
      key={id}
      className={`${isSelected ? NavbarItemClasses.itemContainerActive : NavbarItemClasses.itemContainer}`}
      onClick={onClick}
      {...rest}
    >
      <div className={NavbarItemClasses.contentContainer}>
        <div className={`${isSelected ? NavbarItemClasses.iconActive : NavbarItemClasses.icon}`}>
          {React.cloneElement(icon, { ...icon.props })}
        </div>
        <div className={`${isSelected ? NavbarItemClasses.textActive : NavbarItemClasses.text}`}>{label}</div>
      </div>
    </div>
  )
})

NavbarItem.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
}

NavbarItem.defaultProps = {
  id: '',
  classes: {
    itemContainer: '',
    itemContainerActive: '',
    contentContainer: '',
    icon: '',
    iconActive: '',
    text: '',
    textActive: '',
  },
  label: '',
  onClick: () => {},
  isSelected: false,
}

NavbarItem.displayName = 'NavbarItem'

export default NavbarItem
