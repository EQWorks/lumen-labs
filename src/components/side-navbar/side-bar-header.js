import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const SideBarHeader = forwardRef(({ 
  id, 
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
      key={id} 
      className={sideBarHeaderClasses.headerContainer} 
      onClick={onClick} 
      {...rest}
    >
      {children}
    </div>
  )
})

SideBarHeader.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

SideBarHeader.defaultProps = {
  id: '',
  classes: { headerContainer: '' },
  onClick: () => {},
}

SideBarHeader.displayName = 'SideBarHeader'

export default SideBarHeader
