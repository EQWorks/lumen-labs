import React from 'react'

import { InputBase } from '../src/base-components'
import { ChevronUp, ChevronDown } from '../src/icons'


export default {
  title: 'Textfield',
  component: InputBase,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    root: input container div
 *    input: input element
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
      <p>Normal:</p>
      <InputBase />
      <p className='mt-5'>Placeholder:</p>
      <InputBase placeholder='Is currenlty busy placeholding...' />
      <p className='mt-5'>Default Value:</p>
      <InputBase defaultValue='Hi there, I am the default value of this input.' />
      <p className='mt-5'>Start Icon:</p>
      <InputBase startIcon={<ChevronUp />} placeholder='Is currenlty busy placeholding...' />
      <p className='mt-5'>End Icon:</p>
      <InputBase endIcon={<ChevronDown />} placeholder='Is currenlty busy placeholding...' />
    </>
  )
}
