import React from 'react'

import { Skeleton } from '../src'


export default {
  title: 'Skeleton',
  component: Skeleton,
}

const SKELETON_TYPE = [
  'bar',
  'map',
  'pie',
  'stat',
  'line',
  'text',
  'pyramid',
  'barline',
].reduce((a, v) => ({ ...a, [v]: v }), {})

export const Default = () => (
  <div style={{ width: '500px' }}>
    <Skeleton />
  </div>
)

export const Bar = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.bar}/>
  </div>
)

export const Map = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.map}/>
  </div>
)

export const Pie = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.pie}/>
  </div>
)

export const Stat = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.stat}/>
  </div>
)

export const Line = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.line}/>
  </div>
)

export const Pyramid = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.pyramid}/>
  </div>
)

export const Barline = () => (
  <div style={{ width: '500px' }}>
    <Skeleton view={SKELETON_TYPE.barline}/>
  </div>
)

export const Text = () => (
  <div style={{ width: '500px', height: '40px' }}>
    <Skeleton view={SKELETON_TYPE.text}/>
  </div>
)
