import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import ButtonBase from './button-base'


const useTabs = ({ tabs, index }) => {
  const [current, setCurrent] = useState(index)
  const tabMenu = tabs.map(({ tab }) => tab)
  const tabContent = tabs[current].content

  return { tabMenu, tabContent, onTabChange: setCurrent }
}

const TabBase = ({ classes, tabs, index, direction, onChange }) => {
  const { tabMenu, tabContent, onTabChange } = useTabs({ tabs, index })
  const _onChange = (i) => {
    onTabChange(i)
    onChange({ tab: tabMenu[i], content: tabContent }, i)
  }

  return (
    <div className={clsx(classes.root, {
      'flex flex-col': direction === 'horizontal',
      'flex flex-row': direction === 'vertical',
    })}>
      <ul className={clsx(classes.tabList, {
        'flex flex-row': direction === 'horizontal',
      })}>{tabMenu.map((tab, index) => (
          <li key={index} className={classes.tabListItem}>
            <ButtonBase classes={classes.tabButtonBase} onClick={() => _onChange(index)}>{tab}</ButtonBase>
          </li>
        ))}</ul>
      <div className={classes.tabContent}>{tabContent}</div>
    </div>
  )
}

TabBase.propTypes = {
  tabs: PropTypes.array.isRequired,
  classes: PropTypes.object,
  index: PropTypes.number,
  direction: PropTypes.string,
  onChange: PropTypes.func,
}
TabBase.defaultProps = {
  classes: { root: '', tabList: '', tabListItem: '', tabButtonBase: {}, tabContent: '' },
  index: 0,
  direction: 'horizontal',
  onChange: () => {},
}

export default TabBase
