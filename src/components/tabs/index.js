import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Panel from './panel'
import { makeStyles } from '../../utils/make-styles'


const Tabs = forwardRef(({
  classes = {
    root: '',
    header: '',
    headerText: '',
    selectedTab: '',
    panel: '',
  },
  children,
  defaultSelected,
  ...props
}, ref) => {
  const [selected, setSelected] = useState(defaultSelected)

  const styles = makeStyles({
    tabsContainer: {
      paddingBottom: '0.563rem',
      borderBottom: '0.188rem solid #EAEAEA',
    },
    selectedPanel: {
      textDecoration: 'underline',
      textUnderlineOffset: '0.923rem',
      textDecorationThickness: '0.188rem',
      textDecorationColor: '#F6B747',
    },
  })

  const tabsClasses = Object.freeze({
    root: `tabs__root ${classes.root}`,
    header: `tabs__header-container ${classes.header} ${styles.tabsContainer} flex flex-row gap-10`,
    headerText: `tabs__header-text-container ${classes.headerText}`,
    selectedTab: `tabs__selected-container ${classes.selectedTab} ${styles.selectedPanel}`,
    panel: `tabs__panel-container ${classes.panel}`,
  })

  const header = (id) => makeStyles({
    header: {
      cursor: selected !== id ? 'pointer' : 'default',
    },
  })

  const handleClick = (id) => setSelected(id)

  return (
    <div className={`${tabsClasses.root}`} {...props}>
      <div className={tabsClasses.header}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const headerStyles = header(child.props.id)
            return (
              <div
                ref={ref}
                onClick={() => handleClick(child.props.id)}
                className={`${tabsClasses.headerText} ${selected === child.props.id && tabsClasses.selectedTab} ${headerStyles.header}`}
              >
                {child.props.id}
              </div>
            )
          }
        })}
      </div>
      <div className={`${tabsClasses.panel}`}>
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child)
          && (child.type.__docgenInfo?.displayName === 'Panel' || child.type.displayName === 'Panel')
          && child.props.id === selected
          ) {
            return React.cloneElement(child)
          }})
        }
      </div>
    </div>
  )
})

Tabs.propTypes = {
  onClick: PropTypes.func,
  defaultSelected: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
}

Tabs.Panel = Panel
Tabs.displayName = 'Tabs'

export default Tabs
