import React from 'react'

import * as icons from '../../src/icons'


export default {
  title: 'Style Guide/Icons',
}

export const Icons = () => (
  <div className='grid grid-cols-6'>
    {Object.entries(icons).map(([name, Icon], i) => {
      const bg = i%2 ? 'bg-primary-200' : 'bg-primary-100'
      return (
        <div key={i} className={`flex flex-col justify-center items-center mb-7 p-2 ${bg}`}>
          <Icon size='lg' />
          <h6 className='text-secondary-700 mt-2'>{name}</h6>
        </div>
      )
    })}
  </div>)
