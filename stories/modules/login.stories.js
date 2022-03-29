import React, { useState } from 'react'

import Login from '../../src/modules/login'


export default {
  title: 'Modules/Login',
}

export const Normal = () => {
  const [showPasscode, setShowPasscode] = useState(false)
  const [loadingConfig, setLoadingConfig] = useState({})

  const handleEmailSubmit = () => {
    setLoadingConfig((prev) => ({ ...prev, type: 'email', isLoading: true, message: 'Sending Authentication Code' }))
    setTimeout(() => {
      setLoadingConfig((prev) => ({ ...prev, type: 'email', isLoading: false, message: '' }))
      if (!showPasscode) {
        setShowPasscode(true)
      }
    }, 2000)
  }
  const handlePasscodeSubmit = () => {
    setLoadingConfig((prev) => ({ ...prev, type: 'passcode', isLoading: true, message: 'Verifying account...' }))
    setTimeout(() => {
      setLoadingConfig((prev) => ({ ...prev, type: 'passcode', isLoading: false, message: '' }))
    }, 2000)
  }

  return (
    <Login
      product='Power Report Dashboard'
      logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
      showPasscode={showPasscode}
      loadingConfig={loadingConfig}
      passcodeResendHandler={handleEmailSubmit}
      emailChangeToggle={() => setShowPasscode(false)}
      onChange={(val) => {
        if (loadingConfig?.type !== val.loadingConfig?.type) {
          setLoadingConfig(val.loadingConfig)
        }
      }}
      onEmailSubmit={handleEmailSubmit}
      onPasscodeSubmit={handlePasscodeSubmit}
      classes={{ footerLogo: 'bg-secondary-300' }}
    />
  )
}
