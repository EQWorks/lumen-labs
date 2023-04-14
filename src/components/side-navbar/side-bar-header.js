import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const SideBarHeader = forwardRef(({
  classes,
  children,
  onClick,
  ...rest
}, ref) => {
  const sideBarHeaderClasses = Object.freeze({
    headerContainer: `side-bar__header-container mb-2 px-6 py-4 text-base font-rc leading-4 font-normal text-secondary-500 
      border-b border-solid border-secondary-300 ${classes.headerContainer}`,
  })

  return (
    <div
      ref={ref}
      className={sideBarHeaderClasses.headerContainer}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
})

SideBarHeader.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

SideBarHeader.defaultProps = {
  classes: { headerContainer: '' },
  onClick: () => {},
}

SideBarHeader.displayName = 'SideBarHeader'

export default SideBarHeader
