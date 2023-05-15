import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getTailwindConfigColor } from '../../utils/tailwind-config-color'
import { concatTargetColor } from '../../utils/concat-color'

import './range-slider-base.css'


const RangeSliderBase = forwardRef(({
  classes = {
    sliderContainer: '',
    thumb: '',
    thumbColor: '',
    slider: '',
    sliderTrack: '',
    sliderRange: '',
    trackColor: '',
    rangeColor: '',
  },
  min,
  max,
  values,
  onChange,
  width = 'w-48',
  singleSlider = false,
  children,
  disabled = false,
  ...rest
}, ref) => {
  const sliderTrackColor = concatTargetColor(classes.trackColor, ['bg'], [100])
  const sliderRangeColor = concatTargetColor(classes.rangeColor, ['bg'], [500])
  //pseudo elements dynamic color
  const thumbColor = getTailwindConfigColor(`${classes.thumbColor}-500`)

  const sliderClasses = Object.freeze({
    sliderContainer: `${width} relative my-2.5 h-px ${classes.sliderContainer}`,
    thumb: `${width} ${classes.thumb}`,
    thumbColor: thumbColor ? thumbColor : '#000',
    slider: `h-1 rounded-sm ${classes.slider}`,
    sliderTrack: `${classes.sliderTrack} ${classes.trackColor ? sliderTrackColor : 'bg-secondary-300'}`,
    sliderRange: `${classes.sliderRange} ${classes.rangeColor ? sliderRangeColor : 'bg-black'}`,
  })

  const [minVal, setMinVal] = useState(singleSlider ? values : values[0])
  const [maxVal, setMaxVal] = useState(values[1])

  const minValRef = useRef(values[0])
  const maxValRef = useRef(values[1])
  const range = useRef(null)

  const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (!singleSlider) {
      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    } else {
      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${100 - minPercent}%`
      }
    }
  }, [minVal, singleSlider, getPercent])

  // Set width of the range to change from the right side
  useEffect(() => {
    if (!singleSlider) {
      const minPercent = getPercent(minValRef.current)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, singleSlider, getPercent])

  return (
    <div ref={ref} className={`slider-container ${sliderClasses.sliderContainer}`} {...rest}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = singleSlider ? Number(event.target.value) : Math.min(Number(event.target.value), maxVal - 1)
          setMinVal(value)
          onChange && singleSlider ? onChange(event, value) : onChange(event, [value, maxVal])
          minValRef.current = value
        }}
        className={`thumb thumb-left ${sliderClasses.thumb} ${disabled && 'slider-disabled'}`}
        style={{
          '--slider-thumb-color': sliderClasses.thumbColor && sliderClasses.thumbColor,
          zIndex: minVal > max - 100 && '5',
        }}
        disabled={disabled}
      />
      {!singleSlider &&
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={event => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
            onChange && onChange(event, [minVal, value])
            maxValRef.current = value
          }}
          className={`thumb thumb-right ${sliderClasses.thumb} ${disabled && 'slider-disabled'}`}
          style={{
            '--slider-thumb-color': sliderClasses.thumbColor && sliderClasses.thumbColor,
          }}
          disabled={disabled}
        />
      }
      <div className={`slider-track absolute ${sliderClasses.slider} ${sliderClasses.sliderTrack} ${disabled && 'slider-disabled'}`}/>
      <div
        ref={range}
        className={`slider-range absolute ${sliderClasses.slider} ${sliderClasses.sliderRange} ${disabled && 'slider-disabled'}`}
      />
      { children && children }
    </div>
  )
})

RangeSliderBase.propTypes = {
  classes: PropTypes.exact({
    sliderContainer: PropTypes.string,
    thumb: PropTypes.string,
    thumbColor: PropTypes.string,
    slider: PropTypes.string,
    sliderTrack: PropTypes.string,
    sliderRange: PropTypes.string,
    trackColor: PropTypes.string,
    rangeColor: PropTypes.string,
  }),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  values: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string,
  children: PropTypes.node,
  singleSlider: PropTypes.bool,
  disabled: PropTypes.bool,
}

RangeSliderBase.displayName = 'RangeSliderBase'

export default RangeSliderBase
