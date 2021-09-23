import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const Footer = forwardRef(({ classes, children, ...rest }, ref) => {  
  const modalClasses = Object.freeze({
    footer: `px-5 py-18px border-t ${classes.footer}`,
  })

  return (
    <div ref={ref} className={`footer-container ${modalClasses.footer}`} {...rest}>
      {children}
    </div>
  )
})

Footer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
}

Footer.defaultProps = {
  classes: { 
    footer: '', 
  },
}

Footer.displayName = 'Footer'

export default Footer
