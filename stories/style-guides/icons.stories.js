import React, { useState, useEffect } from 'react'

import { useDebounce } from 'use-debounce'

import * as icons from '../../src/icons'
import TextField from '../../src/components/text-field'


export default {
  title: 'Style Guide/Icons',
}

const formatIcons = (filteredIcons) => (
  Object.entries(filteredIcons).sort().reduce((acc, [name, Icon]) => {
    const alph = name[0].toUpperCase()
    if (acc[alph]) {
      acc[alph] = { ...acc[alph], [name]: Icon }
    } else {
      acc[alph] = { [name]: Icon }
    }
    return acc
  }, {}))

const renderIcons = (icons) => (
  <div className='grid grid-cols-6'>
    {Object.entries(icons).map(([name, Icon], i) => {
      const bg = i%2 ? 'bg-primary-200' : 'bg-primary-100'
      const colorConfigs = ['RightJoin', 'LeftJoin', 'InnerJoin', 'Copy'].includes(name)
        ? { fill: '#808080', stroke: '#4C4C4C' }
        : {}
      return (
        <div key={i} className={`flex flex-col justify-center items-center mb-7 p-2 ${bg}`}>
          <Icon size='lg' {...colorConfigs} />
          <h6 className='text-secondary-700 mt-2'>{name}</h6>
        </div>
      )
    })}
  </div>
)

export const Icons = () => {
  const [value, setValue] = useState('')
  const [filteredIcons, setFilteredIcons] = useState({})
  const [search] = useDebounce(value, 500)

  useEffect(() => {
    try {
      const matchedIcons = Object.fromEntries(Object.entries(icons).filter(([name]) => (
        name?.toLowerCase().search(search.toLowerCase()) !== -1
      )))
      if (Object.keys(matchedIcons).length) {
        setFilteredIcons(matchedIcons)
      } else {
        setFilteredIcons(icons)
      }
    } catch (e) { console.error(e) }
  }, [search])

  return (
    <>
      <TextField
        label='Search Icon:'
        classes={{ container: 'w-68 mb-5' }}
        inputProps={{ placeholder: 'Icon name', endIcon: <icons.Search size='md' /> }}
        onChange={(val) => setValue(val)}
      />
      <div className='w-full inline-flex flex-col'>
        {Object.entries(formatIcons(filteredIcons)).map(([alph, icons], i) => (
          <div key={`${alph}-${i}`}>
            <p>{alph}:</p>
            {renderIcons(icons)}
          </div>
        ))}
      </div>
    </>
  )
}
