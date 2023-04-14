import React from 'react'

import { Button, ButtonGroup, makeStyles } from '../src'
import { ButtonBase } from '../src/base-components'
import { Add } from '../src/icons'


const styles = {
  container: 'mb-5 flex flex-row justify-between items-end',
  label: 'text-blue-300 mt-5 mb-1',
}
const label = {
  primary: 'text-blue-300 mt-5 mb-1',
  secondary: 'pr-20 text-secondary-600',
}
const classes = { button: 'border border-1' }

export default {
  title: 'Buttons',
  component: Button,
}

/** -- props (ButtonBase):
 * [classes] - object, custom styling supported keys:
 *    button: button element
 *    content: button content span
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [startIcon] - node, icon on left side of button
 * [endIcon] - node, icon on right side of button
 * [...rest] - any button element attributes
 */
export const Base = () => (
  <>
    <p className={label.primary}>Normal:</p>
    <ButtonBase classes={classes}>Click</ButtonBase>
    <p className={label.primary}>Start Icon:</p>
    <ButtonBase classes={classes} startIcon={<Add className='w-4 h-4' />}>Click</ButtonBase>
    <p className={label.primary}>End Icon:</p>
    <ButtonBase classes={classes} endIcon={<Add className='w-4 h-4' />}>Click</ButtonBase>
    <p className={label.primary}>Icon Only:</p>
    <ButtonBase classes={classes}><Add className='w-4 h-4' /></ButtonBase>
  </>
)

/** -- props (Button):
 * [classes] - object, custom styling supported keys:
 *    button: button element of ButtonBase
 *    content: button content span
 *    startIcon: startIcon container div of ButtonBase
 *    endIcon: endIcon container div of ButtonBase
 * [variant] - string, includes: outlined/borderless/elevated/filled
 * [size] - string, includes: lg/md/sm
 * [type] - string, includes: default/normal/warning/error
 * [...rest] - any button element attributes
 */
