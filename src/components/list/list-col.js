import React from 'react'
import PropTypes from 'prop-types'


/*-- ListCol - grid column component wrapper if gridCols > 0 --*/
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

ListCol.displayName = 'ListCol'

export default ListCol
