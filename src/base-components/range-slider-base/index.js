import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getTailwindConfigColor } from '../../utils/tailwind-config-color'
import { concatTargetColor } from '../../utils/concat-color'

import './range-slider-base.css'


const RangeSliderBase = forwardRef(({ classes, min, max, values, onChange, width, children, disabled, ...rest }, ref) => {
  const sliderTrackColor = concatTargetColor(classes.sliderTrack, ['bg'], [200])
  const sliderRangeColor = concatTargetColor(classes.sliderRange, ['bg'], [500])
  //pseudo elements dynamic color
  const thumbColor = getTailwindConfigColor(`${classes.thumbColor}-500`)

  const sliderClasses = Object.freeze({
    sliderContainer: `${width} relative my-2.5 h-px`,
    thumb: `${width}`,
    thumbColor: thumbColor ? thumbColor : '#000',
    slider: 'h-1 rounded-sm',
    sliderTrack: `${classes.sliderTrack ? sliderTrackColor : 'bg-secondary-400'}`,
    sliderRange: `${classes.sliderRange ? sliderRangeColor : 'bg-black'}`,
  })

  const [minVal, setMinVal] = useState(values[0])
  const [maxVal, setMaxVal] = useState(values[1])

  const minValRef = useRef(values[0])
  const maxValRef = useRef(values[1])
  const range = useRef(null)

  const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to change from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  return (
    <div ref={ref} className={`slider-container ${sliderClasses.sliderContainer}`} {...rest}>      
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal - 1)
          setMinVal(value)
          onChange && onChange(event, [value, maxVal])
          minValRef.current = value
        }}
        className={`thumb thumb-left ${sliderClasses.thumb} ${disabled && 'slider-disabled'}`}
        style={{ 
          '--slider-thumb-color': sliderClasses.thumbColor && sliderClasses.thumbColor,
          zIndex: minVal > max - 100 && '5',
        }}
        disabled={disabled}
      />
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
    thumbColor: PropTypes.string,
    sliderTrack: PropTypes.string,
    sliderRange: PropTypes.string,
  }),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

RangeSliderBase.defaultProps = {
  classes: {
    thumbColor: '',
    sliderTrack: '',
    sliderRange: '',
  },
  width: 'w-48',
  disabled: false,
}

RangeSliderBase.displayName = 'RangeSliderBase'

export default RangeSliderBase
