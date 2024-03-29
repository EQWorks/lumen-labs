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
  const [minValue, setMinValue] = useState(0)
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

export const CustomColor = () => {
  const [minValue, setMinValue] = useState(200)
  const [maxValue, setMaxValue] = useState(1000)

  const handleOnChange = (e, values) => {
    setMinValue(values[0])
    setMaxValue(values[1])
  }

  const classes = [
    {
      thumbColor: 'success',
      trackColor: 'success',
      rangeColor: 'success',
    },
    {
      thumbColor: 'warning',
      trackColor: 'warning',
      rangeColor: 'warning',
    },
  ]

  const color = {
    thumb: 'error',
    sliderTrack: 'error',
    sliderRange: 'error',
    tooltip: 'success',
  }

  return (
    <>
      <div className="container h-32 flex items-center">
        <RangeSliderLabel min={0} max={1000} values={[minValue, maxValue]} onChange={handleOnChange} color={color}/>
      </div>
      {classes.map((data, index) => {
        return (
          <div key={`slider-container-${index}`} className="container h-10 flex items-center">
            <RangeSliderBase min={0} max={1000} values={[200, 800]} classes={data}/>
          </div>
        )
      })}
    </>
  )
}

export const SingleSlider = () => {
  const [sliderValue, setSliderValue] = useState(0)

  const handleOnChange = (e, values) => {
    setSliderValue(values)
  }

  return (
    <div className="container h-32 flex items-center">
      <RangeSliderLabel min={0} max={1000} values={sliderValue} onChange={handleOnChange} singleSlider/>
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

