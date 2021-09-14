import React from 'react'
import PropTypes from 'prop-types'

import ListCol from './list-col'
import './scrollbar.css'


/*-- ListBase - base component for List --*/
const ListBase = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <ul ref={ref} className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) return React.cloneElement(child, { ...props })
        return child
      })}
    </ul>
  )
})
ListBase.displayName = 'ListBase'
ListBase.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }
ListBase.defaultProps = { className: '' }


/*-- ListItem --*/
const ListItem = React.forwardRef(({ children, className, classes, gridCols, selected, onClick }, ref) => {
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  const _selected = selected ? classes.selected ? classes.selected : 'bg-secondary-100' : ''
  return (
    <li ref={ref} onClick={onClick} className={`${_grid} ${_selected} ${className}`}>{children}</li>
  )
})
ListItem.displayName = 'ListItem'
ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
  gridCols: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}
ListItem.defaultProps = { className: '', classes: {}, gridCols: 0, selected: false, onClick: () => {} }


/*-- List --*/
const renderListItems = ({ data, gridCols, renderItem }) => data.map((item, index) => {
  const _item = { item, index }
  return renderItem(gridCols ? { ..._item, ListCol } : _item)
})

const List = React.forwardRef(({ classes, data, renderHeader, renderFooter, renderItem, spacing, gridCols }, ref) => {
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  const _spacing = ['space-y', spacing].join('-')
  return (
    <div ref={ref} className={classes.root}>
      {renderHeader && <div className={classes.headerContainer}>
        <div className={`${_grid} ${classes.header}`}>{gridCols ? renderHeader({ ListCol }) : renderHeader()}</div>
      </div>}
      <ListBase className={`flex flex-col ${_spacing} overflow-y-scroll scrollbar ${classes.list}`} classes={classes} gridCols={gridCols}>
        {renderListItems({ data, gridCols, renderItem })}
      </ListBase>
      {renderFooter && <div className={`${_grid} ${classes.footer}`}>{gridCols ? renderFooter({ ListCol }) : renderFooter()}</div>}
    </div>
  )
})

List.displayName = 'List'
List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.elementType.isRequired,
  ]),
  classes: PropTypes.object,
  renderHeader: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.elementType,
  ]),
  renderFooter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.elementType,
  ]),
  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  gridCols: PropTypes.number,
}
List.defaultProps = {
  classes: { root: '', header: '', list: '', footer: '', selected: '' },
  renderHeader: null,
  renderFooter: null,
  spacing: 0,
  gridCols: 0,
}

List.ListItem = ListItem
export default List
