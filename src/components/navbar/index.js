import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import NavbarHeader from './navbar-header'
import NavbarItem from './navbar-item'


const Navbar = forwardRef(({ children, classes, ...rest }, ref) => {
  const navbarClasses = Object.freeze({
    root: `navbar__root ${classes.root} w-screen h-16 px-10 flex items-center justify-between`,
    items: `navbar__items ${classes.items} flex items-center justify-center`,
  })
  return (
    <div
      ref={ref}
      className={navbarClasses.root}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)
          && (child.type.__docgenInfo?.displayName === 'NavbarHeader'
          || child.type.displayName === 'NavbarHeader')
        ) {
          return React.cloneElement(child)
        }
      })}

      <div className={navbarClasses.items}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)
            && (child.type.__docgenInfo?.displayName === 'NavbarItem'
            || child.type.displayName === 'NavbarItem')
          ) {
            return React.cloneElement(child)
          }
        })}
      </div>

      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child)
          && child.type.__docgenInfo?.displayName !== 'NavbarHeader'
          && child.type.displayName !== 'NavbarHeader'
          && child.type.__docgenInfo?.displayName !== 'NavbarItem'
          && child.type.displayName !== 'NavbarItem'
        ) {
          return React.cloneElement(child)
        }
      })}
    </div>
  )
})

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
}

Navbar.defaultProps = {
  classes: { root: '', items: '' },
}

Navbar.displayName = 'Navbar'

Navbar.NavbarHeader = NavbarHeader
Navbar.NavbarItem = NavbarItem

export default Navbar
