import React from 'react'

import { InputBase } from '../src/base-components'
import { TextField } from '../src'
import { ChevronUp, ChevronDown } from '../src/icons'


export default {
  title: 'Textfield',
  component: InputBase,
}

const labelClass = 'text-blue-300 mt-5 mb-1'

/** -- props (InputBase):
 * [classes] - object, custom styling supported keys:
 *    root: input container div
 *    input: input element
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [value] - string, value of input
 * [defaultValue] - string, value of input on initial render
 * [placeholder] - string, helper value of input if value is empty
 * [onClick] - function, input click handler
 * [onChange] - function, input value change handler
 * [startIcon] - node, icon on left side of input
 * [endIcon] - node, icon on right side of input
 * [...rest] - any input element properties
 */

export const Base = () => {
  return (
    <>
      <p className={labelClass}>Normal:</p>
      <InputBase />
      <p className={labelClass}>Placeholder:</p>
      <InputBase placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>Default Value:</p>
      <InputBase defaultValue='Hi there, I am the default value of this input.' />
      <p className={labelClass}>Start Icon:</p>
      <InputBase startIcon={<ChevronUp />} placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>End Icon:</p>
      <InputBase endIcon={<ChevronDown />} placeholder='Is currenlty busy placeholding...' />
    </>
  )
}

/** -- props (TextField):
 * [classes] - object, custom styling supported keys:
 *    width: width of text field
 * [inputProps] - object, accepts all InputBase props
 * [label] - string, label for text field
 * [helpertText] - string, small text at bottom of text field
 * [error] - boolean, toggles error mode
 * [onSubmit] - function, form submit handler
 */

export const Normal = () => {
  const inputProps = { autoFocus: true }
  const classes = { width: 'w-72' }
  return (
    <>
      <p className={labelClass}>Label + Helper Text:</p>
      <TextField inputProps={inputProps} label='Label:' helperText='I am helper text' />
      <p className={labelClass}>Error:</p>
      <TextField error inputProps={inputProps} label='Label:' helperText='Something went wrong' />
      <p className={labelClass}>Custom Width:</p>
      <TextField classes={classes} inputProps={inputProps} label='Label:' helperText='I am helper text' />
      <p className={labelClass}>Start Icon:</p>
      <TextField
        classes={classes}
        inputProps={{ ...inputProps, startIcon: <ChevronDown /> }}
        label='Label:'
        helperText='I am helper text'
      />
      <p className={labelClass}>End Icon:</p>
      <TextField
        classes={classes}
        inputProps={{ ...inputProps, endIcon: <ChevronDown /> }}
        label='Label:'
        helperText='I am helper text'
      />
    </>
  )
}
