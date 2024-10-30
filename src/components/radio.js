import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'
import { getTailwindConfigColor } from '../utils/tailwind-config-color'


const customClasses = makeStyles({
  radioLabel: {
    fontFamily: 'PT Sans',
    fontSize: '0.75rem',
  },
  radioInput: {
    appearance: 'none',
    border: `0.15rem solid ${getTailwindConfigColor('secondary-500')}`,
    placeContent: 'center',
    '&::after': {
      content: '""',
      display: 'block',
      borderRadius: '50%',
      width: '0.375rem',
      height: '0.375rem',
    },

    // Unchecked
    '&:hover': {
      borderColor: getTailwindConfigColor('interactive-300'),
      backgroundColor: getTailwindConfigColor('interactive-50'),
    },
    '&:active': {
      borderColor: getTailwindConfigColor('interactive-400'),
      backgroundColor: getTailwindConfigColor('interactive-50'),
    },

    // Checked
    '&:checked': {
      borderColor: getTailwindConfigColor('primary-500'),
      backgroundColor: getTailwindConfigColor('primary-500'),
      '&::after': {
        backgroundColor: getTailwindConfigColor('secondary-50'),
      },
      '&:hover': {
        borderColor: getTailwindConfigColor('primary-600'),
        backgroundColor: getTailwindConfigColor('primary-600'),
      },
      '&:active': {
        borderColor: getTailwindConfigColor('primary-700'),
        backgroundColor: getTailwindConfigColor('primary-700'),
      },
    },

    // Disabled
    '&:disabled': {
      borderColor: getTailwindConfigColor('secondary-400'),
      backgroundColor: getTailwindConfigColor('secondary-300'),
      '&:checked': {
        backgroundColor: getTailwindConfigColor('secondary-400'),
        '&:hover': {
          borderColor: getTailwindConfigColor('secondary-400'),
          backgroundColor: getTailwindConfigColor('secondary-400'),
        },
        '&::after': {
          backgroundColor: getTailwindConfigColor('secondary-300'),
        },
      },
    },
  },
})

const radioClasses = Object.freeze({
  container: 'flex gap-1.5 items-center',
  input: 'm-0 w-4 h-4 rounded-full grid',
})

const Radio = forwardRef(({
  label,
  value,
  handleChange,
  name = '',
  align = 'right',
  disabled = false,
  selected = '',
  direction = '',
  classes = {
    container: '',
    radioInput: '',
    radioLabel: '',
  },
  ...rest
}, ref) => {
  const labelPosition = align === 'left' ? 'flex-row-reverse' : 'flex-row'
  const spacing = direction === 'flex-col' ? 'mb-2' : 'mr-2'

  const {
    container,
    radioInput,
    radioLabel,
  } = classes

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleChange(e)
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      moveFocus(1) // Move to the next radio
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      moveFocus(-1) // Move to the previous radio
    }
  }

  const moveFocus = (direction) => {
    const radios = Array.from(document.querySelectorAll(`input[name="${name}"]`))
    const currentIndex = radios.findIndex((radio) => radio.checked)
    let newIndex = (currentIndex + direction + radios.length) % radios.length
    radios[newIndex].focus()
  }

  return (
    <div
      ref={ref}
      className={`radio__root-container ${container || ''} ${radioClasses.container} ${spacing} ${labelPosition}`}
    >
      <input
        type='radio'
        name={name}
        value={value}
        disabled={disabled}
        className={`radio__input ${radioInput || ''} ${customClasses.radioInput} ${radioClasses.input} `}
        onChange={e => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        checked={selected === value}
        {...rest}
      />
      <span className={`radio__label ${radioLabel || ''} ${customClasses.radioLabel}`}>
        {label}
      </span>
    </div>
  )
})

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  align: PropTypes.string,
  classes: PropTypes.object,
}

Radio.displayName = 'Radio'

export default Radio
