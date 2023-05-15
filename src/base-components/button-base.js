import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const ButtonBase = forwardRef(({
  children,
  classes = { button: '', content: '', startIcon: '', endIcon: '' },
  startIcon = null,
  endIcon = null,
  onClickStartIcon = () => {},
  onClickEndIcon = () => {},
  ...rest
},
ref,
) => {
  return (
    <button
      ref={ref}
      className={`${classes.button} flex flex-row justify-between items-center`} {...rest}
    >
      {startIcon &&
        <div className={classes.startIcon} onClick={onClickStartIcon}>
          {startIcon}
        </div>
      }
      <div className={`${classes.content} m-auto`}>
        {children}
      </div>
      {endIcon &&
        <div className={classes.endIcon} onClick={onClickEndIcon}>
          {endIcon}
        </div>
      }
    </button>
  )
})

ButtonBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClickStartIcon: PropTypes.func,
  onClickEndIcon: PropTypes.func,
}

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
