import React from 'react'

import * as illustrations from '../../src/illustrations'


export default {
  title: 'Style Guide/Illustrations',
}

export const Illustrations = () => (
  <div className='grid grid-cols-6'>
    {Object.entries(illustrations).map(([name, Illustration], i) => {
      return (
        <div key={i} className='inline-flex flex-col justify-center items-center'>
          <Illustration />
          <h6 className='text-secondary-700'>{name}</h6>
        </div>
      )
    })}
  </div>
)
