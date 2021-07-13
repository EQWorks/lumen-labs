import React, { useState } from 'react'

import { DateRange } from '../src'


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
