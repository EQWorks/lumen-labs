import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import { FixedSizeList, FixedSizeGrid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import { ListItemsContainer, ListItem, ListCol } from './list-item'
import './scrollbar.css'


const _renderItems = ({ data, index, columnIndex, rowIndex, style }) => ({ renderItem, gridCols, isGrid, columnCount }) => {
  const _index = isGrid ? (columnCount*rowIndex + columnIndex) : index
  if (gridCols > -1) {
    return renderItem({ item: data[_index] || {}, index: _index, columnIndex, rowIndex, style, ListCol })
  }
  return renderItem({ item: data[_index] || {}, index: _index, columnIndex, rowIndex, style })
}

const ListBase = ({
  classes, data, rowHeight, gridCols, renderItem, renderHeader, renderFooter, scrollbar,
  columnCount, columnWidth, rowCount, rowWidth,
}) => {
  const isGrid = columnCount > -1 || columnWidth > -1 || rowCount > -1 || rowWidth > -1
  const props = isGrid ? { columnCount, columnWidth, rowCount, rowWidth, rowHeight } : { itemSize: rowHeight }
  const ListElement = isGrid ? FixedSizeGrid : FixedSizeList
  const ref = createRef()
  const _grid = gridCols > 0 ? ['grid grid-cols', gridCols].join('-') : ''
  const _scrollbar = scrollbar ? 'scrollbar' : 'noscrollbar'

  return (
    <div className={classes.root}>
      {renderHeader && <div className={`${_grid} ${classes.header}`}>
        {gridCols ? renderHeader(ListCol) : renderHeader()}
      </div>}

      <div className={classes.list}>
        <AutoSizer>
          {({ height, width }) => (
            <ListElement
              ref={ref}
              className={`overflow-y-scroll ${_scrollbar} ${classes.list}`}
              width={width}
              height={height}
              itemData={data}
              itemCount={data.length}
              {...props}
            >
              {(v) => (
                <ListItemsContainer style={v.style} gridCols={gridCols} classes={classes}>
                  {_renderItems(v)({ renderItem, gridCols, isGrid, columnCount })}
                </ListItemsContainer>
              )}
            </ListElement>
          )}
        </AutoSizer>
      </div>

      {renderFooter && <div className={`${_grid} ${classes.footer}`}>
        {gridCols ? renderFooter(ListCol) : renderFooter()}
      </div>}
    </div>
  )
}

ListBase.propTypes = {
  data: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  classes: PropTypes.object,
  gridCols: PropTypes.number,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
  scrollbar: PropTypes.bool,
  columnCount: PropTypes.number,
  columnWidth: PropTypes.number,
  rowCount: PropTypes.number,
  rowWidth: PropTypes.number,
}
ListBase.defaultProps = {
  classes: { root: 'w-full h-2/3', list: 'w-full h-full' },
  width: null,
  gridCols: -1,
  renderHeader: () => {},
  renderFooter: () => {},
  scrollbar: true,
  columnCount: -1,
  columnWidth: -1,
  rowCount: -1,
  rowWidth: -1,
}

ListBase.ListItem = ListItem
export default ListBase
