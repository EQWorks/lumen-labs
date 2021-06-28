import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import './slider-base.css'


const SliderBase = ({ min, max, width, showValue }) => {
  const sliderClasses = Object.freeze({
    thumb: `${width} h-0 absolute pointer-events-none outline-none`,
    slider: `${width} relative`,
    sliderContainer: `${showValue ? 'h-9' : 'h-px'} mt-2.5`,
  })

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to change from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className={`slider-container ${sliderClasses.sliderContainer}`}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`thumb thumb-left ${sliderClasses.thumb}`}
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`thumb thumb-right ${sliderClasses.thumb}`}
      />
      <div className={`slider ${sliderClasses.slider}`}>
        <div className="slider_track" />
        <div ref={range} className="slider_range" />
        {
          showValue && (
            <>
              <div className="slider_left-value">{minVal}</div>
              <div className="slider_right-value">{maxVal}</div>
            </>
          )
        }
      </div>
    </div>
  );
};

SliderBase.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  width: PropTypes.string,
  showValue: PropTypes.bool
};

SliderBase.defaultProps = {
  width: 'w-48',
  showValue: true,
}

export default SliderBase;
