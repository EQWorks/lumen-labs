import React from 'react'

import { ProgressIndicator } from '../src'


export default {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
}

export const Normal = () => {
  const indicators = [
    { label: 'description longer for 1', checked: false },
    { label: 'description for 2', checked: false },
    { label: 'description for 3', checked: false },
    { label: 'description for 4', checked: false },
    { label: 'description for 5', checked: false },
  ]
  return (<ProgressIndicator indicators={indicators} />)
}
