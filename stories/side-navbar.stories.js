import React, { useState } from 'react'

import { makeStyles, SideNavbar } from '../src'
import { AlertInformation, Check, Clock, Delete, Globe, Info, Play } from '../src/icons'


export default {
  title: 'SideNavbar',
  component: SideNavbar,
}

const icons = [
  {
    icon: <Check size='lg'/>,
    title: 'Dealer Market Area',
  },
  {
    icon: <Delete size='lg'/>,
    title: 'Dealer Visitation',
  },
  {
    icon: <Info size='lg'/>,
    title: 'Competitor Visitation',
  },
  {
    icon: <Play size='lg'/>,
    title: 'Cross Visitation',
  },
]

const footerIcons = [
  {
    icon: <Clock size='lg'/>,
    title: 'Profile',
  },
  {
    icon: <Globe size='lg'/>,
    title: 'Logout',
  },
]

const customStyle = makeStyles({
  sideNavbarRoot: {
    '& .side-bar__header-container': {
      padding: 0,
    },

    '& .side-bar__footer-container': {
      padding: 0,
    },
  },
})

/** -- props (SideNavbar):
 * [classes] - object, custom styling supported keys:
 *    root: base container div
 * [...rest] - any SideNavbar component div props
 */
/** -- props (SideBarMenu):
 * [classes] - object, custom styling supported keys:
 *    menuContainer: header main container div
 * [id] - string, attribute specifies an unique id for the item element
 * [children] - any, render inner content elements,
 * [onClick] - func, callback when the item is clicked
 * [...rest] - any SideBarItem component div props
 */
/** -- props (SideBarHeader, SideBarFooter):
 * [classes] - object, custom styling supported keys:
 *    headerContainer: header main container div ---- for SideBarHeader
 *    footerContainer: header main container div ---- for SideBarFooter
 * [children] - any, render inner content elements,
 * [onClick] - func, callback when the item is clicked
 * [...rest] - any SideBarItem component div props
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


export const Simple = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <SideNavbar>
      <SideNavbar.SideBarItem id='normal' icon={<AlertInformation size='md'/>} label='simple' isSelected={isSelected}  onClick={() => setIsSelected(!isSelected)}/>
    </SideNavbar>
  )
}

export const Default = () => {
  const [currentSelected, setCurrentSelected] = useState('')

  return (
    <SideNavbar classes={{ root: customStyle.sideNavbarRoot }}>
      <SideNavbar.SideBarHeader>
        <SideNavbar.SideBarMenu id='header-title'>SIDE BAR HEADER</SideNavbar.SideBarMenu>
      </SideNavbar.SideBarHeader>
      <SideNavbar.SideBarMenu id='reports'>Reports</SideNavbar.SideBarMenu>
      {icons.map(({ icon, title }) => (
        <SideNavbar.SideBarItem
          key={`sidebar-item-${title}`}
          icon={icon}
          id={title}
          label={title}
          isSelected={currentSelected === title}
          onClick={() => setCurrentSelected(title)}/>
      ))}
      <SideNavbar.SideBarFooter>
        <SideNavbar.SideBarMenu id='footer-label'>SIDE BAR FOOTER</SideNavbar.SideBarMenu>
        {footerIcons.map(({ icon, title }) => (
          <SideNavbar.SideBarItem
            key={`sidebar-item-${title}`}
            icon={icon}
            id={title}
            label={title}
            isSelected={currentSelected === title}
            onClick={() => setCurrentSelected(title)}/>
        ))}
      </SideNavbar.SideBarFooter>
    </SideNavbar>
  )
}
