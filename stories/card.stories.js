import React from 'react'

import { Card } from '../src'
import { CardBase } from '../src/base-components'


export default {
  title: 'Cards',
  component: CardBase,
}

/** -- props (CardBase):
 * [classes] - object, custom styling supported keys:
 *    root: card base container div
 *    closeIcon: close icon span when [onClose] is defined
 *    header: header container div
 *    content: content container div
 *    footer: footer container div
 * [header] - node, any element to be displayed at top of card
 * [content] - node, any element to be displayed spaning full height of card
 * [footer] - node, any element to be displayed at bottom of card
 * [onClose] - function, card close handler + close icon if needed
 */
export const Base = () => {
  return (
    <>
      <p className='text-blue-300 mt-5 mb-1'>Normal:</p>
      <CardBase header='header' content='content' footer='footer' classes={{ root: 'w-48' }} />
      <p className='text-blue-300 mt-5 mb-1'>With Close Icon:</p>
      <CardBase header='header' content='content' footer='footer' onClose={() => {}} classes={{ root: 'w-48' }} />
    </>
  )
}

/** -- props (Card):
 * [classes] - object, any CardBase classes
 * [size] - string, support sizes sm/md/lg
 * [..rest] - any CardBase props
 */
export const Normal = () => {
  const cardProps = { header: 'Header section', content: 'Content section', footer: 'Footer section' }
  const _classes = {
    root: 'ml-5',
    header: 'border border-red-200 text-xs',
    content: 'border border-primary-200 text-xs',
    footer: 'border border-red-200 text-xs',
  }
  return (
    <>
      <p className='text-blue-300 mt-5 mb-1'>Small:</p>
      <div className='flex flex-row'>
        <Card size='sm' classes={_classes} {...cardProps} />
        <Card size='sm' onClose={() => {}} {...cardProps} classes={{ closeIcon: 'w-2.5 h-2.5', ..._classes }} />
      </div>
      <p className='text-blue-300 mt-5 mb-1'>Medium:</p>
      <div className='flex flex-row'>
        <Card size='md' classes={_classes} {...cardProps} />
        <Card size='md' onClose={() => {}} {...cardProps} classes={_classes} />
      </div>
      <p className='text-blue-300 mt-5 mb-1'>Large:</p>
      <div className='flex flex-row'>
        <Card size='lg' classes={_classes} {...cardProps} />
        <Card size='lg' onClose={() => {}} {...cardProps} classes={_classes} />
      </div>
    </>
  )
}
