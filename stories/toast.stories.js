import React from 'react'

import { ToastBase } from '../src/base-components'
import { Toast, Button } from '../src'

import { Alert, Close, AlertInformation, AlertWarning, MoodWarning, CheckBadge, ArrowTurnBackward } from '../src/icons'


export default {
  title: 'Toast',
  component: ToastBase,
}

const labelClass = 'mb-1 font-bold capitalize'

const colors = ['info', 'success', 'warning', 'error']
const icons = [
  { icon: <AlertInformation size='lg'/> }, 
  { icon: <CheckBadge size='lg'/> }, 
  { icon: <AlertWarning size='lg'/> }, 
  { icon: <MoodWarning size='lg'/> }, 
]

/** -- props (InputBase):
 * [classes] - object, custom styling supported keys:
 *    root: input container div
 *    input: input element
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [value] - string, value of input
 * [defaultValue] - string, value of input on initial render
 * [placeholder] - string, helper value of input if value is empty
 * [onClick] - function, input click handler
 * [onChange] - function, input value change handler
 * [startIcon] - node, icon on left side of input
 * [endIcon] - node, icon on right side of input
 * [prefix] - string, value placed before the input value
 * [suffix] - string, value placed after the input value
 * [...rest] - any input element properties
 */

export const Base = () => {
  const button = <button>click me</button>

  return (
    <>
      <p className={labelClass}>Horizontal</p>
      <ToastBase 
        title='horizontal' 
        button={button}
        startIcon={<Alert size='lg'/>} 
        endIcon={<Close size='sm'/>} 
      />
      <p className={labelClass}>Vertical</p>
      <ToastBase 
        title='vertical'
        variant='vertical' 
        description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
        button={button}
        startIcon={<Alert size='lg'/>} 
        endIcon={<Close size='sm'/>} 
      />
    </>
  )
}

export const Normal = () => {
  const button = (type) => (
    <Button variant='elevated' size='sm' type={type}>action</Button>
  )

  return (
    <>
      <div className="flex flex-row">
        <div className='mr-10'>
          <p className={labelClass}>light</p>
          {colors.map((data, index) => {
            const _button = button(data)
            return (
              <div key={`light-${index}`} className='mb-2'>
                <Toast
                  color={data}
                  title='Toast message' 
                  button={_button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
        <div>
          <p className={labelClass}>semantic light</p>
          {colors.map((data, index) => {
            const _button = button(data)
            return (
              <div key={`semantic-light-${index}`} className='mb-2'>
                <Toast
                  type='semantic-light'
                  color={data}
                  title='Toast message' 
                  button={_button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-row">
        <div className='mr-10'>
          <p className={labelClass}>dark</p>
          {colors.map((data, index) => {
            const _button = button(data)
            return (
              <div key={`light-${index}`} className='mb-2'>
                <Toast
                  type='dark'
                  color={data}
                  title='Toast message' 
                  button={_button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
        <div>
          <p className={labelClass}>semantic dark</p>
          {colors.map((data, index) => {
            const _button = button(data)
            return (
              <div key={`semantic-dark-${index}`} className='mb-2'>
                <Toast
                  type='semantic-dark'
                  color={data}
                  title='Toast message' 
                  button={_button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export const Vertical = () => {
  const button = (
    <div className='flex flex-row items-center'>
      <button className='mr-2.5 underline focus:outline-none'>Action / Link</button>
      <ArrowTurnBackward size='md'/>
    </div>
  )

  return (
    <>
      <div className="flex flex-row">
        <div className='mr-10'>
          <p className={labelClass}>light</p>
          {colors.map((data, index) => {
            return (
              <div key={`light-${index}`} className='mb-2'>
                <Toast
                  variant='vertical' 
                  description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
                  color={data}
                  title='Toast message' 
                  button={button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
        <div>
          <p className={labelClass}>semantic light</p>
          {colors.map((data, index) => {
            return (
              <div key={`semantic-light-${index}`} className='mb-2'>
                <Toast
                  type='semantic-light'
                  variant='vertical' 
                  description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
                  color={data}
                  title='Toast message' 
                  button={button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-row">
        <div className='mr-10'>
          <p className={labelClass}>dark</p>
          {colors.map((data, index) => {
            return (
              <div key={`light-${index}`} className='mb-2'>
                <Toast
                  type='dark'
                  variant='vertical' 
                  description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
                  color={data}
                  title='Toast message' 
                  button={button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
        <div>
          <p className={labelClass}>semantic dark</p>
          {colors.map((data, index) => {
            return (
              <div key={`semantic-dark-${index}`} className='mb-2'>
                <Toast
                  type='semantic-dark'
                  variant='vertical' 
                  description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.' 
                  color={data}
                  title='Toast message' 
                  button={button}
                  icon={icons[index].icon} 
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
