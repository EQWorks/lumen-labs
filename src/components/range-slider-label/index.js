import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { RangeSliderBase } from '../../base-components'

import './range-slider-label.css'
import { getTailwindConfigColor } from '../../hooks/tailwind-config-color'


const RangeSliderLabel = ({ classes, color, min, max, values, onChange, width, showLabel, showTooltip, disabled }) => {
  //pseudo elements dynamic color
  const tooltipTailColor = getTailwindConfigColor(`${color.tooltip}-500`)

  const sliderClasses = Object.freeze({
    thumbColor: color.thumb,
    sliderTrack: color.sliderTrack ? color.sliderTrack : 'bg-interactive-200',
    sliderRange: color.sliderRange ? color.sliderRange : 'bg-interactive-500',
  })

  const sliderLabelClasses = Object.freeze({
    label: `${classes.label ? classes.label : 'pt-5 text-xs'}`,
    tooltip: `${classes.tooltip ? classes.tooltip : 'py-1 px-3 text-white rounded-sm z-10'}`,
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
      <div className={'label-container flex justify-between'}>
        <label className={`left-value ml-1 ${sliderLabelClasses.label}`}>{min}</label>
        <label className={`right-value -mr-1 ${sliderLabelClasses.label}`}>{max}</label>
      </div>      
      }
      {showTooltip &&
      <>
        <output 
          className={`left-tooltip ${sliderLabelClasses.tooltip} bg-${color.tooltip ? color.tooltip : 'interactive'}-500`} 
          name='tooltip' 
          style={{ '--tooltip-tail-color': `${tooltipTailColor} transparent transparent transparent` }}
        >
          {values[0]}
        </output>
        <output 
          className={`right-tooltip ${sliderLabelClasses.tooltip} bg-${color.tooltip ? color.tooltip : 'interactive'}-500`} 
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
  onChange: PropTypes.func.isRequired,
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
    thumb: 'interactive',
    sliderTrack: 'interactive',
    sliderRange: 'interactive',
    tooltip: 'interactive',
  },
  width: 'w-48',
  showLabel: true,
  showTooltip: true,
  disabled: false,
}

export default RangeSliderLabel
