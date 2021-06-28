import React from 'react'

import { SliderBase } from '../src/base-components'


export default {
  title: 'Slider',
  component: SliderBase,
}

export const Base = () => {

  return (
    <div className="container">
      <div className="container">hello</div>
      <SliderBase min={0} max={1000}/>
      <div className="container">test</div>
    </div>
  )
}

