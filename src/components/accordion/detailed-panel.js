import React, { useMemo, forwardRef, useCallback, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import PropTypes from 'prop-types'
import clsx from 'clsx'


const DetailedPanel = forwardRef(({
  children,
  classes = {
    detailedRoot: '',
    detailedInfo: '',
    iconRoot: '',
    details: '',
  },
  id,
  open = [],
  header = null,
  ExpandIcon = null,
  CompressIcon = null,
  setOpen = () => {},
  onChange = () => {},
}, ref) => {
  const detailedPanelClasses = Object.freeze({
    detailedRoot: `detailedPanel__root-container ${classes.detailedRoot} shadow-light-50`,
    detailedInfo: `detailedPanel__info-container ${classes.detailedInfo} cursor-pointer flex items-center`,
    iconRoot: `detailedPanel__icon-container ${classes.iconRoot} transition-transform duration-300 ease-in-out origin-center transform h-5`,
    details: `detailedPanel__details-container ${classes.details} transition-opacity ease-in-out duration-300`,
  })

  const Icon = open.includes(id) ? CompressIcon : ExpandIcon ?? CompressIcon
  const renderIcon = () => {
    if (Icon) {
      return (
        <Icon className={clsx(detailedPanelClasses.iconRoot, {
          'rotate-0': open.includes(id),
          '-rotate-90': !open.includes(id) && !CompressIcon,
        })} />
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }

  const [headerHeight, setHeaderHeight] = useState()
  const headerRef = useCallback((node) => setHeaderHeight(node?.getBoundingClientRect().height), [])
  const { height: detailsHeight, ref: detailsRef } = useResizeDetector()
  const height = useMemo(() => headerHeight + detailsHeight, [headerHeight, detailsHeight])

  return (
    <div
      ref={ref}
      style={height ? { height } : {}}
      className={detailedPanelClasses.detailedRoot}
    >
      <div
        tabIndex={0}
        ref={headerRef}
        onClick={handleClick}
        onKeyDown={(e) => handleKeyDown(e)}
        className={detailedPanelClasses.detailedInfo}
      >
        {header}
        {renderIcon()}
      </div>
      <div
        ref={detailsRef}
        aria-hidden={!open.includes(id)}
        tabIndex={open.includes(id) ? 0 : -1}
        className={clsx(detailedPanelClasses.details, {
          ['max-h-full opacity-100']: open.includes(id),
          ['max-h-0 opacity-0 overflow-hidden hidden']: !open.includes(id),
        })}>
        {children}
      </div>
    </div>
  )
})

DetailedPanel.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
  header: PropTypes.elementType,
  ExpandIcon: PropTypes.elementType,
  CompressIcon: PropTypes.elementType,
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  open: PropTypes.array,
  setOpen: PropTypes.func,
  onChange: PropTypes.func,
}

DetailedPanel.displayName = 'DetailedPanel'

export default DetailedPanel
