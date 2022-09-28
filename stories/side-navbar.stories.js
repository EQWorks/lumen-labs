import React, { useState } from 'react'

import { SideNavbar } from '../src'
import { AlertInformation, Check, Delete, Info, Play } from '../src/icons'


export default {
  title: 'SideNavbar',
  component: SideNavbar,
}

const icons = [
  {
    icon: <Check size='md'/>,
    title: 'Check icon',
  },
  {
    icon: <Delete size='md'/>,
    title: 'Delete icon',
  },
  {
    icon: <Info size='md'/>,
    title: 'Info icon',
  },
  {
    icon: <Play size='md'/>,
    title: 'Play icon',
  },
]

/** -- props (SideNavbar):
 * [classes] - object, custom styling supported keys:
 *    root: base container div
 * [...rest] - any SideNavbar component div props
 */
/** -- props (SideBarItem):
 * [classes] - object, custom styling supported keys:
 *   mainContainer: main container div
 *   mainContainerActive: main container div when the item is selected/active
 *   contentContainer: content container div 
 *   icon: icon container div
 *   text: text container div
 * [id] - string, attribute specifies an unique id for the item element
 * [label] - string, defines item label text
 * [icon] - node, defines item icon svg
 * [onClick] - func, callback when the item is clicked
 * [isSelected] - bool, status state to check if the item is selected/active
 * [...rest] - any SideBarItem component div props
 */

export const Normal = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <SideNavbar>
      <SideNavbar.SideBarItem id='normal' icon={<AlertInformation size='md'/>} label='normal' isSelected={isSelected}  onClick={() => setIsSelected(!isSelected)}/>
    </SideNavbar>
  )
}

export const Multiple = () => {
  const [currentSelected, setCurrentSelected] = useState('')

  return (
    <SideNavbar>
      {icons.map(({ icon, title }) => (
        <SideNavbar.SideBarItem 
          key={`sidebar-item-${title}`}
          icon={icon} 
          id={title} 
          label={title} 
          isSelected={currentSelected === title} 
          onClick={() => setCurrentSelected(title)}/>
      ))}
    </SideNavbar>
  )
}
