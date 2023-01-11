import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'


const RadioGroup = ({ children, name, selected, align }) => {
  const flexDir = align === 'vertical' ? 'flex-col' : 'flex-row'

  return (
    <div className={`radio-group__root-contaienr inline-flex ${flexDir}`}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { name: name, selected: selected, direction: flexDir } )
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
}
RadioGroup.defaultProps = {
  align: 'vertical',
}

export default RadioGroup
