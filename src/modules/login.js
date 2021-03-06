import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'
import Layout from '../components/layout'
import TextField from '../components/text-field'
import Button from '../components/button'
import Loader from '../components/loader'


const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
const styles = makeStyles({
  siderContainer: { padding: '80px 70px' },
  siderImage: {
    position: 'absolute',
    backgroundImage: `url(${BG_IMAGE_URL})`,
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transform: 'scale(1.5)',
  },
  welContainer: {
    width: '400px',
    marginTop: '80px',
  },
  welTitle: {
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '34px',
    lineHeight: '36px',
  },
  welDescription: {
    marginTop: '20px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  contentContainer: {
    width: '400px',
    marginLeft: '80px',
  },
  login: {
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '60px',
    lineHeight: '72px',
    letterSpacing: '-0.5px',
  },
  verificationDescription: {
    marginTop: '40px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  emailChangeDescription: {
    marginTop: '20px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  loginDescription: {
    marginTop: '40px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  spacingMargin: {
    marginTop: '40px',
  },
  logo: {
    width: '114px',
    height: '64px',
  },
  footerLogo: {
    marginTop: '100px',
    width: '215px',
    height: '80px',
  },
  copyrightMsg: {
    marginTop: '20px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '10px',
    lineHeight: '56px',
  },
})

