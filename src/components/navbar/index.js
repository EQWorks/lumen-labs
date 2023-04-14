import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import NavbarHeader from './navbar-header'
import NavbarItem from './navbar-item'


const Navbar = forwardRef(({ children, classes, ...rest }, ref) => {
  const navbarClasses = Object.freeze({
    root: `${classes.root} navbar__root w-screen h-16 px-10 flex items-center justify-between`,
  })
  return (
    <div
      ref={ref}
      className={navbarClasses.root} 
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type.__docgenInfo.displayName === 'NavbarHeader') {
          return React.cloneElement(child)
        }
      })}

      <div className="navbar__items flex items-center justify-center">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type.__docgenInfo.displayName === 'NavbarItem') {
            return React.cloneElement(child)
          }
        })}
      </div>

      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) 
          && child.type.__docgenInfo.displayName !== 'NavbarHeader' 
          && child.type.__docgenInfo.displayName !== 'NavbarItem'
        ) {
          return React.cloneElement(child)
        }
      })}
    </div>
  )
})

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
}

Navbar.defaultProps = {
  classes: { root: '' },
}

Navbar.displayName = 'Navbar'

Navbar.NavbarHeader = NavbarHeader
Navbar.NavbarItem = NavbarItem

export default Navbar
