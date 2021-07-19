import React from 'react'
import PropTypes from 'prop-types'

import './scrollbar.css'


/*-- ListBase - base component for List --*/
const ListBase = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <ul ref={ref} className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...props })
        }
        return child
      })}
    </ul>
  )
})
ListBase.displayName = 'ListBase'
ListBase.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }
ListBase.defaultProps = { className: '' }

/*-- ListCol - grid column component wrapper if gridCols > 0 --*/
const ListCol = React.forwardRef(({ children, className, colSpan }, ref) => {
  const _colSpan = ['col-span', colSpan].join('-')
  return (<div ref={ref} className={`${_colSpan} ${className}`}>{children}</div>)
})
ListCol.displayName = 'ListCol'
ListCol.propTypes = { children: PropTypes.node.isRequired, colSpan: PropTypes.number.isRequired, className: PropTypes.string }
ListCol.defaultProps = { className: '' }

/*-- ListItem --*/
const ListItem = React.forwardRef(({ children, className, gridCols, onClick }, ref) => {
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  return (
    <li ref={ref} onClick={onClick} className={`${_grid} ${className} `}>{children}</li>
  )
})
ListItem.displayName = 'ListItem'
ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gridCols: PropTypes.number,
  onClick: PropTypes.func,
}
ListItem.defaultProps = { className: '', gridCols: 0, onClick: () => {} }

/*-- List --*/
const renderListItems = ({ data, gridCols, renderItem }) => {
  if (gridCols) {
    return data.map((item, index) => renderItem(item, index, ListCol))
  }
  return data.map(renderItem)
}

const List = React.forwardRef(({ classes, data, renderHeader, renderFooter, renderItem, spacing, gridCols }, ref) => {
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  const _spacing = ['space-y', spacing].join('-')
  return (
    <div ref={ref} className={classes.root}>
      {renderHeader && <div className={`${_grid} ${classes.header}`}>{gridCols ? renderHeader(ListCol) : renderHeader()}</div>}
      <ListBase className={`flex flex-col ${_spacing} overflow-auto scrollbar ${classes.list}`} gridCols={gridCols}>
        {renderListItems({ data, gridCols, renderItem })}
      </ListBase>
      {renderFooter && <div className={`${_grid} ${classes.footer}`}>{gridCols ? renderFooter(ListCol) : renderFooter()}</div>}
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
  classes: { root: '', header: '', list: '', footer: '' },
  renderHeader: null,
  renderFooter: null,
  spacing: 0,
  gridCols: 0,
}

List.ListItem = ListItem
export default List
