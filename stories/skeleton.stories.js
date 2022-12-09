import React from 'react'

import { Skeleton } from '../src'


export default {
  title: 'Skeleton Layout',
  component: Skeleton,
}

export const Default = () => (
  <div style={{ width: '500px' }}>
    <Skeleton />
  </div>
)

export const Bar = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='bar'/>
  </div>
)
