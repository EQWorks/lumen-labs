import React from 'react'
import PropTypes from 'prop-types'

import { DialogBase } from '../base-components'
import { CircleLoader } from '../icons'


const Loader = ({ children, classes, backdrop, open, message, Icon }) => {
  const loaderClasses = Object.freeze({
    root: `relative inline-flex items-center justify-center ${classes.root ? classes.root : ''}`,
    icon: `icon-container fill-current ${classes.icon ? classes.icon : ''} animate-spin`,
    message: `ml-2 ${classes.message ? classes.message : ''}`,
  })

  let LoaderIcon = CircleLoader

  if (Icon) {
    LoaderIcon = Icon
  }

  if (backdrop) {
    return (
      <DialogBase modal open={open}>
        <div className={loaderClasses.root}>
          <LoaderIcon className={loaderClasses.icon} />
          {message && <p className={loaderClasses.message}>{message}</p>}
        </div>
      </DialogBase>
    )
  }

  return (
    <div className={loaderClasses.root} >
      {children}
      {open && <LoaderIcon className={loaderClasses.icon} />}
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  backdrop: PropTypes.bool,
  open: PropTypes.bool,
  message: PropTypes.string,
  Icon: PropTypes.node,
}
Loader.defaultProps = {
  children: null,
  classes: { icon: '', message: '', root: '' },
  backdrop: false,
  open: false,
  message: '',
  Icon: null,
}

export default Loader
