import React, { useState } from 'react'

import { Radio, RadioGroup } from '../src'


export default {
  title: 'Radio',
  component: Radio,
}

export const Default = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const handleChange = (color) => {
    setSelectedColor(color)
  }
  return (
    <div>
      <RadioGroup name='colors' selected={selectedColor}>
        <Radio label='red' value='red' handleChange={handleChange} />
        <Radio label='green' value='green' handleChange={handleChange} />
        <Radio label='yellow' value='yellow' handleChange={handleChange} disabled />
      </RadioGroup>
      <h1>The selected colour is: {selectedColor}</h1>
    </div>
  )
}

export const Horizontal = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const handleChange = (color) => {
    setSelectedColor(color)
  }
  return (
    <div>
      <RadioGroup name='colors' selected={selectedColor} align='horizontal'>
        <Radio label='red' value='red' handleChange={handleChange} />
        <Radio label='green' value='green' handleChange={handleChange} />
        <Radio label='yellow' value='yellow' handleChange={handleChange} disabled />
      </RadioGroup>
      <h1>The selected colour is: {selectedColor}</h1>
    </div>
  )
}
