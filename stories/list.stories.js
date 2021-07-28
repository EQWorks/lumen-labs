import React from 'react'

import { List } from '../src'


export default {
  title: 'List',
  component: List,
}

/** -- props (ListCol [componnet only availabe if [gridCols] > 0]):
 * [colSpan] - number, width definition (number of columns to span)
 */
/** -- props (List):
 * [classes] - object, custom styling supported keys:
 *    root: component wrapper
 *    header: header container div
 *    list: list ul
 *    footer: footer container div
 * [data] - array, list data array
 * [renderItem] - func/elementType, list-item component
 * [renderHeader] - func/elementType, header component
 * [renderFooter] - func/elementType, footer component
 * [rowHeight] - number, required prop for react-window, determining height of each row
 * [gridCols] - number, number of columns to render for header/list/footer
 */
export const Normal = () => {
  return (
    <List
      classes={{ list: 'h-40', root: 'w-96', header: 'border', footer: 'border' }}
      renderHeader={() => <h2>HEADER</h2>}
      renderFooter={() => <h2>FOOTER</h2>}
      rowHeight={40}
      data={['item1', 'item2', 'item3', 'item4', 'item1', 'item2', 'item3', 'item4']}
      renderItem={({ item, index }) => <List.ListItem key={index}>{item}</List.ListItem>}
    />
  )
}

export const Grid = () => {
  return (
    <List
      gridCols={4}
      classes={{ root: 'w-96', list: 'h-40', header: 'border', footer: 'border' }}
      rowHeight={40}
      renderHeader={(ListCol) => {
        return (
          <>
            <ListCol colSpan={2}>HEADER 2</ListCol>
            <ListCol colSpan={1}>HEADER 1</ListCol>
            <ListCol colSpan={1}>HEADER 1</ListCol>
          </>
        )
      }}
      renderFooter={(ListCol) => {
        return (
          <>
            <ListCol colSpan={2}>Footer 2</ListCol>
            <ListCol colSpan={1}>Footer 1</ListCol>
            <ListCol colSpan={1}>Footer 1</ListCol>
          </>
        )
      }}
      data={['item1', 'item2', 'item3', 'item4', 'item1', 'item2', 'item3', 'item4']}
      renderItem={({ item, index, ListCol }) => {
        return <List.ListItem key={index}>
          <ListCol colSpan={2}>hello</ListCol>
          <ListCol colSpan={1}>{item}</ListCol>
          <ListCol colSpan={1}>there</ListCol>
        </List.ListItem>}
      }
    />
  )
}
