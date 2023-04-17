import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import SideBarHeader from './side-bar-header'
import SideBarMenu from './side-bar-menu'
import SideBarItem from './side-bar-item'
import SideBarFooter from './side-bar-footer'


const SideNavbar = forwardRef(({ children, classes, ...rest }, ref) => {
  const sideNavbarClasses = Object.freeze({
    root: `side-navbar__root relative h-screen inline-flex flex-col bg-white border-r border-solid border-secondary-300 ${classes.root}`,
  })

  return (
    <div
      ref={ref}
      className={sideNavbarClasses.root}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child)
        }
        return child
      })}
    </div>
  )
})

SideNavbar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
}

SideNavbar.defaultProps = {
  classes: { root: '' },
}

SideNavbar.displayName = 'SideNavbar'

SideNavbar.SideBarHeader = SideBarHeader
SideNavbar.SideBarMenu = SideBarMenu
SideNavbar.SideBarItem = SideBarItem
SideNavbar.SideBarFooter = SideBarFooter

export default SideNavbar
