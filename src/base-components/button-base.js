import React from 'react'
import PropTypes from 'prop-types'


const ButtonBase = ({ children, classes, startIcon, endIcon, ...rest }) => {
  return (
    <button className={`inline-flex ${classes.button}`} {...rest}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {children}
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
    </button>
  )
}

ButtonBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}
ButtonBase.defaultProps = {
  classes: { button: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
}

export default ButtonBase
