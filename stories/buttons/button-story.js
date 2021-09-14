import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../src'
import { Add } from '../../src/icons'


const styles = {
  container: 'mb-5 flex flex-row justify-between items-end',
  label: 'text-blue-300 mt-5 mb-1',
}

/** -- props (Button):
 * [variant] - string, includes: outlined/borderless/shaded/filled
 * [size] - string, includes: lg/md/sm
 * [color] - string, includes: default/normal/warning/error
 * [...rest] - any button element attributes
 */

const ButtonStory = ({ variant }) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.label}>Large:</p>
        <Button variant={variant} size='lg'>Button</Button>
        <Button variant={variant} size='lg' startIcon={<Add size='lg' />}>Button</Button>
        <Button variant={variant} size='lg' endIcon={<Add size='lg' />}>Button</Button>
        <Button variant={variant} size='lg'><Add size='lg' /></Button>
        <Button variant={variant} size='lg' type='success'>Success</Button>
        <Button variant={variant} size='lg' type='warning'>Warning</Button>
        <Button variant={variant} size='lg' type='error'>Error</Button>
        <Button disabled variant={variant} size='lg'>Disabled</Button>
      </div>

      <div className={styles.container}>
        <p className={styles.label}>Medium:</p>
        <Button variant={variant} size='md'>Button</Button>
        <Button variant={variant} size='md' startIcon={<Add size='md' />}>Button</Button>
        <Button variant={variant} size='md' endIcon={<Add size='md' />}>Button</Button>
        <Button variant={variant} size='md'><Add size='md' /></Button>
        <Button variant={variant} size='md' type='success'>Success</Button>
        <Button variant={variant} size='md' type='warning'>Warning</Button>
        <Button variant={variant} size='md' type='error'>Error</Button>
        <Button disabled variant={variant} size='md'>Disabled</Button>
      </div>

      <div className={styles.container}>
        <p className={styles.label}>Small:</p>
        <Button variant={variant} size='sm'>Button</Button>
        <Button variant={variant} size='sm' startIcon={<Add size='sm' />}>Button</Button>
        <Button variant={variant} size='sm' endIcon={<Add size='sm' />}>Button</Button>
        <Button variant={variant} size='sm'><Add size='sm' /></Button>
        <Button variant={variant} size='sm' type='success'>Success</Button>
        <Button variant={variant} size='sm' type='warning'>Warning</Button>
        <Button variant={variant} size='sm' type='error'>Error</Button>
        <Button disabled variant={variant} size='sm'>Disabled</Button>
      </div>

      <div>
        <p className={styles.label}>Customized border-radius:</p>
        <span className='flex flex-row justify-start items-center'>
          <Button classes={{ button: { borderRadius: 'rounded-r-sm mr-10' } }} variant={variant} size='lg'>Button</Button>
          <Button classes={{ button: { borderRadius: 'rounded-l-sm mr-10' } }} variant={variant} size='lg'>Button</Button>
          <Button classes={{ button: { borderRadius: 'rounded-t-sm mr-10' } }} variant={variant} size='lg'>Button</Button>
          <Button classes={{ button: { borderRadius: 'rounded-b-sm' } }} variant={variant} size='lg'>Button</Button>
        </span>
      </div>
    </>
  )
}

ButtonStory.propTypes = { variant: PropTypes.string.isRequired }
export default ButtonStory
