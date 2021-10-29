import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'


const PanelBase = React.forwardRef(({ children, classes, id, header, ExpandIcon, CompressIcon, alignIcon, open, setOpen, onChange }, ref) => {
  const detailsNoHeight = classes.details.split(/\bh-\w+|\bp-\w+|\bpy-\w+/).map((r) => r.trim()).filter((r) => r).join(' ')
  const Icon = open.includes(id) ? ExpandIcon : CompressIcon ? CompressIcon : ExpandIcon
  const renderIcon = () => {
    if (Icon) {
      return (
        <span className={`${classes.iconRoot}`}>
          <Icon className={clsx(`${classes.icon} transition-transform duration-300 ease-in-out origin-center transform`, {
            'rotate-0': open.includes(id),
            '-rotate-90': !open.includes(id),
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

  return (
    <div ref={ref}>
      <div
        className={clsx(`${classes.header} cursor-pointer flex flex-row`, {
          'justify-between': alignIcon === 'end',
        })}
        onClick={handleClick}
      >
        {alignIcon === 'start' && renderIcon()}
        <span className='inline-block align-baseline'>{header}</span>
        {alignIcon === 'end' && renderIcon()}
      </div>
      <div className={clsx('transition-height ease-in-out duration-300 overflow-y-hidden', {
        [classes.details]: open.includes(id),
        [`${detailsNoHeight} h-0`]: !open.includes(id),
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
}
PanelBase.defaultProps = {
  open: [],
  setOpen: () => {},
  classes: { header: '', details: 'h-10', icon: '', iconRoot: '' },
  onChange: () => {},
  ExpandIcon: null,
  CompressIcon: null,
  alignIcon: 'start',
}

PanelBase.displayName = 'PanelBase'
export default PanelBase
