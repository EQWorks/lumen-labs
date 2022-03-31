import React, { useState } from 'react'

import { InputBase } from '../src/base-components'
import { TextField, Button } from '../src'

import { ChevronUp, ChevronDown, Alert, Check, Dollar, Search, ArrowDown, Info } from '../src/icons'


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
 * [prefix] - string, value placed before the input value
 * [suffix] - string, value placed after the input value
 * [deleteButton] - boolean, add delete input button
 * [...rest] - any input element properties
 */

export const Base = () => {
  return (
    <>
      <p className={labelClass}>Normal</p>
      <InputBase />
      <p className={labelClass}>Placeholder:</p>
      <InputBase placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>Default Value:</p>
      <InputBase defaultValue='Hi there, I am the default value of this input.' />
      <p className={labelClass}>Start Icon:</p>
      <InputBase startIcon={<ChevronUp />} placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>End Icon:</p>
      <InputBase endIcon={<ChevronDown />} placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>delete button:</p>
      <InputBase defaultValue='Hi there, I am the default value of this input.' placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>Prefix: </p>
      <InputBase prefix='Prefix' placeholder='Is currenlty busy placeholding...' />
      <p className={labelClass}>Suffix: </p>
      <InputBase prefix='Suffix' placeholder='Is currenlty busy placeholding...' />
    </>
  )
}

/** -- props (TextField):
 * [classes] - object, custom styling supported keys:
 *    root: base component styling classes
 *    container: Input container classes
 * [inputProps] - object, accepts all InputBase props
 * [size] - string, predefined sizes ['lg', 'md'], default - 'md'
 * [label] - string, label for text field
 * [maxLength] - number, display amount of words
 * [helpertText] - string, small text at bottom of text field
 * [success] - boolean, toggles success mode
 * [error] - boolean, toggles error mode
 * [required] - boolean, add asterisk beside label
 * [disabled] - boolean, toggles disable mode
 * [deleteButton] - boolean, add delete input button
 * [onChange] - function, returns input value
 * [onSubmit] - function, form submit handler
 */

export const Default = () => {
  const inputProps = { placeholder: 'Placeholder text' }

  return (
    <>
      <p className={labelClass}>Label + Helper Text:</p>
      <TextField 
        inputProps={inputProps} 
        label='Label' 
        helperText='I am helper text' 
      />
      <p className={labelClass}>Start Icon:</p>
      <TextField
        inputProps={{ ...inputProps, startIcon: <Dollar size='md'/> }}
        label='Label'
        helperText='I am helper text'
      />
      <p className={labelClass}>End Icon:</p>
      <TextField        
        inputProps={{ ...inputProps, endIcon: <Search size='md'/> }}
        label='Label - search icon'
      />
      <TextField        
        inputProps={{ ...inputProps, endIcon: <ArrowDown size='md'/> }}
        label='Label - arrow down icon'
      />
      <p className={labelClass}>Prefix & Suffix: </p>
      <TextField
        inputProps={{ ...inputProps, prefix: 'https://', suffix: '.com' }}
        label='Label'
        helperText='I am helper text'
      />
      <p className={labelClass}>Success:</p>
      <TextField 
        success 
        inputProps={{ ...inputProps, startIcon: <Dollar size='md'/>, endIcon: <Check size='md'/> }}
        label='Label' 
        helperText='Success state' 
      />
      <p className={labelClass}>Error:</p>
      <TextField 
        error 
        inputProps={{ ...inputProps, startIcon: <Dollar size='md'/>, endIcon: <Alert size='md'/> }}
        label='Label' 
        helperText='Error state' 
      />
      <p className={labelClass}>Disabled:</p>
      <TextField 
        disabled 
        inputProps={{ ...inputProps, startIcon: <Dollar size='md'/>, endIcon: <Search size='md'/> }}
        label='Label' 
        helperText='Disabled state' 
      />
    </>
  )
}

export const SizeLarge = () => {
  const inputProps = { placeholder: 'Placeholder text' }
  const classes = { 
    container: 'w-96 flex flex-col', 
  }
  
  return (
    <>
      <p className={labelClass}>Label + Helper Text:</p>
      <TextField
        classes={classes}
        size='lg'
        inputProps={inputProps} 
        label='Label' 
        helperText='I am helper text' 
      />
      <p className={labelClass}>Start Icon:</p>
      <TextField
        classes={classes}
        size='lg'        
        inputProps={{ ...inputProps, startIcon: <Dollar size='lg'/> }}
        label='Label'
        helperText='I am helper text'
      />
      <p className={labelClass}>End Icon:</p>
      <TextField
        classes={classes}
        size='lg'        
        inputProps={{ ...inputProps, endIcon: <Search size='lg'/> }}
        label='Label - search icon'
      />
      <TextField
        classes={classes}
        size='lg'        
        inputProps={{ ...inputProps, endIcon: <ArrowDown size='lg'/> }}
        label='Label - arrow down icon'
      />
      <p className={labelClass}>Prefix & Suffix: </p>
      <TextField
        classes={classes}
        size='lg' 
        inputProps={{ ...inputProps, prefix: 'https://', suffix: '.com' }}
        label='Label'
        helperText='I am helper text'
      />
      <p className={labelClass}>Success:</p>
      <TextField
        classes={classes}
        size='lg'
        success 
        inputProps={{ ...inputProps, startIcon: <Dollar size='lg'/>, endIcon: <Check size='lg'/> }}
        label='Label' 
        helperText='Success state' 
      />
      <p className={labelClass}>Error:</p>
      <TextField
        classes={classes}
        size='lg'
        error 
        inputProps={{ ...inputProps, startIcon: <Dollar size='lg'/>, endIcon: <Alert size='lg'/> }}
        label='Label' 
        helperText='Error state' 
      />
      <p className={labelClass}>Disabled:</p>
      <TextField
        classes={classes}
        size='lg'
        disabled 
        inputProps={{ ...inputProps, startIcon: <Dollar size='lg'/>, endIcon: <Search size='lg'/> }}
        label='Label' 
        helperText='Disabled state' 
      />
    </>
  )
}

