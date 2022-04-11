import moment from 'moment'
import React, { useState } from 'react'

import { Button, DatePicker } from '../src'


export default {
  title: 'DatePicker',
  component: DatePicker,
}

/** -- props (DatePicker):
 * [classes] - object, custom styling supported keys:
 *    root: component root wrapper
 *    rootContainer: component main container wrapper
 *    rootButtonContainer: component trigger button wrapper
 *    datePickerMenu: component dropdown menu wrapper,
 *    datePickerContainer: component content container wrapper
 *    navbarContainer: navbar container div wrapper
 *    calendarMainContainer: calendar container root div wrapper
 *    calendarContainer: calendar container div wrapper
 *    calendarTable: calendar table selector
 *    calendarDay: each day table cell selector
 *    disabledDay: disabled day cell selector
 *    buttonContainer: action button container div wrapper
 * [tooltip] - object, please refer to tooltip.stories for object access
 * [navbarType] - string, control navbar types supported values ['both', 'year', 'none'], default = 'both'
 * [variant] - string, control date-picker types supported values ['range', 'single', 'multi'], default = 'range'
 * [onConfirm] - function, returns selected days values when confirm action button is clicked
 * [onCancel] - function, call onCancel when cancel action button is clicked
 * [onSelectDay] - function, returns selected day value when a day is clicked
 * [defaultDate] - array, set initial default date for date-picker defaultDate[0] = startDay & defaultDate[1] = endDay for Range/Multi. 
        Only RFC 2822 and ISO 8601 date format, default = new Date()
 * [rangeOfYears] - number, control the numbers of display years for the year dropdown
 * [customTrigger] - node, render your custom trigger to handle date picker display
 * [dateFormat] - string, control date format on return from onSelectDay & onConfirm function calls. ONLY MOMENT.JS FORMAT, default = 'MM/DD/YYYY'
 * [actionButtons] - bool, control display/usage of action buttons Cancel & Confirm
 * [defaultSelected] - bool, control selected day from default date
 * [deleteInputButton] - bool, control the use of delete button from input
 */

export const Normal = () => {
  return (
    <div className='flex'>
      <div className='mb-2 mr-4'>
        <h4 className='mb-2'>variant (range) - navbarType (both)</h4>
        <DatePicker 
          tooltip={{
            title: 'Tooltip',
            description: 'Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.',
            width: '16rem',
          }}
        />
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
        <h4 className='mb-2'>without actionButtons (true)</h4>
        <DatePicker 
          actionButtons
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

export const Custom = () => {
  const [dateValue, setDateValue] = useState('')
  const [dateValue1, setDateValue1] = useState('')

  return (
    <div className='flex flex-col'>
      <div className='mb-4 flex'>
        <DatePicker
          variant='single' 
          navbarType='none'
          hideInput
          onSelectDay={(_, val) => {
            if (val === dateValue) {
              setDateValue('')
            } else {
              setDateValue(val)
            }
          }}
          dateFormat={'YYYY-MM-DD'}
        />
        <div className="w-250px p-4 flex flex-col items-center bg-interactive-500 text-secondary-50">
          {dateValue ? 
            (<>
              <span className='text-2xl mb-2'>You Picked</span>
              <span className='text-2xl mb-2'>{moment(dateValue).format('dddd')}</span>
              <span className='text-4xl mb-4'>{moment(dateValue).format('DD')}</span>
            </>)
            :
            (<>
              <span className='text-2xl mb-2'>Today Is</span>
              <span className='text-2xl mb-2'>{moment().format('dddd')}</span>
              <span className='text-4xl mb-4'>{moment().format('DD')}</span>
            </>)
          }
          {dateValue1 && (
            <div className='text-xl'>
              Selected from below: {moment(dateValue1).format('dddd')}, {moment(dateValue1).format('Do')} {moment(dateValue1).format('MMM')}
            </div>
          )}
        </div>
      </div>
      <div>
        <DatePicker
          variant='single' 
          navbarType='none'
          customTrigger={
            <Button size='lg'>Show Date Picker</Button>
          }
          onConfirm={(_, val) => setDateValue1(val)}
          dateFormat={'YYYY-MM-DD'}
          actionButtons
        />
      </div>
    </div>
  )
}
