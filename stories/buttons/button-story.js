import React from 'react'
import PropTypes from 'prop-types'

import { Button, ButtonGroup } from '../../src'
import { Add } from '../../src/icons'


const styles = {
  container: 'mb-5 flex flex-row justify-between items-end',
  label: 'text-blue-300 mt-5 mb-1',
}

/** -- props (Button):
 * [variant] - string, includes: outlined/borderless/elevated/filled
 * [size] - string, includes: lg/md/sm
 * [color] - string, includes: default/normal/warning/error
 * [...rest] - any button element attributes
 */

/** -- props (ButtonGroup):
 * [variant] - string, match Button vairant, includes: outlined/borderless/elevated/filled
 * [align] - string, alignment of button group, includes: horizontal/vertical
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

      <div className='flex flex-row'>
        <div className='mr-20'>
          <p className='text-primary-700 mt-20 mb-3'>GROUPED (horizontal):</p>
          <ButtonGroup variant={variant}>
            <Button size='lg'><Add size='lg' /></Button>
            <Button size='lg'><Add size='lg' /></Button>
            <Button size='lg'><Add size='lg' /></Button>
            <Button size='lg'><Add size='lg' /></Button>
          </ButtonGroup>
          <div className='mt-5'>
            <ButtonGroup variant={variant}>
              <Button size='lg'>Button</Button>
              <Button size='lg'>Button</Button>
              <Button size='lg'>Button</Button>
              <Button size='lg'><Add size='lg' /></Button>
            </ButtonGroup>
          </div>
          <div className='mt-5'>
            <ButtonGroup variant={variant}>
              <Button size='md'>Button</Button>
              <Button size='md'>Button</Button>
              <Button size='md'>Button</Button>
              <Button size='md'><Add size='md' /></Button>
            </ButtonGroup>
          </div>
          <div className='mt-5'>
            <ButtonGroup variant={variant}>
              <Button size='sm'>Button</Button>
              <Button size='sm'>Button</Button>
              <Button size='sm'>Button</Button>
              <Button size='sm'><Add size='sm' /></Button>
            </ButtonGroup>
          </div>
        </div>

        <div>
          <p className='text-primary-700 mt-20 mb-3'>GROUPED (vertical):</p>
          <ButtonGroup variant={variant} align='vertical'>
            <Button size='lg'><Add size='lg' /></Button>
            <Button size='lg'><Add size='lg' /></Button>
            <Button size='lg'><Add size='lg' /></Button>
            <Button size='lg'><Add size='lg' /></Button>
          </ButtonGroup>
          <span className='ml-5'>
            <ButtonGroup variant={variant} align='vertical'>
              <Button size='lg'>Button</Button>
              <Button size='lg'>Button</Button>
              <Button size='lg'>Button</Button>
              <Button size='lg'><Add size='lg' /></Button>
            </ButtonGroup>
          </span>
          <span className='ml-5'>
            <ButtonGroup variant={variant} align='vertical'>
              <Button size='md'>Button</Button>
              <Button size='md'>Button</Button>
              <Button size='md'>Button</Button>
              <Button size='md'><Add size='md' /></Button>
            </ButtonGroup>
          </span>
          <span className='ml-5'>
            <ButtonGroup variant={variant} align='vertical'>
              <Button size='sm'>Button</Button>
              <Button size='sm'>Button</Button>
              <Button size='sm'>Button</Button>
              <Button size='sm'><Add size='sm' /></Button>
            </ButtonGroup>
          </span>
        </div>
      </div>
    </>
  )
}

ButtonStory.propTypes = { variant: PropTypes.string.isRequired }
export default ButtonStory
