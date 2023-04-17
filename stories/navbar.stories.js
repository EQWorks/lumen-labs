import React, { useState } from 'react'

import { makeStyles, Navbar , Button } from '../src'
import { Alias, Dollar, Star, AddCircle } from '../src/icons'


export default {
  title: 'Navbar',
  component: Navbar,
}

const icons = [
  {
    icon: <Alias size='lg'/>,
    title: 'Offers',
  },
  {
    icon: <Dollar size='lg'/>,
    title: 'Wallet',
  },
  {
    icon: <Star size='lg'/>,
    title: 'Refer & Earn',
  },
  {
    icon: <AddCircle size='lg'/>,
    title: 'Profile',
  },
]

const customStyle = makeStyles({
  navbarRoot: {
    background: 'black',
  },
  itemContainer: {
    color: 'white',
    fontFamily: 'Radio Canada',
  },
  itemContainerActive: {
    background: 'rgba(246, 183, 71, 1)',
  },
  text: {
    color: 'white',
    fontFamily: 'Radio Canada',
  },
  textActive: {
    color: 'black',
  },
  iconActive: {
    color: 'black',
  },
})


export const Default = () => {
  const [currentSelected, setCurrentSelected] = useState('')

  return (
    <Navbar>
      <Navbar.NavbarHeader
        onClick={() => setCurrentSelected('')}
      >
        <h1>LOGO</h1>
      </Navbar.NavbarHeader>
      {
        icons.map(({ icon, title }) => (
          <Navbar.NavbarItem
            key={`navbar-item-${title}`}
            icon={icon}
            id={title}
            label={title}
            isSelected={currentSelected === title}
            onClick={() => setCurrentSelected(title)}/>
        ))
      }
      <Button>Settings</Button>
    </Navbar>
  )
}

export const CustomStyle = () => {
  const [currentSelected, setCurrentSelected] = useState('')

  return (
    <Navbar classes={{ root: customStyle.navbarRoot }}>
      <Navbar.NavbarHeader
        onClick={() => setCurrentSelected('')}
      >
        <h1 className='text-white'>LOGO</h1>
      </Navbar.NavbarHeader>
      {
        icons.map(({ icon, title }) => (
          <Navbar.NavbarItem
            key={`navbar-item-${title}`}
            icon={icon}
            id={title}
            label={title}
            isSelected={currentSelected === title}
            classes={{
              itemContainer: customStyle.itemContainer,
              itemContainerActive: customStyle.itemContainerActive,
              text: customStyle.text,
              textActive: customStyle.textActive,
              iconActive: customStyle.iconActive,
            }}
            onClick={() => setCurrentSelected(title)}/>
        ))
      }
      <Button>Settings</Button>
    </Navbar>
  )
}
