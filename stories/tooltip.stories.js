import React from 'react'

import { Tooltip, Button } from '../src'


export default {
  title: 'Tooltip',
  component: Tooltip,
}

const labelClass = 'my-1 font-bold capitalize'

export const Normal = () => {
  return (
    <>
      <p className={labelClass}>Light</p>
      <Tooltip 
        title='Tooltip'
        description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
        width={16.875}
      >
        <div className="h-10 w-10 bg-red-500">
          hello
        </div>
      </Tooltip>
      <p className={`mt-5 ${labelClass}`}>dark</p>
      <Tooltip 
        type='dark'
        title='Tooltip'
        description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
        width={16.875}
      >
        <div className="h-10 w-10 bg-red-500">
          hello
        </div>
      </Tooltip>
    </>
  )
}