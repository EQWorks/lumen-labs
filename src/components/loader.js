import React from 'react'
import PropTypes from 'prop-types'

import { DialogBase } from '../base-components'
import { CircleLoader } from '../icons'


const Loader = ({ children, classes, backdrop, open, message, Icon }) => {
  const iconClass = `fill-current text-white animate-spin ${classes.icon}`
  let LoaderIcon = CircleLoader

  if (Icon) {
    LoaderIcon = Icon
  }

  if (backdrop) {
    return (
      <DialogBase modal open={open}>
        <div className={classes.root || 'inline-flex'}>
          <LoaderIcon className={iconClass} />
          {message && <p className={`ml-2 text-white ${classes.message}`}>{message}</p>}
        </div>
      </DialogBase>
    )
  }

  return (
    <div className={classes.root || 'relative inline-flex'} >
      {children}
      {open && <LoaderIcon className={`absolute top-1/2 left-1/2 -mt-2.5 -ml-2.5 ${iconClass}`} />}
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
