import React from 'react'

import { RangeSliderBase } from '../src/base-components'


export default {
  title: 'Range Slider',
  component: RangeSliderBase,
}

export const Base = () => {
  
  return (
    <div>
      <div className="container">hello</div>
      <RangeSliderBase min={0} max={1000} values={[200, 1000]} />
      <div className="container">test</div>
    </div>
  )
}

