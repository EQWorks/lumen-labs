import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { counter } from '../utils/counter'
import { makeStyles } from '../utils/make-styles'
import { InputBase } from '../base-components'
import Area from './area'


const styles = makeStyles({
  borderlessInput: {
    padding: '1px 6px 1px 6px !important',
    fontWeight: 'bold !important',
    alignItems: 'center',
  },
})

const _inputSize = ({ size, variant }) => {
  let inputSize = ''

  switch(size) {
  case 'lg':
    inputSize = {
      box: variant === 'linked' ? 'h-9 w-9 p-sm' : 'h-9 p-sm',
      font: 'text-sm tracking-sm leading-1.43',
    }
    break
  case 'md':
    inputSize = {
      box: variant === 'linked' ? 'h-7 w-7 py-1.5 pr-2 pl-2.5' : 'h-7 py-1.5 px-2.5',
      font: 'text-xs tracking-md leading-1.33',
    }
    break
  default:
    break
  }

  return inputSize
}

const _textFieldClasses = ({
  container,
  inputSize,
  success,
  error,
  linkedFields,
}) => ({
  container: {
    default: `textfield__default-container ${container ? container : 'w-250px'} flex flex-col font-sans ${inputSize.font}`,
    borderless: `textfield__borderless-container ${container ? container : 'w-250px'} bg-secondary-200`,
    linked: {
      outer: `textfield__linked-outer-container inline-flex flex-col ${container} ${inputSize.font}`,
      inner: `textfield__linked-inner-container inline-grid gap-1.5 grid-cols-${linkedFields}`,
    },
  },
  label: 'textfield__input-container text-secondary-600',
  helperText: clsx('textfield__wordCount-container mt-1.5 text-secondary-600', {
    '--error text-error-500': error,
    '---success text-success-500': success,
  }),
  wordCount: 'textfield__wordCount-container mt-1.5 col-start-2 justify-self-end text-secondary-600 text-xxs tracking-lg leading-1.6',
})

const _inputBaseClasses = ({ root, input, label, inputSize, focus: _focus, success, error, filled, disabled, linked }) => {
  let focus = _focus
  if (linked) {
    focus = _focus === linked
  }
  return ({
    root: clsx(`textfield__root-container ${root} ${`rounded-sm ${label && 'mt-1.5'} ${inputSize.box}`}`,
      { 'border-secondary-400 hover:border-secondary-500 bg-secondary-50': !disabled && !focus && !error && !success },
      { '--focus border-interactive-500 shadow-focused-interactive': focus && !error && !success },
      { '--error border-error-500 shadow-focused-error': error },
      { '--success border-success-500 shadow-focused-success': success },
      { '--focus-filled border-interactive-500 bg-secondary-50': focus && filled },
      { 'pointer-events-none bg-secondary-100 text-secondary-400 border-secondary-400': disabled },
    ),
    input: clsx(`textfield__input-container ${input} outline-none`,
      { '--filled bg-secondary-50': filled },
      { 'text-secondary-800': !disabled },
      { '--disabled bg-secondary-100 text-secondary-400 placeholder-secondary-400': disabled },
    ),
    startIcon: clsx('textfield__start-icon-container mt-0.5 mr-4 fill-current stroke-current', { 'text-secondary-600': !disabled }),
    endIcon: clsx('textfield__end-icon-container mt-0.5 ml-4 fill-current stroke-current',
      {
        'text-secondary-600': !disabled,
        '--focus text-interactive-500': focus && !error && !success,
        '--error text-error-500': error,
        '--success text-success-500': success,
      },
    ),
    prefix: 'textfield__prefix-container mr-2.5 text-secondary-600',
    suffix: 'textfield__suffix-container ml-2.5 text-secondary-600',
  })
}

const _borderlessClasses = ({ root, input, isEdited, error, focus, disabled }) => ({
  root: clsx(`textfield__root-container ${root} flex flex-row items-center m-0 pr-1 border-t-0 border-l-0 border-r-0 border-b border-secondary-200`, {
    'hover:border-secondary-600': !focus,
    '--focus border-b border-interactive-500': focus && !error,
    '--focus-error border-b border-error-500': focus && error,
    '--disabled pointer-events-none bg-secondary-100 text-secondary-400 border-secondary-400': disabled,
  }),
  input: clsx(`textfield__input-container ${input} outline-none mb-0.5 bg-transparent font-normal tracking-md text-xs ${styles.borderlessInput}`, {
    'text-secondary-900': isEdited,
    'text-secondary-600': !isEdited,
  }),
})

