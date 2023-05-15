import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getTailwindConfigColor } from '../../utils/tailwind-config-color'
import { concatTargetColor } from '../../utils/concat-color'

import { RangeSliderBase } from '../../base-components'

import './range-slider-label.css'


const RangeSliderLabel = ({
  classes = {
    sliderContainer: '',
    thumb: '',
    slider: '',
    sliderTrack: '',
    sliderRange: '',
    label: '',
    tooltip: '',
  },
  width = 'w-48',
  color = {
    thumb: 'interactive',
    sliderTrack: 'interactive',
    sliderRange: 'interactive',
    tooltip: 'interactive',
  },
  min,
  max,
  values,
  onChange,
  labelFormat = [],
  tooltipFormat = [],
  showLabel = true,
  showTooltip = true,
  singleSlider = false,
  disabled = false,
  ...rest
}) => {
  const tooltipColor = concatTargetColor(color.tooltip, ['bg'], [500])
  //pseudo elements dynamic color
  const tooltipTailColor = getTailwindConfigColor(`${color.tooltip}-500`)

  const sliderClasses = Object.freeze({
    sliderContainer: classes.sliderContainer,
    thumb: classes.thumb,
    slider: classes.slider,
    sliderTrack: classes.sliderTrack,
    sliderRange: classes.sliderRange,
    thumbColor: color.thumb,
    trackColor: color.sliderTrack ? color.sliderTrack : 'bg-interactive-200',
    rangeColor: color.sliderRange ? color.sliderRange : 'bg-interactive-500',
  })

  const sliderLabelClasses = Object.freeze({
    label: `${classes.label ? classes.label : 'pt-5 text-xs'}`,
    tooltip: `z-10 ${classes.tooltip ? classes.tooltip : 'py-1 px-3 text-white rounded-sm '}`,
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
      values={singleSlider ? values : [values[0], values[1]]}
      onChange={onChange}
      width={width}
      singleSlider={singleSlider}
      disabled={disabled}
      {...rest}
    >
      {showLabel &&
      <div className={'label-container flex justify-between'}>
        <label className={`left-value ${sliderLabelClasses.label}`}>{labelFormat[0] || min}</label>
        <label className={`right-value -mr-1 ${sliderLabelClasses.label}`}>{labelFormat[1] || max}</label>
      </div>
      }
      {showTooltip &&
      <>
        <output
          className={`left-tooltip ${sliderLabelClasses.tooltip} ${color.tooltip ? tooltipColor : 'bg-interactive-500'}`}
          name='tooltip'
          style={{ '--tooltip-tail-color': `${tooltipTailColor} transparent transparent transparent` }}
        >
          {tooltipFormat[0] || (singleSlider ? values : values[0])}
        </output>
        {!singleSlider &&
          <output
            className={`right-tooltip ${sliderLabelClasses.tooltip} ${color.tooltip ? tooltipColor : 'bg-interactive-500'}`}
            name='tooltip'
            style={{ '--tooltip-tail-color': `${tooltipTailColor} transparent transparent transparent` }}
          >
            {tooltipFormat[1] || values[1]}
          </output>
        }
      </>
      }
    </RangeSliderBase>
  )
}

RangeSliderLabel.propTypes = {
  classes: PropTypes.exact({
    sliderContainer: PropTypes.string,
    thumb: PropTypes.string,
    thumbColor: PropTypes.string,
    slider: PropTypes.string,
    sliderTrack: PropTypes.string,
    sliderRange: PropTypes.string,
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
  values: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  labelFormat: PropTypes.arrayOf(PropTypes.number || PropTypes.string),
  tooltipFormat: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number || PropTypes.string),
    PropTypes.number,
  ]),
  showLabel: PropTypes.bool,
  showTooltip: PropTypes.bool,
  singleSlider: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default RangeSliderLabel
