import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const SideBarMenu = forwardRef(({ 
  id, 
  classes, 
  children,
  onClick, 
  ...rest 
}, ref) => {
  const sideBarMenuClasses = Object.freeze({
    menuContainer: `side-bar__menu-container pl-6 py-18px text-base font-rc leading-4 font-normal text-secondary-500 ${classes.menuContainer}`,
  })

  return (
    <div 
      ref={ref}
      key={id} 
      className={sideBarMenuClasses.menuContainer} 
      onClick={onClick} 
      {...rest}
    >
      {children}
    </div>
  )
})

SideBarMenu.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

SideBarMenu.defaultProps = {
  id: '',
  classes: { menuContainer: '' },
  onClick: () => {},
}

SideBarMenu.displayName = 'SideBarMenu'

export default SideBarMenu