export const Area = () => {
  const inputProps = { placeholder: 'Placeholder text' }
  const classes = {
    container: 'w-96 flex flex-col', 
  }

  return (
    <>
      <p className={labelClass}>Input Area y-axis</p>
      <TextField.Area
        inputProps={inputProps} 
        label='Label Area'
        maxLength={100} 
      /> 
      <p className={labelClass}>Input Area y-axis - NO LIMIT</p>
      <TextField.Area
        inputProps={inputProps} 
        label='Label Area'
      /> 
      <p className={labelClass}>Input Area x-axis</p>
      <TextField
        classes={classes}
        inputProps={inputProps} 
        label='Label Area' 
        maxLength={125} 
      /> 
    </>
  )
}

export const Usage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState()
  const [requiredError, setRequiredError] = useState(false)
  const [date, setDate] = useState('2021-10-20')

  const phoneClasses = {
    container: 'w-40',
  }

  const extensionClasses = {
    container: 'w-20',
  }

  const handleOnChange = (val) => {
    let regex = /[0-9a-zA-Z]{6}/.test(val)
    setSuccess(regex)
    setError(!regex)
  }

  const requiredOnChange = (val) => {
    if (!val) {
      setRequiredError(true)
    } else {
      setRequiredError(false)
    }
  }

  return (
    <>
      <p className={labelClass}>Basic Input:</p>
      <TextField 
        label='First name'
      /> 
      <TextField 
        label='Last name'
      /> 
      <TextField
        inputProps={{ placeholder: 'your_website', prefix: 'https://', suffix: '.com' }} 
        label='Website URL'
      />
      <TextField 
        label='Date'
        type='date'
        value={date}
        onChange={(val) => setDate(val)}
        deleteButton={false}
        required
      />

      <p className={labelClass}>Input Label with Icon:</p>
      <TextField 
        label={
          <span className='inline-flex items-center'>
            <p className='mr-1'>Info Icon</p>
            <Info size='md' />
          </span>
        }
      /> 

      <p className={labelClass}>Required Input</p>
      <div className='flex flex-row'>
        <TextField
          classes={phoneClasses}
          label='Home phone'
          error={requiredError}
          inputProps={{ placeholder: 'Required', endIcon: requiredError && <Alert size='md'/> }}
          required
          onChange={requiredOnChange}
        /> 
        <div className='ml-2'>
          <TextField 
            classes={extensionClasses}
            label='Extension' 
            inputProps={{ placeholder: 'Optional' }}
          />
        </div>
      </div>

      <p className={labelClass}>Input with Buttons:</p>
      <div className={`flex flex-row ${error ? 'items-center' : 'items-end'}`}>
        <TextField
          success={success}
          error={error}
          inputProps={{ endIcon: success && <Check size='md'/> || error && <Alert size='md'/> }} 
          label='Password'
          helperText={`${error ? 'min 6 characters' : ''}`}
          onChange={handleOnChange}
        /> 
        <div className='ml-5'>
          {success ? 
            <Button variant='filled' size='md' type='success'>Submit</Button>
            :
            <Button variant='filled' size='md' disabled>Submit</Button>
          }
        </div>
      </div>

      <p className={labelClass}>Input Area:</p>
      <TextField
        inputProps={{ placeholder: 'Amount' }} 
        label='Total:'
      /> 
      <TextField.Area
        inputProps={{ placeholder: 'Do not include banking information' }} 
        label='Note:' 
        helperText='I am helper text' 
      /> 
    </>
  )
}

export const Borderless = () => {
  return (
    <TextField
      variant='borderless'
      inputProps={{ placeholder: 'Type something...' }}
      classes={{ input: 'text-lg' }}
    />
  )
}

export const Linked = () => {
  return (
    <>
      <p className={labelClass}>Default:</p>
      <TextField
        label='Example label'
        helperText='Example helper text'
        variant='linked'
        linkedFields={6}
      />

      <p className={labelClass}>Incomplete Error:</p>
      <TextField
        label='Example label'
        helperText='Example helper text'
        variant='linked'
        linkedFields={6}
        onSubmit={() => {}}
      />
    </>
  )
}
