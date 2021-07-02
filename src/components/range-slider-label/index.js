import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { RangeSliderBase } from '../../base-components'

import './range-slider-label.css'
import { getTailwindConfigColor } from '../../hooks/getTailwindConfigColor'


const RangeSliderLabel = ({ classes, color, min, max, values, onChange, width, showLabel, showTooltip, disabled }) => {
  //pseudo elements dynamic color
  const tooltipTailColor = getTailwindConfigColor(color.tooltip)

  const sliderClasses = Object.freeze({
    thumbColor: color.thumb,
    sliderTrack: color.sliderTrack ? `bg-${color.sliderTrack}` : 'bg-blue-200',
    sliderRange: color.sliderRange ? `bg-${color.sliderRange}` : 'bg-blue-500',
  })

  const sliderBaseRef = useRef(null)
  
  useEffect(() => {
    let thumb = sliderBaseRef.current.querySelectorAll('.thumb')
    let tooltip = sliderBaseRef.current.querySelectorAll('output[name="tooltip"]')

    setTooltip(thumb, tooltip)
  })

  const setTooltip = (thumb, tooltip) => {
    thumb.forEach((el, i) => {
      const val = el.value
      let min = el.min ? el.min : 0
      let max = el.max ? el.max : 100
      let newVal = Number(((val - min) * 100) / (max - min))
      
      tooltip[i].style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`

      el.addEventListener('mouseover', () => {
        tooltip[i].style.display = 'initial'
      })

      el.addEventListener('mouseleave', () => {
        tooltip[i].style.display = 'none'
      })
    })
  }
  
  return (
    <RangeSliderBase 
      ref={sliderBaseRef} 
      classes={sliderClasses} 
      min={min} 
      max={max} 
      values={[values[0], values[1]]} 
      onChange={onChange} 
      width={width}
      disabled={disabled}
    >
      {showLabel && 
      <div className={'label-container flex justify-between pt-5 text-xs'}>
        <label className={`left-value ml-1 ${classes.label}`}>{min}</label>
        <label className={`right-value -mr-1 ${classes.label}`}>{max}</label>
      </div>      
      }
      {showTooltip &&
      <>
        <output 
          className={`left-tooltip ${classes.tooltip} bg-${color.tooltip ? color.tooltip : 'blue-500'}`} 
          name='tooltip' 
          style={{ '--tooltip-tail-color': `${tooltipTailColor} transparent transparent transparent` }}
        >
          {values[0]}
        </output>
        <output 
          className={`right-tooltip ${classes.tooltip} bg-${color.tooltip ? color.tooltip : 'blue-500'}`} 
          name='tooltip'
          style={{ '--tooltip-tail-color': `${tooltipTailColor} transparent transparent transparent` }}
        >
          {values[1]}
        </output>
      </>
      }
    </RangeSliderBase>
  )
}

RangeSliderLabel.propTypes = {
  classes: PropTypes.exact({
    label: PropTypes.string,
    tooltip: PropTypes.string,
  }),
  width: PropTypes.string,
  color: PropTypes.exact({
    thumb: PropTypes.string,
    sliderTrack: PropTypes.string,
    sliderRange: PropTypes.string,
    tooltip: PropTypes.string,
  }),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func,
  showLabel: PropTypes.bool,
  showTooltip: PropTypes.bool,
  disabled: PropTypes.bool,
}

RangeSliderLabel.defaultProps = {
  classes: {
    label: '',
    tooltip: 'py-1 px-3 rounded-sm text-white',
  },
  color: {
    thumb: 'blue-500',
    sliderTrack: 'blue-200',
    sliderRange: 'blue-500',
    tooltip: 'blue-500',
  },
  width: 'w-48',
  showLabel: true,
  showTooltip: true,
  disabled: false,
}

export default RangeSliderLabel
