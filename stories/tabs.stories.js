import React from 'react'

import { Tabs } from '../src'


export default {
  title: 'Tabs',
  component: Tabs,
}

export const Default = () => {
  return (
    <Tabs
      defaultSelected='Panel One'
    >
      <Tabs.Panel id='Panel One'>
        <h1>This is the first panel</h1>
      </Tabs.Panel>
      <Tabs.Panel id='Panel Two'>
        <h2>This is the second panel</h2>
      </Tabs.Panel>
      <Tabs.Panel id='Panel Three'>
        <h2>This is the third panel</h2>
      </Tabs.Panel>
    </Tabs>
  )
}
