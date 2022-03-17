import React, { useState } from 'react'

import { DateRange, DatePicker } from '../src'
import { getDateISO } from '../src/utils/helpers/calendar'


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
    <DatePicker />
  )
}
