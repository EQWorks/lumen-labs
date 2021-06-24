import React, { useState } from 'react'

import { Loader } from '../src'


export default {
  title: 'Loader',
  component: Loader,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    icon: classes applied to icon svg
 *    message: classes applied to message beside icon
 * [backdrop] - boolean, renders loader as backdrop
 * [open] - boolean, control loader open/close
 * [message] - string, descriptive text beside icon if [backdrop] is true
 * [Icon] - node, any svg icon
 */

export const Backdrop = () => {
  return (<Loader open backdrop message='Loading...' />)
}

export const Wrapper = () => {
  const [open, setOpen] = useState(false)
  const button = (<button
    onClick={() => setOpen(!open)}
    className={`
      focus:outline-none w-24 p-2 rounded-sm cursor-pointer 
      hover:bg-blue-100 ${open ? 'bg-blue-100 text-blue-100' : 'bg-blue-50'}
    `}
  >Click</button>)
  
  return (
    <Loader open={open} classes={{ icon: 'text-primary-700' }}>
      <span>{button}</span>
    </Loader>
  )
}
