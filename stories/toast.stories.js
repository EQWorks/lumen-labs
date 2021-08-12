import React, { useState } from 'react'

import { ToastVerticalBase } from '../src/base-components'
import { TextField, Button } from '../src'

import { Alert, Close } from '../src/icons'


export default {
  title: 'ToastVerticalBase',
  component: ToastVerticalBase,
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
 * [...rest] - any input element properties
 */

export const Base = () => {
  const button = <button>click me</button>

  return (
    <>
      <p className={labelClass}>Vertical</p>
      <ToastVerticalBase 
        title='vertical' 
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
        button={button}
        startIcon={<Alert size='lg'/>} 
        endIcon={<Close size='sm'/>} 
      />
    </>
  )
}