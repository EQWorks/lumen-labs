import React, { useState } from 'react'

import { DateRange, DatePicker } from '../src'


export default {
  title: 'DateRange',
  component: DateRange,
}

export const Normal = () => {
  const [fromDateValue, setFromDateValue] = useState('')
  const [toDateValue, setToDateValue] = useState('')

  return (
    <DateRange defaultValue={[fromDateValue, toDateValue]} setFromValue={setFromDateValue} setToValue={setToDateValue}/>
  )
}

export const datePicker = () => {

  return (
    <div className='flex'>
      <DatePicker />
    </div>
  )
}
