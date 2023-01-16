import React, { useState } from 'react'

import { Radio, RadioGroup } from '../src'


export default {
  title: 'Radio',
  component: Radio,
}

export const Default = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const handleChange = (event) => {
    setSelectedColor(event.target.value)
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
  const handleChange = (event) => {
    setSelectedColor(event.target.value)
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

export const AlignLeft = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const handleChange = (event) => {
    setSelectedColor(event.target.value)
  }
  return (
    <div>
      <RadioGroup name='colors' selected={selectedColor} labelAlign='left'>
        <Radio label='red' value='red' handleChange={handleChange} />
        <Radio label='green' value='green' handleChange={handleChange} />
        <Radio label='yellow' value='yellow' handleChange={handleChange} disabled />
      </RadioGroup>
      <h1>The selected colour is: {selectedColor}</h1>
    </div>
  )
}

export const HorizontalAlignLeft = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const handleChange = (event) => {
    setSelectedColor(event.target.value)
  }
  return (
    <div>
      <RadioGroup name='colors' selected={selectedColor} align='horizontal' labelAlign='left'>
        <Radio label='red' value='red' handleChange={handleChange} />
        <Radio label='green' value='green' handleChange={handleChange} />
        <Radio label='yellow' value='yellow' handleChange={handleChange} />
      </RadioGroup>
      <h1>The selected colour is: {selectedColor}</h1>
    </div>
  )
}