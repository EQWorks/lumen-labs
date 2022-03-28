import React, { useEffect, useState } from 'react'

import { ProgressIndicator } from '../src'


export default {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
}

export const Normal = () => {
  const indicators = [
    { label: 'building dashboard', active: false, complete: true },
    { label: 'loading reports', active: false, complete: false },
    { label: 'adding data', active: false, complete: false },
    { label: 'testing interface', active: false, complete: false },
    { label: 'finalizing', active: false, complete: false },
  ]
  return (<ProgressIndicator indicators={indicators} />)
}

const defaultIndicators = [
  { label: 'building dashboard', active: true, complete: false },
  { label: 'loading reports', active: false, complete: false },
  { label: 'adding data', active: false, complete: false },
  { label: 'testing interface', active: false, complete: false },
  { label: 'finalizing', active: false, complete: false },
]
export const WithAction = () => {
  const [indicators, setIndicators] = useState(defaultIndicators)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndicators((prev) => {
        const prevIndicators = [...prev]
        const index = prev.findIndex(({ complete }) => !complete)
        if (index > -1) {
          prevIndicators.splice(index, 1, { ...prev[index], complete: true })
          return prevIndicators
        }
        return defaultIndicators
      })
    }, 1000)
    return () => clearTimeout(timeout)
  }, [indicators])

  return (<ProgressIndicator indicators={indicators} />)
}
