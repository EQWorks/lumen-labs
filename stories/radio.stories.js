import React, { useState } from 'react'

import { Radio, RadioGroup, makeStyles } from '../src'


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

const useStyling = (color) => makeStyles({
  radioInput: {
    '&:checked': {
      borderColor: '#289DC8',
      backgroundColor: '#289DC8',
      '&:hover': {
        borderColor: '#248cb3',
        backgroundColor: '#248cb3',
      },
      '&:active': {
        borderColor: '#207c9e',
        backgroundColor: '#207c9e',
      },
    },
  },
  radioLabel: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    letterSpacing: '0.25px',
    color: color,
  },
})

export const CustomStyling = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const handleChange = (event) => {
    setSelectedColor(event.target.value)
  }
  return (
    <div>
      <RadioGroup name='colors' selected={selectedColor} align='horizontal' labelAlign='left'>
        <Radio label='red' value='red' handleChange={handleChange} classes={useStyling('red')}/>
        <Radio label='green' value='green' handleChange={handleChange} classes={useStyling('green')}/>
        <Radio label='blue' value='blue' handleChange={handleChange} classes={useStyling('blue')}/>
      </RadioGroup>
      <h1>The selected colour is: <span style={{ color: selectedColor }}>{selectedColor}</span></h1>

    </div>
  )
}
