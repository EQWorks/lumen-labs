import React, { useState } from 'react'

import { RangeSliderBase } from '../src/base-components'
import RangeSliderLabel from '../src/components/range-slider-label'


export default {
  title: 'Range Slider',
  component: RangeSliderBase,
}

export const Base = () => {
  const [minValue, setMinValue] = useState(200)
  const [maxValue, setMaxValue] = useState(1000)
  
  const handleOnChange = (e, values) => {
    setMinValue(values[0])
    setMaxValue(values[1])
  }

  return (
    <RangeSliderBase min={0} max={1000} values={[minValue, maxValue]} onChange={handleOnChange}/>
  )
}

export const Label = () => {
  const [minValue, setMinValue] = useState(200)
  const [maxValue, setMaxValue] = useState(1000)
  
  const handleOnChange = (e, values) => {
    setMinValue(values[0])
    setMaxValue(values[1])
  }

  return (
    <div className="container h-32 flex items-center">
      <RangeSliderLabel min={0} max={1000} values={[minValue, maxValue]} onChange={handleOnChange}/>
    </div>
  )
}

export const Disabled = () => {
  const [minValue, setMinValue] = useState(200)
  const [maxValue, setMaxValue] = useState(1000)
  
  const handleOnChange = (e, values) => {
    setMinValue(values[0])
    setMaxValue(values[1])
  }

  return (
    <>
      <span>Base</span>
      <RangeSliderBase min={0} max={1000} values={[minValue, maxValue]} onChange={handleOnChange} disabled={true}/>
      <div className="container h-32 flex flex-col justify-center">
        <span>Label</span>
        <RangeSliderLabel min={0} max={1000} values={[minValue, maxValue]} onChange={handleOnChange} disabled={true}/>
      </div>
    </>
  )
}

