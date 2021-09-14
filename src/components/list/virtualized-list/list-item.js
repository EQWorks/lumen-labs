import React from 'react'
import PropTypes from 'prop-types'


const PropsInheritor = React.forwardRef(({ children, ...props }, ref) => (
  <div ref={ref}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...props })
      }
      return child
    })}
  </div>
))
PropsInheritor.propTypes = { children: PropTypes.node.isRequired }


const ListItem = React.forwardRef(({ children, style, className, width, classes, gridCols, selected, onClick }, ref) => {
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  const _selected = selected ? classes.selected ? classes.selected : 'bg-secondary-100' : ''
  return (
    <div
      ref={ref}
      style={{ ...style, width: width || '100%' }}
      onClick={onClick} className={`${_grid} ${_selected} ${className}`}
    >{children}</div>
  )
})

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  classes: PropTypes.object,
  gridCols: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
ListItem.defaultProps = {
  style: {},
  className: '',
  classes: {},
  gridCols: 0,
  selected: false,
  onClick: () => {},
  width: '100%',
}

PropsInheritor.displayName = 'PropsInheritor'
ListItem.displayName = 'ListItem'

export { ListItem, PropsInheritor }
