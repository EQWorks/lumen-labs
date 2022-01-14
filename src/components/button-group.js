import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'


const border = Object.freeze({
  elevated: '',
  outlined: Object.freeze({
    horizontal: 'border-r-0',
    vertical: 'border-b-0',
  }),
  borderless: Object.freeze({
    horizontal: 'mr-px',
    vertical: 'mb-px',
  }),
  filled: Object.freeze({
    horizontal: 'mr-px',
    vertical: 'mb-px',
  }),
})

const ButtonGroup = ({ children, variant, align }) => {
  const count = React.Children.count(children)
  const flexDir = align === 'vertical' ? 'flex-col' : 'flex-row'
  const firstElBorder = align === 'vertical' ? 'rounded-t-sm' : 'rounded-l-sm'
  const lastElBorder = align === 'vertical' ? 'rounded-b-sm' : 'rounded-r-sm'

  return (
    <div className={`inline-flex ${flexDir}`}>
      {Children.map(children, (child, i) => {
        const isFirstEl = i === 0
        const isLastEl = i === (count - 1)
        const borderRadius = isFirstEl ? `${firstElBorder} ${border[variant][align]}`
          : isLastEl ? lastElBorder
            : `rounded-none ${border[variant][align] || ''}`

        if (isValidElement(child)) {
          return cloneElement(child, { classes: { button: { borderRadius } } })
        }
        return child
      })}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  align: PropTypes.string,
}
ButtonGroup.defaultProps = {
  variant: 'outlined',
  align: 'horizontal',
}

export default ButtonGroup
