import React, { useMemo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useResizeDetector } from 'react-resize-detector'


const PanelBase = React.forwardRef(({
  children,
  classes,
  id,
  header,
  ExpandIcon,
  CompressIcon,
  alignIcon,
  open,
  setOpen,
  onChange,
  overflow,
}, ref) => {
  const Icon = open.includes(id) ? ExpandIcon : CompressIcon ?? ExpandIcon
  const renderIcon = () => {
    if (Icon) {
      return (
        <span className={`${classes.iconRoot}`}>
          <Icon className={clsx(`${classes.icon} transition-transform duration-300 ease-in-out origin-center transform`, {
            'rotate-0': open.includes(id),
            '-rotate-90': !open.includes(id) && !CompressIcon,
          })} />
        </span>
      )
    }
    return null
  }

  const handleClick = () => setOpen((prev) => {
    if (prev.includes(id)) {
      prev.splice(prev.indexOf(id), 1)
      onChange(id, prev)
      return [...prev]
    }
    onChange(id, [...prev, id])
    return [...prev, id]
  })

  const [headerHeight, setHeaderHeight] = useState()
  const headerRef = useCallback((node) => setHeaderHeight(node?.getBoundingClientRect().height), [])
  const { height: detailsHeight, ref: detailsRef } = useResizeDetector()
  const height = useMemo(() => headerHeight + detailsHeight, [headerHeight, detailsHeight])

  return (
    <div ref={ref} style={height ? { height } : {}} >
      <div
        ref={headerRef}
        className={clsx(`${classes.header} cursor-pointer flex flex-row`, {
          'justify-between': alignIcon === 'end',
        })}
        onClick={handleClick}
      >
        {alignIcon === 'start' && renderIcon()}
        <span className='inline-block align-baseline'>{header}</span>
        {alignIcon === 'end' && renderIcon()}
      </div>
      <div
        ref={detailsRef}
        className={clsx('transition-opacity ease-in-out duration-300', {
          [`${classes.details} max-h-full opacity-100 ${overflow ? 'overflow-visible': 'overflow-hidden'}`]: open.includes(id),
          [`${classes.details} max-h-0 opacity-0 overflow-hidden`]: !open.includes(id),
        })}>
        {children}
      </div>
    </div>
  )
})

PanelBase.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  header: PropTypes.any.isRequired,
  ExpandIcon: PropTypes.elementType,
  CompressIcon: PropTypes.elementType,
  alignIcon: PropTypes.string,
  open: PropTypes.array,
  setOpen: PropTypes.func,
  classes: PropTypes.object,
  onChange: PropTypes.func,
  overflow: PropTypes.bool,
}
PanelBase.defaultProps = {
  open: [],
  setOpen: () => {},
  classes: { header: '', details: 'h-10', icon: '', iconRoot: '' },
  onChange: () => {},
  ExpandIcon: null,
  CompressIcon: null,
  alignIcon: 'start',
  overflow: false,
}

PanelBase.displayName = 'PanelBase'
export default PanelBase
