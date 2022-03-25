import React from 'react'

import { ProgressIndicator } from '../src'


export default {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
}

export const Normal = () => {
  const indicators = [
    { label: 'building dashboard', active: false, complete: true },
    { label: 'loading reports', active: true, complete: false },
    { label: 'adding data', active: false, complete: false },
    { label: 'testing interface', active: false, complete: false },
    { label: 'finalizing', active: false, complete: false },
  ]
  return (<ProgressIndicator indicators={indicators} />)
}
