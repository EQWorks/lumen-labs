import React from 'react'
import PropTypes from 'prop-types'


const ButtonBase = ({ children, classes, startIcon, endIcon, ...rest }) => {
  return (
    <button className={`flex flex-row justify-between items-center ${classes.button}`} {...rest}>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      <span className={classes.content}>{children}</span>
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
  classes: { button: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
}

export default ButtonBase
