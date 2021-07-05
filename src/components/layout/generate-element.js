import React from 'react'
import PropTypes from 'prop-types'


const _generateElement = (Element) => ({ tagName, displayName }) => {
  const Component = (props) => <Element tagName={tagName} {...props} />
  Component.displayName = displayName
  return Component
}

const LayoutElement = ({ children, tagName, className }) => (
  React.createElement(tagName, { className }, children)
)

LayoutElement.propTypes = {
  children: PropTypes.node.isRequired,
  tagName: PropTypes.string.isRequired,
  className: PropTypes.string,
}
LayoutElement.defaultProps = { className: 'w-full' }

export const generateElement = _generateElement(LayoutElement)
