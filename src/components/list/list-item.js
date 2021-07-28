import React from 'react'
import PropTypes from 'prop-types'


const ListCol = React.forwardRef(({ children, className, colSpan }, ref) => {
  const _colSpan = ['col-span', colSpan].join('-')
  return (<div ref={ref} className={`${_colSpan} ${className}`}>{children}</div>)
})

ListCol.propTypes = {
  children: PropTypes.node.isRequired,
  colSpan: PropTypes.number.isRequired,
  className: PropTypes.string,
}
ListCol.defaultProps = { className: '' }

const ListItemsContainer = React.forwardRef(({ children, ...props }, ref) => (
  <div ref={ref}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...props })
      }
      return child
    })}
  </div>
))
ListItemsContainer.propTypes = { children: PropTypes.node.isRequired }


const ListItem = React.forwardRef(({ children, style, className, classes, gridCols, selected, onClick }, ref) => {
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  const _selected = selected ? classes.selected ? classes.selected : 'bg-secondary-100' : ''
  return (
    <div ref={ref} style={style} onClick={onClick} className={`${_grid} ${_selected} ${className}`}>{children}</div>
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
}
ListItem.defaultProps = {
  style: {},
  className: '',
  classes: {},
  gridCols: 0,
  selected: false,
  onClick: () => {},
}

ListItemsContainer.displayName = 'ListItemsContainer'
ListCol.displayName = 'ListCol'
ListItem.displayName = 'ListItem'

export { ListCol, ListItem, ListItemsContainer }
