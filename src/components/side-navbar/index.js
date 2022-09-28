import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import SideBarItem from './side-bar-item'


const SideNavbar = forwardRef(({ children, classes, ...rest }, ref) => {
  const sideNavbarClasses = Object.freeze({
    root: `side-navbar__root w-300px h-screen flex flex-col bg-white border-r border-solid border-secondary-300 ${classes.root}`,
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

SideNavbar.SideBarItem = SideBarItem
export default SideNavbar
