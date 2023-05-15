import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const Footer = forwardRef(({
  classes = {
    footer: '',
  },
  children,
  ...rest
}, ref) => {
  const modalClasses = Object.freeze({
    footer: `${classes.footer} px-5 py-18px border-t`,
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

Footer.displayName = 'Footer'

export default Footer
