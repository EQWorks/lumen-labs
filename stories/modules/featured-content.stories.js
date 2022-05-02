import React, { useEffect, useState } from 'react'

import { FeaturedContent } from '../../src/modules'

export default {
  title: 'Modules/Featured Content',
}

export const Normal = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  const renderHello = () => (
    <>
      <div className='min-w-72 h-10 bg-red-500'>loading</div>
    </>
  )

  const renderTest = () => (
    <>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 mr-2 bg-success-500'>Test</div>
      <div className='min-w-48 h-48 bg-success-500'>Test</div>
    </>
  )

  return (
    <FeaturedContent isLoading={isLoading}>
      {isLoading ? renderHello() : renderTest()}
    </FeaturedContent>
  )
}
