import React from 'react'
import PropTypes from 'prop-types'

import { DialogBase } from '../base-components'
import { CircleLoader } from '../icons'


const Loader = ({ classes, backdrop, open, message, Icon }) => {
  let LoaderIcon = CircleLoader

  if (Icon) {
    LoaderIcon = Icon
  }

  if (backdrop) {
    return (
      <>
        <DialogBase modal open={open}>
          <div className='inline-flex'>
            <LoaderIcon className={`fill-current text-white animate-spin ${classes.icon}`} />
            {message && <p className={`ml-2 text-white ${classes.message}`}>{message}</p>}
          </div>
        </DialogBase>
      </>
    )
  }
}

Loader.propTypes = {
  classes: PropTypes.object,
  backdrop: PropTypes.bool,
  open: PropTypes.bool,
  message: PropTypes.string,
  Icon: PropTypes.node,
}
Loader.defaultProps = {
  classes: { icon: '', message: '' },
  backdrop: false,
  open: false,
  message: '',
  Icon: null,
}

export default Loader
