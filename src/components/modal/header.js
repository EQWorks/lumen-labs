import React, { forwardRef } from 'react'
import { Dialog } from '@headlessui/react'
import PropTypes from 'prop-types'

import { Close } from '../../icons'


const Header = forwardRef(({ classes, children, close, hideClose, ...rest }, ref) => {  
  const modalClasses = Object.freeze({
    header: `p-5 flex justify-between border-b ${classes.header}`,
    title: `font-bold text-xl font-sans text-secondary-900 tracking-xs leading-1.2 ${classes.title}`,
    close: `focus:outline-none text-secondary-600 fill-current ${classes.close}`,
  })

  return (
    <div ref={ref} className={`header-container ${modalClasses.header}`} {...rest}>
      <Dialog.Title as='span' className={modalClasses.title}>{children}</Dialog.Title>
      {!hideClose && 
        <button className={modalClasses.close} onClick={close}>
          <Close size='lg'/>
        </button>
      }
    </div>
  )
})

Header.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  close: PropTypes.func,
  hideClose: PropTypes.bool,
}

Header.defaultProps = {
  classes: { 
    header: '', 
    title: '', 
    close: '', 
  },
  close: () => {},
}

Header.displayName = 'Header'

export default Header
