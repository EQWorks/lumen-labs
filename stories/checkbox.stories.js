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
 * [defaultChecked] - boolean, checked state on initial render
 * [indeterminate] - boolean, indeterminate state of checkbox
 * [onChange] - function, check state manipulation, returns:
 *    label: string, label of changed checkbox
 *    checked: boolean, check state of changed checkbox
 * [inputProps] - object, props for checkbox input element (e.g. disabled)
*/

/** -- props (CheckboxGroupBase):
 * [classes] - object, custom styling supported keys:
 *    root: component wrapper
 *    checkboxClasses: checkbox componoment classes
 * [options] - array, array of checkbox props object
 * [align] - string, align 'vertical' (default) or 'horizontal'
 * [diabled] - boolean, disable entire checkbox group
 * [defaultValues] - string, array of checkbox label to initialize checked state
 * [onChange] - function, returns array of options with updated [checked] status
*/
export const Base = () => {
  return (
    <>
      <p className='my-1 p-2 uppercase bg-primary-100 rounded-sm'>Basic:</p>
      <CheckboxBase label='Base Checkbox' />
      <CheckboxBase label='Base Checkbox - indeterminate' indeterminate />
      <CheckboxBase label='Base Checkbox - defaultChecked' defaultChecked />
      <CheckboxBase label='Base Checkbox - disabled' inputProps={{ disabled: true }} />

      <p className='mt-10 my-1 p-2 bg-primary-100 rounded-sm'>GROUPED (vertical):</p>
      <div className='flex flex-rows'>
        <CheckboxBase.Group
          defaultValues={['No children', 'child-2']}
          options={[
            { label: 'Nested groups - default values' },
            { label: 'No children' },
            [
              { label: 'Parent' },
              { label: 'child-1' },
              { label: 'child-2' },
            ],
            [
              { label: 'Parent' },
              { label: 'child-1' },
              { label: 'child-2' },
            ],
          ]}
        />
        <CheckboxBase.Group
          disabled
          options={[
            { label: 'Nested groups - disabled (disable entire group)' },
            { label: 'No children' },
            [
              { label: 'Parent' },
              { label: 'child-1' },
              { label: 'child-2' },
            ],
            [
              { label: 'Parent' },
              { label: 'child-1' },
              { label: 'child-2' },
            ],
          ]}
          classes={{ root: 'ml-20' }}
        />
      </div>

      <p className='mt-10 my-1 p-2 bg-primary-100 rounded-sm'>GROUPED (horizontal):</p>
      <CheckboxBase.Group
        align='horizontal'
        defaultValues={['No children', 'child-2']}
        options={[
          { label: 'VERTICAL with nested groups - default values' },
          { label: 'No children' },
          [
            { label: 'Parent' },
            { label: 'child-1' },
            { label: 'child-2' },
          ],
          [
            { label: 'Parent' },
            { label: 'child-1' },
            { label: 'child-2' },
          ],
        ]}
      />
    </>
  )
}

export const Normal = () => {
  return (
    <>
      <p className='my-1 p-2 bg-primary-100 rounded-sm'>NORMAL:</p>
      <div className='inline-flex flex-col items-start'>
        <Checkbox label='Label' />
        <Checkbox label='Indeterminate' indeterminate />
        <Checkbox label='Disabled' inputProps={{ disabled: true }} />
        <Checkbox label='Disabled - checked' defaultChecked inputProps={{ disabled: true }} />
      </div>
    </>
  )
}
