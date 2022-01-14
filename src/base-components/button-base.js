import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const ButtonBase = forwardRef(({ children, classes, startIcon, endIcon, ...rest }, ref) => {
  return (
    <button ref={ref} className={`flex flex-row justify-between items-center ${classes.button}`} {...rest}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      <div className={`m-auto ${classes.content}`}>{children}</div>
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
    </button>
  )
})

ButtonBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}
ButtonBase.defaultProps = {
  classes: { button: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
}

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
