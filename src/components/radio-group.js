import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'


const RadioGroup = forwardRef(({ children, name, selected, align, labelAlign }, ref) => {
  const flexDir = align === 'vertical' ? 'flex-col' : 'flex-row'

  return (
    <div className={`radio-group__root-contaienr inline-flex ${flexDir}`}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { name: name, selected: selected, direction: flexDir, align: labelAlign } )
        }
        return child
      })}
    </div>
  )
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  align: PropTypes.string,
  labelAlign: PropTypes.string,
}
RadioGroup.defaultProps = {
  align: 'vertical',
  labelAlign: 'right',
}

export default RadioGroup
