import React, { useState } from 'react'

import Login from '../../src/modules/login'

export default {
  title: 'Modules/Login',
}

export const Normal = () => {
  const [showPasscode, setShowPasscode] = useState(false)
  const [loadingConfig, setLoadingConfig] = useState({})

  const handleEmailSubmit = () => {
    setLoadingConfig((prev) => ({ ...prev, emailLoading: true, emailLoadingMsg: 'Sending Authentication Code' }))
    setTimeout(() => {
      setLoadingConfig((prev) => ({ ...prev, emailLoading: false, emailLoadingMsg: '' }))
      if (!showPasscode) {
        setShowPasscode(true)
      }
    }, 2000)
  }
  const handlePasscodeSubmit = () => {
    setLoadingConfig((prev) => ({ ...prev, passcodeLoading: true, passcodeLoadingMsg: 'Verifying account...' }))
    setTimeout(() => {
      setLoadingConfig((prev) => ({ ...prev, passcodeLoading: false, passcodeLoadingMsg: '' }))
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
        if (loadingConfig?.emailLoading !== val.loadingConfig?.emailLoading || loadingConfig?.passcodeLoading !== val.loadingConfig?.passcodeLoading) {
          setLoadingConfig(val.loadingConfig)
        }
      }}
      onEmailSubmit={handleEmailSubmit}
      onPasscodeSubmit={handlePasscodeSubmit}
      classes={{ footerLogo: 'bg-secondary-300' }}
    />
  )
}