const Template = (a) => (
  <>
    <div className={styles.container}>
      <p className={styles.label}>Large:</p>
      <Button variant={a.variant} size='lg'>Button</Button>
      <Button variant={a.variant} size='lg' startIcon={<Add size='lg' />}>Button</Button>
      <Button variant={a.variant} size='lg' endIcon={<Add size='lg' />}>Button</Button>
      <Button variant={a.variant} size='lg'><Add size='lg' /></Button>
      <Button variant={a.variant} size='lg' type='success'>Success</Button>
      <Button variant={a.variant} size='lg' type='warning'>Warning</Button>
      <Button variant={a.variant} size='lg' type='error'>Error</Button>
      <Button disabled variant={a.variant} size='lg'>Disabled</Button>
    </div>

    <div className={styles.container}>
      <p className={styles.label}>Medium:</p>
      <Button variant={a.variant} size='md'>Button</Button>
      <Button variant={a.variant} size='md' startIcon={<Add size='md' />}>Button</Button>
      <Button variant={a.variant} size='md' endIcon={<Add size='md' />}>Button</Button>
      <Button variant={a.variant} size='md'><Add size='md' /></Button>
      <Button variant={a.variant} size='md' type='success'>Success</Button>
      <Button variant={a.variant} size='md' type='warning'>Warning</Button>
      <Button variant={a.variant} size='md' type='error'>Error</Button>
      <Button disabled variant={a.variant} size='md'>Disabled</Button>
    </div>

    <div className={styles.container}>
      <p className={styles.label}>Small:</p>
      <Button variant={a.variant} size='sm'>Button</Button>
      <Button variant={a.variant} size='sm' startIcon={<Add size='sm' />}>Button</Button>
      <Button variant={a.variant} size='sm' endIcon={<Add size='sm' />}>Button</Button>
      <Button variant={a.variant} size='sm'><Add size='sm' /></Button>
      <Button variant={a.variant} size='sm' type='success'>Success</Button>
      <Button variant={a.variant} size='sm' type='warning'>Warning</Button>
      <Button variant={a.variant} size='sm' type='error'>Error</Button>
      <Button disabled variant={a.variant} size='sm'>Disabled</Button>
    </div>

    <div>
      <p className={styles.label}>Customized border-radius:</p>
      <span className='flex flex-row justify-start items-center'>
        <Button classes={{ button: { borderRadius: 'rounded-r-sm mr-10' } }} variant={a.variant} size='lg'>Button</Button>
        <Button classes={{ button: { borderRadius: 'rounded-l-sm mr-10' } }} variant={a.variant} size='lg'>Button</Button>
        <Button classes={{ button: { borderRadius: 'rounded-t-sm mr-10' } }} variant={a.variant} size='lg'>Button</Button>
        <Button classes={{ button: { borderRadius: 'rounded-b-sm' } }} variant={a.variant} size='lg'>Button</Button>
      </span>
    </div>

    <div className='flex flex-row'>
      <div className='mr-20'>
        <p className='text-primary-700 mt-20 mb-3'>GROUPED (horizontal):</p>
        <ButtonGroup variant={a.variant} size='lg'>
          <Button><Add size='lg' /></Button>
          <Button><Add size='lg' /></Button>
          <Button><Add size='lg' /></Button>
          <Button><Add size='lg' /></Button>
        </ButtonGroup>
        <div className='mt-5'>
          <ButtonGroup variant={a.variant} size='lg'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button><Add size='lg' /></Button>
          </ButtonGroup>
        </div>
        <div className='mt-5'>
          <ButtonGroup variant={a.variant} size='md'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button><Add size='md' /></Button>
          </ButtonGroup>
        </div>
        <div className='mt-5'>
          <ButtonGroup variant={a.variant} size='sm'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button><Add size='sm' /></Button>
          </ButtonGroup>
        </div>
      </div>

      <div>
        <p className='text-primary-700 mt-20 mb-3'>GROUPED (vertical):</p>
        <ButtonGroup variant={a.variant} size='lg' align='vertical'>
          <Button><Add size='lg' /></Button>
          <Button><Add size='lg' /></Button>
          <Button><Add size='lg' /></Button>
          <Button><Add size='lg' /></Button>
        </ButtonGroup>
        <span className='ml-5'>
          <ButtonGroup variant={a.variant} size='lg' align='vertical'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button><Add size='lg' /></Button>
          </ButtonGroup>
        </span>
        <span className='ml-5'>
          <ButtonGroup variant={a.variant} size='md' align='vertical'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button><Add size='md' /></Button>
          </ButtonGroup>
        </span>
        <span className='ml-5'>
          <ButtonGroup variant={a.variant} size='sm' align='vertical'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button><Add size='sm' /></Button>
          </ButtonGroup>
        </span>
      </div>
    </div>
  </>
)

export const Outlined = Template.bind({})
Outlined.args = { variant: 'outlined' }

export const Borderless = Template.bind({})
Borderless.args = { variant: 'borderless' }

export const Elevated = Template.bind({})
Elevated.args = { variant: 'elevated' }

export const Filled = Template.bind({})
Filled.args = { variant: 'filled' }

const Template1 = (a) => (
  <>
    <div>
      <p className='text-primary-700 mb-3'>CUSTOM STYLING:</p>
      <Button variant={a.variant} classes={a.classes}>Custom Button</Button>
    </div>
  </>
)

const customStyleClasses = makeStyles({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 40px',
    gap: '10px',
    width: '256px',
    height: '52px',
    background: 'linear-gradient(180deg, #FF6391 0%, #FF972A 100%)',
    borderRadius: '100px',
  },
  content: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
})

export const CustomStyling = Template1.bind({})
CustomStyling.args = {
  variant: 'borderless',
  classes: {
    button: customStyleClasses.button,
    content: customStyleClasses.content,
  },
}
