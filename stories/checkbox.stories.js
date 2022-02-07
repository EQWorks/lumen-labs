import React from 'react'

import { CheckboxBase } from '../src/base-components'
import { Checkbox } from '../src'


export default {
  title: 'Checkbox',
  component: Checkbox,
}

/** -- props (CheckboxBase):
 * [classes] - object, custom styling supported keys:
 *    root: component wrapper
 *    input: checkbox field
 *    label: label field
 * [label] - string, checkbox label (required)
 * [checked] - boolean, checked state of checkbox
 * [onChange] - function, check state manipulation, returns:
 *    label: string, label of changed checkbox
 *    checked: boolean, check state of changed checkbox
*/
export const Base = () => {
  return (
    <>
      <CheckboxBase label='Base Checkbox'/>
      <CheckboxBase label='Base Checkbox - disabled' inputProps={{ disabled: true }} />

      <div className='mt-20'>
        <p className='my-2 uppercase'>Grouped:</p>
        <CheckboxBase.Group
          options={[
            { label: 'No children' },
            [
              { label: 'Parent' },
              { label: 'child-1' },
              { label: 'child-2' },
            ],
          ]}
        />
      </div>
    </>
  )
}

export const Normal = () => {
  return (
    <Checkbox
      label='Label'
    />
  )
}
