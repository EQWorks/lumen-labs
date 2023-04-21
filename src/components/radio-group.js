import React, { Children, isValidElement, cloneElement, forwardRef } from 'react'
import PropTypes from 'prop-types'


const RadioGroup = forwardRef(({ children, name, selected, align, labelAlign, classStyle,...rest }, ref) => {
  const flexDir = align === 'vertical' ? 'flex-col' : 'flex-row'

  return (
    <div ref={ref} className={`radio-group__root-container ${classStyle} inline-flex ${flexDir}`} {...rest}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { name, selected, direction: flexDir, align: labelAlign } )
        }
        return child
      })}
    </div>
  )
})

RadioGroup.propTypes = {
  classStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  align: PropTypes.string,
  labelAlign: PropTypes.string,
}
RadioGroup.defaultProps = {
  classStyle: '',
  align: 'vertical',
  labelAlign: 'right',
}

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
