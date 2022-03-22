import React from 'react'

import { DatePicker } from '../src'


export default {
  title: 'DatePicker',
  component: DatePicker,
}

/** -- props (DatePicker):
 * [classes] - object, custom styling supported keys:
 *    root: component root wrapper
 *    datePickerContainer: component container wrapper
 *    navbarContainer: navbar container div wrapper
 *    calendarMainContainer: calendar container root div wrapper
 *    calendarContainer: calendar container div wrapper
 *    calendarTable: calendar table selector
 *    calendarDay: each day table cell selector
 *    disabledDay: disabled day cell selector
 *    buttonContainer: action button container div wrapper
 * [navbarType] - string, control navbar types supported values ['both', 'year', 'none'], default = 'both'
 * [variant] - string, control date-picker types supported values ['range', 'single', 'multi'], default = 'range'
 * [onConfirm] - function, returns selected days values when confirm action button is clicked
 * [onCancel] - function, call onCancel when cancel action button is clicked
 * [onSelectDay] - function, returns selected day value when a day is clicked
 * [defaultDate] - Date, set initial default date for date-picker. Only RFC 2822 and ISO 8601 date format, default = new Date()
 * [dateFormat] - string, control date format on return from onSelectDay & onConfirm function calls. ONLY MOMENT.JS FORMAT, default = 'MM/DD/YYYY'
 * [actionButtons] - bool, control display/usage of action buttons Cancel & Confirm
 */

export const Normal = () => {
  return (
    <div className='flex'>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>variant (range) - navbarType (both)</h4>
        <DatePicker onSelectDay={(_, v) => console.log(v)}/>
      </div>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>variant (range) - navbarType (year)</h4>
        <DatePicker 
          navbarType='year'
        />
      </div>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>variant (range) - navbarType (none)</h4>
        <DatePicker 
          navbarType='none'
        />
      </div>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>without actionButtons (false)</h4>
        <DatePicker 
          actionButtons={false}
        />
      </div>
    </div>
  )
}

export const Single = () => {
  return (
    <div className='flex'>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>variant (single) - navbarType (both)</h4>
        <DatePicker
          variant='single' 
        />
      </div>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>variant (single) - navbarType (year)</h4>
        <DatePicker
          variant='single' 
          navbarType='year'
        />
      </div>
      <div className='mb-2'>
        <h4 className='mb-2'>variant (single) - navbarType (none)</h4>
        <DatePicker
          variant='single' 
          navbarType='none'
        />
      </div>
    </div>
  )
}

export const Multi = () => {
  return (
    <div className=''>
      <DatePicker 
        variant='multi'
      />
    </div>
  )
}
