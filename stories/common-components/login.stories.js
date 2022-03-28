import React, { useState } from 'react'

import Login from '../../src/modules/login'

export default {
  title: 'Modules/Login',
}

export const Normal = () => {
  const [loadingConfig, setLoadingConfig] = useState({})

  const handleEmailSubmit = () => {
    setLoadingConfig((prev) => ({ ...prev, emailLoading: true, emailLoadingMsg: 'Sending Authentication Code' }))
    setTimeout(() => {
      setLoadingConfig((prev) => ({ ...prev, emailLoading: false, emailLoadingMsg: '' }))
    }, 2000)
  }

  return (
    <Login
      product='Power Report Dashboard'
      logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
      loadingConfig={loadingConfig}
      onChange={(val) => {
        if (loadingConfig?.emailLoading !== val.loadingConfig?.emailLoading || loadingConfig?.passcodeLoading !== val.loadingConfig?.passcodeLoading) {
          setLoadingConfig(val.loadingConfig)
        }
      }}
      onEmailSubmit={handleEmailSubmit}
      classes={{ footerLogo: 'bg-secondary-300' }}
    />
  )
}