const renderLabel = ({ label, required, textFieldClasses, id, labelOptions }) => (
  <div className='textfield__label-container flex flex-row justify-between'>
    <div className='textfield__label-text-container flex flex-row'>
      {label && <label className={textFieldClasses.label} htmlFor={id}>{label}</label>}
      {required && <span className='flex flex-row ml-5px text-error-500'>*</span>}
    </div>
    {labelOptions && labelOptions}
  </div>
)
const renderFooter = ({ helperText, maxLength, value, textFieldClasses }) => (
  <div className={`textfield__helper-text-container flex flex-row ${helperText ? 'justify-between' : 'justify-end'}`}>
    {helperText && <p className={textFieldClasses.helperText}>{helperText}</p>}
    {maxLength && <p className={textFieldClasses.wordCount}>{value?.length || 0}/{maxLength}</p>}
  </div>
)

const linkedValsFormatHelper = (value, linkedValues, linkedFields) => {
  let vIndex = 0
  const v = value.trim().split('').filter((r) => r).splice(0, (linkedFields - linkedValues.filter((r) => r).length))
  const vals = linkedValues.map((val) => {
    let value = val
    if (val && vIndex > 0) {
      vIndex = -1
    }
    if (!val && vIndex > -1) {
      value = v[vIndex]
      vIndex++
    }
    return value
  })
  return vals
}

