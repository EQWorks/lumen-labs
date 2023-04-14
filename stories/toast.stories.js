import React, { useState } from 'react'

import { ToastBase } from '../src/base-components'
import { Toast, Button } from '../src'

import { Alert, Close, AlertInformation, AlertWarning, MoodWarning, CheckBadge, ArrowTurnBackward } from '../src/icons'


export default {
  title: 'Toast',
  component: ToastBase,
}

const labelClass = 'my-1 font-bold capitalize'

const colors = ['info', 'success', 'warning', 'error']
const icons = [
  { icon: <AlertInformation size='lg'/> },
  { icon: <CheckBadge size='lg'/> },
  { icon: <AlertWarning size='lg'/> },
  { icon: <MoodWarning size='lg'/> },
]

/** -- props (ToastBase):
 * [classes] - object, custom styling supported keys:
 *    root: toast container div
 *    header: header container div
 *    title: title container div
 *    content: content container div
 *    description: description container div
 *    startIcon: startIcon container div
 *    endIcon: endIcon container div
 * [variant] - string, control component display format - supported values ['horizontal', 'vertical'], default = 'horizontal'
 * [title] - string, value of title
 * [description] - string, description text under the title/name
 * [button] - node, custom onClick element
 * [startIcon] - node, icon on left side of title
 * [endIcon] - node, icon on right side of title
 * [...rest] - any div element properties
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

/** -- props (Toast):
 * [classes] - object, custom styling supported keys:
 *    root: toast container div
 *    header: header container div
 *    title: title container div
 *    content: content container div
 *    description: description container div
 *    icon: icon container div
 * [variant] - string, control component display format - supported values ['horizontal', 'vertical'], default = 'horizontal'
 * [open] - bool, if true component  will be displayed - default = true
 * [onClose] - function, on call when close button is clicked
 * [type] - string, control component styling type - supported values ['light', 'dark', 'semantic-light', 'semantic-dark'], default = 'light'
 * [color] - string, control component color styling
 * [title] - string, value of title
 * [description] - string, description text under the title/name
 * [button] - node, custom onClick element
 * [icon] - node, icon on left side of title
 * [timeOut] - number, toast pop up timer
 * [onTimeOut] - func, on call when toast timer is finished
 * [...rest] - any div element properties
 */

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

export const Usage = () => {
  const [popUp, setPopUp] = useState(false)
  const [checked, setChecked] = useState(true)
  const buttonH = <Button variant='elevated' size='sm' type='info'>undo</Button>
  const buttonP = <Button variant='elevated' size='sm' type='success'>action</Button>
  const buttonV = <button className='mr-2.5 underline focus:outline-none'>Query Lab Documentation</button>

  return (
    <div className='flex'>
      <div className='mr-5'>
        <p className={labelClass}>10 seconds toast pop-up</p>
        <div className="flex">
          <div className="mr-2">
            <input
              type="radio"
              id="horizontal"
              name="horizontal"
              onChange={() => {
                setChecked(!checked)
              }}
              value="horizontal"
              checked={checked}
            />
            <label htmlFor="horizontal">Horizontal</label>
          </div>
          <div>
            <input
              type="radio"
              id="vertical"
              name="vertical"
              onChange={() => {
                setChecked(!checked)
              }}
              value="vertical"
              checked={!checked}
            />
            <label htmlFor="vertical">Vertical</label>
          </div>
        </div>
        <div>
          <div className='mb-2'>
            <Button variant='outlined' size='lg' onClick={() => setPopUp(true)}>Click me</Button>
          </div>
          {checked ?
            <Toast
              type='semantic-light'
              color='success'
              title='Pop-up Success'
              button={buttonP}
              icon={<CheckBadge size='lg'/>}
              open={popUp}
              onClose={() => setPopUp(false)}
              timeOut={10000}
            />
            :
            <Toast
              type='semantic-light'
              variant='vertical'
              color='error'
              title='Invalid Query - [ERROR_CODE]'
              description='There was a problem with your build. Try selecting a different dataset or refer to the QL documentation on how to build a correct query.'
              button={buttonV}
              icon={<MoodWarning size='lg'/>}
              open={popUp}
              onClose={() => setPopUp(false)}
              timeOut={10000}
            />
          }
        </div>
      </div>
      <div>
        <p className={labelClass}>Small/Horizontal toast - undo action</p>
        <Toast
          type='dark'
          color='info'
          title='6 items deleted.'
          button={buttonH}
          icon={<AlertInformation size='lg'/>}
        />
        <p className={labelClass}>Large/Vertical toast - error message</p>
        <Toast
          variant='vertical'
          color='error'
          title='Invalid Query - [ERROR_CODE]'
          description='There was a problem with your build. Try selecting a different dataset or refer to the QL documentation on how to build a correct query.'
          button={buttonV}
          icon={<MoodWarning size='lg'/>}
        />
      </div>
    </div>
  )
}