const Login = ({
  classes,
  product,
  showPasscode,
  emailChangeToggle,
  primaryLogo,
  secondaryLogo,
  welcomeTitle,
  welcomeDescription,
  copyrightMessage,
  loadingConfig,
  errorConfig,
  onEmailSubmit,
  onPasscodeSubmit,
  onChange,
}) => {
  const [email, setEmail] = useState('')
  const [passcode, setPasscode] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState({})

  useEffect(() => {
    if (loadingConfig) {
      setLoading(loadingConfig)
    }
    if (errorConfig) {
      setErrors(errorConfig)
    }
  }, [loadingConfig, errorConfig])

  const handleEmailSubmit = () => {
    if (!email) {
      return setErrors((prev) => ({ ...prev, type: 'email', isError: true, message: 'Email required' }))
    }
    if (onEmailSubmit) {
      onEmailSubmit(null, { email, passcode, errorConfig: errors, loadingConfig: loading })
    }
  }

  const handlePasscodeSubmit = () => {
    if (!passcode) {
      return setErrors((prev) => ({ ...prev, type: 'passcode', isError: true, message: 'Passcode required' }))
    }
    if (onPasscodeSubmit) {
      onPasscodeSubmit(null, { email, passcode, errorConfig: errors, loadingConfig: loading })
    }
  }

  const handleChange = (field, value) => {
    let changes = { email, passcode, errorConfig: errors, loadingConfig: loading }
  
    if (field === 'email') {
      setEmail(value)
      // basic validation source
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
      const r = new RegExp([
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+/,
        /@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?/,
        /(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      ].map((r) => r.source).join(''))
      const match = (value).match(r)
      let error = errors

      if (value && errors.isError && match) {
        error = { ...errors, type: '', isError: false, message: '' }
      }
      if (value && !match) {
        error = { ...errors, type: 'email', isError: true, message: 'Invalid email format' }
      }
      if (!value) {
        error = { ...errors, type: 'email', isError: true, message: 'Email required' }
      }

      setErrors(error)
      changes = { ...changes, errorConfig: error }
    }
  
    if (field === 'passcode') {
      setPasscode(value)
      const match = (value).match(/[^A-F\d]/gi)

      if (value && errors.isError) {
        setErrors((prev) => ({ ...prev, type: '', isError: false, message: '' }))
      }
      if (!value || match) {
        const error = {
          ...errors,
          type: 'passcode',
          isError: true,
          message: match ? `'${[...match]}' is not a valid character for passcode` : 'Passcode required',
        }
        setErrors(error)
        changes = { ...changes, errorConfig: error }
      }
    }

    if (onChange) {
      onChange(field, changes)
    }
  }

  return (
    <Layout className='w-full h-screen'>
      <Loader
        backdrop
        open={loading?.isLoading}
        message={loading?.isLoading ? loading?.message : ''}
        classes={{ root: 'flex flex-col justify-between items-center', message: 'mt-2' }}
      />
      <Layout.Sider className={`border ${styles.siderContainer} relative w-5/12 h-full overflow-hidden`}>
        <div className={`w-full h-full bg-primary-500 ${styles.siderImage}`} />
        <div className='relative w-full h-full'>
          <div className={`${classes.logo} ${styles.logo} text-secondary-50`}>{secondaryLogo}</div>
          <div className={styles.welContainer}>
            <p className={`${classes.welcomeTitle} ${styles.welTitle} font-normal text-left text-secondary-50`}>
              {welcomeTitle}
            </p>
            <p className={`${classes.welcomeDescription} ${styles.welDescription} font-bold text-left text-secondary-50`}>
              {welcomeDescription}
            </p>
          </div>
        </div>
      </Layout.Sider>
      <Layout.Content className='w-7/12 h-full flex justify-center items-center'>
        <div className={`flex flex-col justify-center items-start ${styles.contentContainer}`}>
          <p className={`${styles.login} font-normal text-secondary-900`}>
            {showPasscode ? 'Verify Account' : 'Log In'}</p>
          {!showPasscode && <p className={`${styles.loginDescription} font-normal text-secondary-900`}>
            To begin using {product}, please enter your associated email address to authenticate your account.
          </p>}
          {showPasscode &&
            <>
              <p className={`${styles.verificationDescription} font-normal text-secondary-900`}>
                Account authentication methods have been sent to <b className='text-primary-600'>{email}</b>
              </p>
              <a
                className={`${styles.emailChangeDescription} font-normal text-primary-500 cursor-pointer hover:underline`}
                onClick={emailChangeToggle}
              >
                Change my email address
              </a>
            </>
          }
          {!showPasscode && <TextField
            autoFocus
            type='email'
            label='Email'
            placeholder='example@gmail.com'
            error={Boolean(errors?.isError && errors?.type === 'email')}
            helperText={errors?.isError && errors?.type === 'email' ? errors?.message : '' }
            value={email}
            onChange={(val) => handleChange('email', val)}
            onSubmit={handleEmailSubmit}
            classes={{ container: `w-full ${styles.spacingMargin}` }}
          />}
          {showPasscode && <>
            <TextField
              autoFocus
              variant='linked'
              label='One-Time-Passcode'
              linkedFields={6}
              helperText={errors?.isError && errors?.type === 'passcode' ? errors?.message : ''}
              error={Boolean(errors?.isError && errors?.type === 'passcode')}
              value={passcode}
              onChange={(val) => handleChange('passcode', val)}
              onSubmit={handlePasscodeSubmit}
              classes={{ container: styles.spacingMargin }}
            />
            <a
              className={`${styles.emailChangeDescription} font-normal text-primary-500 cursor-pointer hover:underline`}
              onClick={handleEmailSubmit}
            >
              Did not receive a code?
            </a>
          </>}
          <Button
            size='lg'
            variant='filled'
            classes={{ button: `w-full ${styles.spacingMargin}` }}
            disabled={showPasscode ? !passcode : !email}
            onClick={showPasscode ? handlePasscodeSubmit : handleEmailSubmit}
          >Submit</Button>
          <hr className={`w-full ${styles.spacingMargin} border-secondary-300`} />

          <div className='w-full flex flex-col justify-center items-center'>
            <div className={`${classes.footerLogo} ${styles.footerLogo} inline-flex justify-center items-center`}>{primaryLogo}</div>
            {copyrightMessage && <p className={`${styles.copyrightMsg} font-normal text-secondary-500`}>{copyrightMessage}</p>}
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

Login.propTypes = {
  product: PropTypes.string.isRequired,
  primaryLogo: PropTypes.element.isRequired,
  showPasscode: PropTypes.bool.isRequired,
  emailChangeToggle: PropTypes.func.isRequired,
  secondaryLogo: PropTypes.element,
  classes: PropTypes.object,
  welcomeTitle: PropTypes.string,
  welcomeDescription: PropTypes.string, 
  copyrightMessage: PropTypes.string,
  onChange: PropTypes.func,
  onEmailSubmit: PropTypes.func,
  onPasscodeSubmit: PropTypes.func,
  loadingConfig: PropTypes.object,
  errorConfig: PropTypes.object,
}
Login.defaultProps = {
  classes: { logo: '', footerLogo: '', welcomeTitle: '', welcomeDescription: '' },
  secondaryLogo: null,
  welcomeTitle: 'Example Welcome Message for Login',
  welcomeDescription: `Example description lorem ipsum dolor sit amet.
    Id veritatis omnis qui veritatis velit in tenetur consequatur ut dolorem tempore qui galisum adipisci.`,
  copyrightMessage: 'lorem ipsum dolor sit amet',
  onChange: null,
  onEmailSubmit: null,
  onPasscodeSubmit: null,
  loadingConfig: {
    type: '',
    isLoading: false,
    message: '',
  },
  errorConfig: {
    type: '',
    isError: false,
    message: '',
  },
}

export default Login