const TextField  = ({
  classes = { root: '', input: '', container: '' },
  size = 'md',
  inputProps = {},
  label = '',
  maxLength = null,
  helperText = '',
  success = false,
  error = false,
  required = false,
  disabled = false,
  deleteButton = false,
  onChange = () => {},
  onClick = () => {},
  onDelete = () => {},
  onSubmit = null,
  variant = 'default',
  linkedFields = 0,
  refocus = false,
  id = '',
  isPlaceholderValue = false,
  labelOptions = null,
  ...rest
}) => {
  const [filled, setFilled] = useState(false)
  const [value, setValue] = useState(false)
  const [focus, setFocus] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [linkedValues, setLinkedValues] = useState(new Array(linkedFields).fill(''))
  const [linkedIncompleteError, setLinkedIncompleteError] = useState(false)

  const inputID = counter(id)
  const { root = '', input = '', container = '' } = classes
  const inputSize = _inputSize({ size, variant })
  const textFieldClasses = _textFieldClasses({ container, inputSize, success, error: error || linkedIncompleteError, linkedFields })
  const generateVariants = ({ linked }) => ({
    default: _inputBaseClasses({ root, input, label, inputSize, focus, success, error: error || linkedIncompleteError, filled, disabled, linked }),
    borderless: _borderlessClasses({ root, input, isEdited, error, focus, disabled }),
  })

  const handleLinkedChange = (e, i, inputID) => {
    if (linkedIncompleteError) {
      setLinkedIncompleteError(false)
    }

    if ((i + 1) === linkedFields && linkedValues[i]) {
      return onChange(linkedValues.join(''))
    }

    if (e.target.value.length > 1) {
      if (linkedValues[i]) {
        return
      }
      if (linkedValues.filter((r) => r).length !== linkedValues.length) {
        const vals = linkedValsFormatHelper(e.target.value, linkedValues, linkedFields)
        if (vals.length > 1) {
          const rest = new Array(linkedFields - vals.length).fill('')
          setLinkedValues([...vals, ...rest])
          return onChange(vals.join(''))
        }
      } else {
        return onChange(linkedValues.join(''))
      }
    }

    const v = [...linkedValues]
    v.splice(i, 1, e.target.value)

    if (v.filter((r) => r).length > linkedValues.filter((r) => r).length) {
      const next = document.getElementById(`linked-${inputID}-${i+2}`)
      if (next) {
        next.focus()
        setFocus(i+2)
      }
    }

    setLinkedValues(v)
    return onChange(v.join(''))
  }

  const handleChange = (e) => {
    setValue(e.target ? e.target.value : e)

    if (inputProps.onChange) {
      inputProps.onChange(e.target? e.target.value : e)
    }

    onChange(e.target ? e.target.value : e)
  }

  const handleFocus = (i) => {
    setFocus(i ? i : true)
    setFilled(false)
    if (!isEdited) {
      setIsEdited(true)
    }
  }

  const handleBlur = () => {
    setFocus(false)
    if (value) setFilled(true)
  }

  const handleLinkedSubmit = () => {
    if (onSubmit) {
      if (linkedValues.filter((r) => r).length !== linkedFields) {
        setLinkedIncompleteError(true)
      } else {
        const target = document.getElementById(`linked-${inputID}-${focus}`)
        target.blur()
        setFocus(null)
        setLinkedIncompleteError(false)
        return onSubmit(linkedValues.join(''))
      }
    }
  }

  const handleKeyDown = (e, i, inputID) => {
    const BACKSPACE = 8
    const ENTER = 13
    const LEFT_ARROW = 37
    const RIGHT_ARROW = 39

    if (e.keyCode === ENTER) {
      handleLinkedSubmit()
    }

    if ([BACKSPACE, LEFT_ARROW].includes(e.keyCode)) {
      if (e.keyCode === BACKSPACE) {
        if (e.target.value) {
          const v = [...linkedValues]
          v.splice(i, 1, '')
          setLinkedValues(v)
          return onChange(v.join(''))
        }
      }
      const prev = document.getElementById(`linked-${inputID}-${i}`)
      if (prev) {
        prev.focus()
        setFocus(i)
      }
    }

    if (e.keyCode === RIGHT_ARROW) {
      const next = document.getElementById(`linked-${inputID}-${i+2}`)
      if (next) {
        next.focus()
        setFocus(i+2)
      }
    }
  }

  // TODO: specify input type
  if (variant === 'linked') {
    return (
      <div className={textFieldClasses.container.linked.outer}>
        {label && renderLabel({ label, required, textFieldClasses, inputID, labelOptions })}
        <div className={textFieldClasses.container.linked.inner}>
          {linkedValues.map((val, i) => {
            return (
              <InputBase
                {...inputProps}
                {...rest}
                key={i}
                id={`linked-${inputID}-${i+1}`}
                autoFocus={rest.autoFocus && !i}
                size={size}
                value={val}
                onFocus={() => handleFocus(i+1)}
                onBlur={handleBlur}
                onChange={(e) => handleLinkedChange(e, i, inputID)}
                onClick={onClick}
                onKeyDown={(e) => handleKeyDown(e, i, inputID)}
                deleteButton={null}
                classes={generateVariants({ linked: i+1 }).default}
              />)
          })}
        </div>
        {renderFooter({
          helperText: linkedIncompleteError ? `Must input ${linkedFields} characters` : helperText,
          maxLength, value, textFieldClasses,
        })}
      </div>
    )
  }

  return (
    <form
      className={textFieldClasses.container[variant]}
      onSubmit={(e) => {
        e.preventDefault()
        if (onSubmit) {
          onSubmit({ ...e, target: e.target.children[0].children[0] })
        }
      }}
    >
      {variant !== 'borderless' && label && renderLabel({ label, required, textFieldClasses, id, labelOptions })}
      <InputBase
        {...inputProps}
        id={id}
        classes={generateVariants({})[variant]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={onClick}
        onDelete={onDelete}
        size={size}
        deleteButton={!disabled && deleteButton}
        required={required}
        maxLength={maxLength}
        refocus={refocus}
        isPlaceholderValue={isPlaceholderValue}
        {...rest}
      />
      {variant !== 'borderless' && renderFooter({ helperText, maxLength, value, textFieldClasses })}
    </form>
  )
}

TextField.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.any,
  maxLength: PropTypes.number,
  helperText: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  deleteButton: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
  variant: PropTypes.string,
  linkedFields: PropTypes.number,
  refocus: PropTypes.bool,
  id: PropTypes.string,
  isPlaceholderValue: PropTypes.bool,
  labelOptions: PropTypes.node,
}

TextField.Area = Area

export default TextField
