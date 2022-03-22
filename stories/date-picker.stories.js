import React from 'react'

import { DatePicker } from '../src'


export default {
  title: 'DatePicker',
  component: DatePicker,
}

export const Default = () => {
  return (
    <div className='flex'>
      <DatePicker 
        onConfirm={(_, val) => console.log('confirm: ', val)}
        onSelectDay={(_, val) => console.log('select: ', val)}
      />
    </div>
  )
}

export const Single = () => {
  return (
    <div className='flex'>
      <DatePicker 
        onConfirm={(_, val) => console.log('confirm: ', val)}
        onSelectDay={(_, val) => console.log('select: ', val)}
      />
    </div>
  )
}
