import React from 'react'

import { AccordionBase } from '../src/base-components'
import { ChevronDown, Add, Remove } from '../src/icons'


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
 * [id] - string|number, unique identifier for each panel
 * [header] - any, panel summary
 * [ExpandIcon] - elementType, icon for panel expansion
 * [CompressIcon] - elementType, icon for panel compression
 * [alignIcon] - string, (start, end) icon alignment for [ExpandIcon] & [CompressIcon]
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
