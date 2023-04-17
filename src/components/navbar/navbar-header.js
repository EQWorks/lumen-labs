import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const NavbarHeader = forwardRef(({
  classes,
  children,
  onClick,
  ...rest
}, ref) => {
  const navbarHeaderClasses = Object.freeze({
    headerContainer: `navbar__header-container ${classes.headerContainer} flex items-center cursor-pointer`,
  })

  return (
    <div
      ref={ref}
      className={navbarHeaderClasses.headerContainer}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
})

NavbarHeader.propTypes = {
  classes: PropTypes.shape({
    headerContainer: '',
  }),
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

NavbarHeader.defaultProps = {
  classes: { headerContainer: '' },
  onClick: () => {},
}

NavbarHeader.displayName = 'NavbarHeader'

export default NavbarHeader
