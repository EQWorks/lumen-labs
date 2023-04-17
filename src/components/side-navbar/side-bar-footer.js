import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const SideBarFooter = forwardRef(({
  classes,
  children,
  onClick,
  ...rest
}, ref) => {
  const sideBarFooterClasses = Object.freeze({
    footerContainer: `side-bar__footer-container absolute bottom-0 w-full mt-2 px-6 py-5 
      text-base font-rc leading-4 font-normal text-secondary-500 border-t border-solid border-secondary-300 ${classes.footerContainer}`,
  })

  return (
    <div
      ref={ref}
      className={sideBarFooterClasses.footerContainer}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
})

SideBarFooter.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

SideBarFooter.defaultProps = {
  classes: { footerContainer: '' },
  onClick: () => {},
}

SideBarFooter.displayName = 'SideBarFooter'

export default SideBarFooter
