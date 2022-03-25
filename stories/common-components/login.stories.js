import React from 'react'

import Login from '../../src/common-components/login'
import LOGO from './images/secondary_logo.png'


export default {
  title: 'Common Components/Login',
}

export const Normal = () => {
  return (
    <Login
      logo={<img width='114px' height='64px' src={LOGO} alt='logo' />}
    />
  )
}
