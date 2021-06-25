import React from 'react'

import { CardBase } from '../src/base-components'


export default {
  title: 'Cards',
  component: CardBase,
}

/** -- props (ButtonBase):
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
