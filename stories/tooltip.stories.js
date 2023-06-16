import React from 'react'

import { Tooltip, Chip } from '../src'


export default {
  title: 'Tooltip',
  component: Tooltip,
}

const labelClass = 'my-2 mr-3 font-bold capitalize'

/** -- props (Tooltip):
 * [classes] - object, custom styling supported keys:
 *    container: outer container div
 *    root: tooltip container div
 *    arrow: tooltip container's arrow
 *    header: header container div
 *    title: title container div
 *    content: content container div
 *    description: description container div
 * [type] - string, control component styling type - supported values ['light', 'dark'], default = 'light'
 * [title] - string, value of title
 * [description] - string, description text under the title/name
 * [width] - string, defines tooltip container's width, default = 'auto'
 * [position] - string, controls tooltip position - supported values ['top', 'right', 'bottom', 'left'], default = 'top'
 * [arrow] - boolean, controls tooltip arrow display, default = true
 * [delay] - number, defines a delay period for activing the tooltip on hover, default = 0
 * [...rest] - any div element properties
 */

export const Normal = () => {
  return (
    <div className='flex flex-row justify-center m-10'>
      <div>
        <p className={labelClass}>Light - Left</p>
        <Tooltip
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          position='left'
        >
          <Chip>Tooltip</Chip>
        </Tooltip>
        <p className={`${labelClass}`}>Dark - Left</p>
        <Tooltip
          type='dark'
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          position='left'
        >
          <Chip>Tooltip</Chip>
        </Tooltip>
      </div>
      <div className='flex flex-col justify-center mx-4'>
        <div className='flex flex-row'>
          <div>
            <p className={labelClass}>Light - Top</p>
            <Tooltip
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              position='top'
            >
              <Chip color='success'>Tooltip</Chip>
            </Tooltip>
          </div>
          <div>
            <p className={`${labelClass}`}>Dark - Top</p>
            <Tooltip
              type='dark'
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              position='top'
            >
              <Chip color='success'>Tooltip</Chip>
            </Tooltip>
          </div>
        </div>
        <div className='flex flex-row'>
          <div>
            <p className={`${labelClass}`}>Light - Bottom</p>
            <Tooltip
              type='light'
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              position='bottom'
            >
              <Chip color='error'>Tooltip</Chip>
            </Tooltip>
          </div>
          <div>
            <p className={`${labelClass}`}>Dark - Bottom</p>
            <Tooltip
              type='dark'
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              position='bottom'
            >
              <Chip color='error'>Tooltip</Chip>
            </Tooltip>
          </div>
        </div>
      </div>
      <div>
        <p className={labelClass}>Light - Right</p>
        <Tooltip
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          position='right'
        >
          <Chip color='info'>Tooltip</Chip>
        </Tooltip>
        <p className={`${labelClass}`}>Dark - Right</p>
        <Tooltip
          type='dark'
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          position='right'
        >
          <Chip color='info'>Tooltip</Chip>
        </Tooltip>
      </div>
    </div>
  )
}

export const NoArrow = () => {
  return (
    <div className='flex flex-row justify-center m-10'>
      <div>
        <p className={labelClass}>Light - Left</p>
        <Tooltip
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          arrow={false}
          position='left'
        >
          <Chip>Tooltip</Chip>
        </Tooltip>
        <p className={`${labelClass}`}>Dark - Left</p>
        <Tooltip
          type='dark'
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          arrow={false}
          position='left'
        >
          <Chip>Tooltip</Chip>
        </Tooltip>
      </div>
      <div className='flex flex-col justify-center mx-4'>
        <div className='flex flex-row'>
          <div>
            <p className={labelClass}>Light - Top</p>
            <Tooltip
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              arrow={false}
              position='top'
            >
              <Chip color='success'>Tooltip</Chip>
            </Tooltip>
          </div>
          <div>
            <p className={`${labelClass}`}>Dark - Top</p>
            <Tooltip
              type='dark'
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              arrow={false}
              position='top'
            >
              <Chip color='success'>Tooltip</Chip>
            </Tooltip>
          </div>
        </div>
        <div className='flex flex-row'>
          <div>
            <p className={`${labelClass}`}>Light - Bottom</p>
            <Tooltip
              type='light'
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              arrow={false}
              position='bottom'
            >
              <Chip color='error'>Tooltip</Chip>
            </Tooltip>
          </div>
          <div>
            <p className={`${labelClass}`}>Dark - Bottom</p>
            <Tooltip
              type='dark'
              title='Tooltip'
              description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
              width='16.875rem'
              arrow={false}
              position='bottom'
            >
              <Chip color='error'>Tooltip</Chip>
            </Tooltip>
          </div>
        </div>
      </div>
      <div>
        <p className={labelClass}>Light - Right</p>
        <Tooltip
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          arrow={false}
          position='right'
        >
          <Chip color='info'>Tooltip</Chip>
        </Tooltip>
        <p className={`${labelClass}`}>Dark - Right</p>
        <Tooltip
          type='dark'
          title='Tooltip'
          description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
          width='16.875rem'
          arrow={false}
          position='right'
        >
          <Chip color='info'>Tooltip</Chip>
        </Tooltip>
      </div>
    </div>
  )
}

export const Delay = () => {
  return (
    <>
      <p className={labelClass}>Light - 2000ms</p>
      <Tooltip
        title='Tooltip'
        description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
        width='16.875rem'
        delay={2000}
        arrow={false}
        position='right'
      >
        <Chip>Tooltip</Chip>
      </Tooltip>
      <p className={`mt-5 ${labelClass}`}>Dark - 5000ms</p>
      <Tooltip
        type='dark'
        title='Tooltip'
        description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
        width='16.875rem'
        delay={5000}
        position='right'
      >
        <Chip>Tooltip</Chip>
      </Tooltip>
    </>
  )
}

export const CustomStyling = () => {
  return (
    <>
      <p className={labelClass}>Custom Styling</p>
      <Tooltip
        title='Tooltip'
        description='Lorem ipsum dolor sit amet, adipiscing elit. Tincidunt at in quis amet vestibulum aliquet dignissim at nunc.'
        width='16.875rem'
        arrow={true}
        position='right'
        classes={{
          root: 'rounded-xl',
          title: 'font-bold text-xs text-red-500',
        }}
      >
        <Chip>Tooltip</Chip>
      </Tooltip>
    </>
  )
}
