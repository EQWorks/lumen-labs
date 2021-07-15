import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const ChipBase = forwardRef(({ children, classes, startIcon, endIcon, disabled }, ref) => {
  return (
    <div ref={ref} className={`inline-flex flex-row items-center ${classes.chip} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      {startIcon && <div className={`mr-1 ${classes.startIcon}`}>{startIcon}</div>}
      <span className={classes.content}>{children}</span>
      {endIcon && <div className={`ml-1 ${classes.endIcon}`}>{endIcon}</div>}
    </div>
  )
})

ChipBase.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  disabled: PropTypes.bool,
}

ChipBase.defaultProps = {
  classes: { chip: '', content: '', startIcon: '', endIcon: '' },
  startIcon: null,
  endIcon: null,
  disabled: false,
}

ChipBase.displayName = 'ChipBase'

export default ChipBase
