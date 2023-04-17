import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'
import { getTailwindConfigColor } from '../utils/tailwind-config-color'


const customClasses = () => {
  return makeStyles({
    radioRoot: {
      '& .label': {
        fontFamily: 'PT Sans',
        fontSize: '0.75rem',
      },
      '& .radioContainer': {
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
    },
  })
}

const radioClasses = Object.freeze({
  container: 'radio__root-container flex gap-1.5 items-center',
  input: 'm-0 w-4 h-4 rounded-full grid radioContainer',
})

const Radio = forwardRef(({ label, name, value, align, handleChange, disabled, selected, direction, classes, ...rest }, ref) => {
  const styles = customClasses()
  const labelPosition = align === 'left' ? 'flex-row-reverse' : 'flex-row'
  const spacing = direction === 'flex-col' ? 'mb-2' : 'mr-2'

  const {
    container,
    radioInput,
    radioLabel,
  } = classes

  return (
    <div ref={ref} className={`${radioClasses.container} ${spacing} ${labelPosition} ${styles.radioRoot} ${container}`}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        className={`${radioClasses.input} ${radioInput}`}
        onChange={e => handleChange(e)}
        checked={selected === value}
        {...rest}
      />
      <span className={`label ${radioLabel}`}>
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
Radio.defaultProps = {
  disabled: false,
  align: 'right',
  name: '',
  selected: '',
  direction: '',
  classes: {
    container: '',
    radioInput: '',
    radioLabel: '',
  },
}

Radio.displayName = 'Radio'

export default Radio
