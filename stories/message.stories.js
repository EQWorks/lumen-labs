import React from 'react'

import { Message } from '../src'


export default {
  title: 'Message',
  component: Message,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    root: styles root container
 *    messageContainer: styles [title] + [description] container div
 *    title: styles title
 *    description: styles description
 * [variant] - string, one of [default | info | success | warning | error]
 * [title] - string, dictates message title
 * [description] - string, dictates message description
 * [showIcon] - bool, show/hide icon (defaults to true)
 */

export const Normal = () => {
  const variants = ['default', 'info', 'success', 'warning', 'error']
  return (
    <div>
      <div className='grid grid-cols-5 gap-2'>
        {variants.map((variant, i) => (
          <Message key={i} title='Title' description='Description' variant={variant} />
        ))}
      </div>
      <div className='grid grid-cols-5 gap-2 mt-5'>
        {variants.map((variant, i) => (
          <Message key={i} title='Title' description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' variant={variant} showIcon={false} />
        ))}
      </div>
      <div className='grid grid-cols-5 gap-2 mt-5'>
        {variants.map((variant, i) => (
          <Message key={i} description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' variant={variant} />
        ))}
      </div>
      <div className='grid grid-cols-5 gap-2 mt-5'>
        {variants.map((variant, i) => (
          <Message key={i} description='Description' variant={variant} />
        ))}
      </div>
      <div className='grid grid-cols-5 gap-2 mt-5'>
        {variants.map((variant, i) => (
          <Message key={i} description='Description' variant={variant} showIcon={false} />
        ))}
      </div>
    </div>
  )
}

