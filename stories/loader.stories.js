import React from 'react'

import { CircleLoader } from '../src/icons'


export default {
  title: 'Loader',
  component: CircleLoader,
}

export const Circle = () => {
  return (<CircleLoader className='animate-spin' />)
}
