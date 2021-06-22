import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../src'
import { Add } from '../../src/icons'


const label = {
  primary: 'text-blue-300 mt-5 mb-1',
  secondary: 'pr-20 text-secondary-600',
}

/** -- props (Button):
 * [variant] - string, includes: outlined/borderless/shaded/filled
 * [size] - string, includes: lg/md/sm
 * [...rest] - any button element attributes
 */

const ButtonStory = ({ variant }) => {
  const iconClass = `w-3.5 h-3.5 fill-current ${variant === 'filled' ? 'text-white' : 'text-primary-700'}`
  return (
    <>
      <p className={label.primary}>Default:</p>
      <div className='flex flex-row'>
        <span className={label.secondary}>
          <p>Large:</p>
          <Button variant={variant} size='lg'>Button</Button>
        </span>
        <span className={label.secondary}>
          <p>Medium:</p>
          <Button variant={variant} size='md'>Button</Button>
        </span>
        <span className={label.secondary}>
          <p>Small:</p>
          <Button variant={variant} size='sm'>Button</Button>
        </span>
      </div>
      <p className={label.primary}>Icons:</p>
      <div className='flex flex-row'>
        <span className={label.secondary}>
          <p>Start Icon:</p>
          <Button variant={variant} size='lg' startIcon={<Add className={iconClass} />}>Button</Button>
          <div className='pt-5'><Button variant={variant} size='md' startIcon={<Add className={iconClass} />}>Button</Button></div>
          <div className='pt-5'><Button variant={variant} size='sm' startIcon={<Add className={iconClass} />}>Button</Button></div>
        </span>
        <span className={label.secondary}>
          <p>End Icon:</p>
          <Button variant={variant} size='lg' endIcon={<Add className={iconClass} />}>Button</Button>
          <div className='pt-5'><Button variant={variant} size='md' endIcon={<Add className={iconClass} />}>Button</Button></div>
          <div className='pt-5'><Button variant={variant} size='sm' endIcon={<Add className={iconClass} />}>Button</Button></div>
        </span>
        <span className={label.secondary}>
          <p>Icon Only:</p>
          <Button variant={variant} size='lg'><Add className={iconClass} /></Button>
          <div className='pt-5'><Button variant={variant} size='md'><Add className={iconClass} /></Button></div>
          <div className='pt-5'><Button variant={variant} size='sm'><Add className={iconClass} /></Button></div>
        </span>
      </div>
      <p className={label.primary}>Disabled:</p>
      <Button disabled variant={variant} size='lg'>Disabled</Button>
    </>
  )
}

ButtonStory.propTypes = { variant: PropTypes.string.isRequired }
export default ButtonStory
