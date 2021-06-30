import React from 'react'

import { TabBase } from '../src/base-components'


export default {
  title: 'Tabs',
  component: TabBase,
  argTypes: { onChange: { action: 'clicked' } },
}

const tabs = [
  {
    tab: 'Tab One',
    content: (<div>Content for tab ONE.</div>),
  },
  {
    tab: 'Tab Two',
    content: (<div>Content for tab TWO.</div>),
  },
  {
    tab: 'Tab Three',
    content: (<div>Content for tab THREE.</div>),
  },
]

/** -- props (TabBase):
 * [classes] - object, custom styling supported keys:
 *    root: TabaBase component div wrapper
 *    tabList: ul element of tab list menu
 *    tabListItem: li element of tab list menu
 *    tabButtonBase: ButtonBase classes for tab menu
 *    tabContent: content container div wrapper
 * [tabs] - array, tabs with tab label + tab content
 * [index] - number, specify initial active index
 * [direction] - string, direction of tabs: horizontal/vertical
 * [onChange] - function, returns current active tab (tab, index)
 */

const Template = (args) => <TabBase {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: tabs,
  index: 1,
  classes: { tabListItem: 'pr-2' },
}
