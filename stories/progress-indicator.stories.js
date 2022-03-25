import React from 'react'

import { ProgressIndicator } from '../src'


export default {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
}

export const Normal = () => {
  const indicators = [
    'description longer for 1',
    'description for 2',
    'description for 3',
    'description for 4',
    'description for 5',
  ]
  return (<ProgressIndicator indicators={indicators} />)
}
