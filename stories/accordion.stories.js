import React from 'react'

import { AccordionBase } from '../src/base-components'
import { Accordion, DropdownSelect } from '../src'
import { ArrowDown, ChevronDown, Add, Remove } from '../src/icons'
import { sampleDataBasic } from './data/dropdown-data'


export default {
  title: 'Accordion',
  component: AccordionBase,
}

/** -- props (AccordionBase):
 * [onChange] - function, returns (clicked paneldID, active panelIDs)
 * [defaultActivePanels] - array, sets initial active panel IDs
 */
/** -- props (PanelBase):
 * [classes] - object, custom styling supported keys:
 *    header: panel summary section
 *    detials: panel details section
 *    icon: [ExpandIcon] or [CompressIcon] classes
 *    iconRoot: wrapper div for [ExpandIcon] or [CompressIcon]
 * [id] - string|number, unique identifier for each panel
 * [header] - any, panel summary
 * [ExpandIcon] - elementType, icon for panel expansion
 * [CompressIcon] - elementType, icon for panel compression
 * [alignIcon] - string, (start, end) icon alignment for [ExpandIcon] & [CompressIcon]
 * [overflow] - allows Accordion children components to overflow on the content of below Accordion components
 */

export const Base = () => {
  return (
    <>
      <p className='text-blue-300 mt-5 mb-1'>Start + End Icon:</p>
      <AccordionBase className='border w-full'>
        <AccordionBase.PanelBase
          id='1'
          header='header 1'
          ExpandIcon={ChevronDown}
          alignIcon='end'
          classes={{ icon: 'w-5 h-5 mt-px', details: 'h-10' }}
        >Details 1</AccordionBase.PanelBase>
        <AccordionBase.PanelBase
          id='2'
          header='header 2'
          ExpandIcon={ChevronDown}
          classes={{ icon: 'w-5 h-5 mt-px', details: 'h-10' }}
        >Details 2</AccordionBase.PanelBase>
      </AccordionBase>

      <p className='text-blue-300 mt-5 mb-1'>Default Active Panel:</p>
      <AccordionBase className='border w-full' defaultActivePanels={['2']}>
        <AccordionBase.PanelBase
          id='1'
          header='header 1'
          ExpandIcon={Add}
          CompressIcon={Remove}
          alignIcon='end'
          classes={{ header: 'border', icon: 'w-3 h-3 mt-1', details: 'bg-secondary-100 h-10' }}
        >Details 1</AccordionBase.PanelBase>
        <AccordionBase.PanelBase
          id='2'
          header='header 2'
          ExpandIcon={Add}
          CompressIcon={Remove}
          classes={{ header: 'border', icon: 'w-3 h-3 mt-1 mr-1', details: 'bg-secondary-100 h-10' }}
        >Details 2</AccordionBase.PanelBase>
      </AccordionBase>
    </>
  )
}

/** -- props (Accordion):
 * [variant] - string, style variant of component
 * [color] - color theme for icon/header/details
 * [...rest] - any AccordionBase component props
 */
/** -- props (Panel):
 * [...rest] - any PanelBase component props
 */
export const Default = () => {
  return (
    <>
      <Accordion className='w-full'>
        <Accordion.Panel id='1' header='HEADER - 1' ExpandIcon={ChevronDown}>
          Details 1
        </Accordion.Panel>
        <Accordion.Panel id='2' header='HEADER - 2' ExpandIcon={ChevronDown}>
          Details 2
        </Accordion.Panel>
      </Accordion>

      <p className='text-blue-300 mt-5 mb-1'>Colour themes (arbitrary colour input):</p>
      <Accordion className='w-1/3' color='primary'>
        <Accordion.Panel id='1' header='COLOR = PRIMARY' ExpandIcon={ChevronDown}>
          Details
        </Accordion.Panel>
      </Accordion>
      <div>
        <Accordion className='w-1/3' color='secondary'>
          <Accordion.Panel id='1' header='COLOR = SECONDARY' ExpandIcon={ChevronDown}>
            Details
          </Accordion.Panel>
        </Accordion>
      </div>
      <Accordion className='w-1/3' color='red'>
        <Accordion.Panel id='1' header='COLOR = RED' ExpandIcon={ChevronDown} alignIcon='end'>
          Details
        </Accordion.Panel>
      </Accordion>
      <div>
        <Accordion className='w-1/3' color='purple'>
          <Accordion.Panel id='1' header='COLOR = PURPLE' ExpandIcon={ChevronDown} alignIcon='end'>
            Details
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  )
}

export const LeftBordered = () => {
  return (
    <>
      <Accordion variant='left-bordered' className='w-1/3'>
        <Accordion.Panel id='1' header='HEADER - 1' ExpandIcon={Add} CompressIcon={Remove}>
          Details 1
        </Accordion.Panel>
        <Accordion.Panel id='2' header='HEADER - 2' ExpandIcon={Add} CompressIcon={Remove}>
          Details 2
        </Accordion.Panel>
      </Accordion>

      <p className='text-blue-300 mt-5 mb-1'>Colour themes (arbitrary colour input):</p>
      <div>
        <Accordion variant='left-bordered' className='w-1/3' color='secondary'>
          <Accordion.Panel id='1' header='HEADER - 1' ExpandIcon={Add} CompressIcon={Remove}>
            Details 1
          </Accordion.Panel>
          <Accordion.Panel id='2' header='HEADER - 2' ExpandIcon={Add} CompressIcon={Remove}>
            Details 2
          </Accordion.Panel>
        </Accordion>
        <Accordion variant='left-bordered' className='w-1/3' color='purple'>
          <Accordion.Panel id='1' header='HEADER - 1' ExpandIcon={Add} CompressIcon={Remove}>
            Details 1
          </Accordion.Panel>
          <Accordion.Panel id='2' header='HEADER - 2' ExpandIcon={Add} CompressIcon={Remove}>
            Details 2
          </Accordion.Panel>
        </Accordion>
        <Accordion variant='left-bordered' className='w-1/3' color='green'>
          <Accordion.Panel id='1' header='HEADER - 1' ExpandIcon={Add} CompressIcon={Remove}>
            Details 1
          </Accordion.Panel>
          <Accordion.Panel id='2' header='HEADER - 2' ExpandIcon={Add} CompressIcon={Remove}>
            Details 2
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  )
}

export const Overflow = () => {
  return (
    <div className='h-32'>
      <p className='text-blue-300 mb-1'>Overflow:</p>
      <div>
        <Accordion variant='left-bordered' className='w-1/3' color='secondary'>
          <Accordion.Panel id='1' header='HEADER - 1' ExpandIcon={Add} CompressIcon={Remove} overflow>
            <DropdownSelect simple
              data={sampleDataBasic}
              endIcon={<ArrowDown size='md' />}
              placeholder='Select a word'
            />
          </Accordion.Panel>
          <Accordion.Panel id='2' header='HEADER - 2' ExpandIcon={Add} CompressIcon={Remove}>
            Details 2
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  )
}
