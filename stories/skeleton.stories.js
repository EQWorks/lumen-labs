import React from 'react'

import { Skeleton } from '../src'


export default {
  title: 'Skeleton',
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

export const Map = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='map'/>
  </div>
)

export const Pie = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='pie'/>
  </div>
)

export const Stat = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='stat'/>
  </div>
)

export const Line = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='line'/>
  </div>
)

export const Pyramid = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='pyramid'/>
  </div>
)

export const Barline = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view='barline'/>
  </div>
)
