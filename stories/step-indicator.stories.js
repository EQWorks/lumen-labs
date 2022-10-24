import React, { useEffect, useState } from 'react'

import { StepIndicator } from '../src'


export default {
  title: 'Step Indicator',
  component: StepIndicator,
}

const indicators = [
  { label: 'building dashboard', active: false, complete: false },
  { label: 'loading reports', active: false, complete: false },
  { label: 'adding data', active: false, complete: true },
  { label: 'testing interface', active: false, complete: false },
  { label: 'finalizing', active: false, complete: false },
]

const defaultIndicators = [
  { label: 'building dashboard', active: true, complete: false },
  { label: 'loading reports', active: false, complete: false },
  { label: 'adding data', active: false, complete: false },
  { label: 'testing interface', active: false, complete: false },
  { label: 'finalizing', active: false, complete: false },
]

export const Normal = () => <StepIndicator indicators={indicators} />

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

  return (<StepIndicator indicators={indicators} />)
}
