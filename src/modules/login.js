import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'
import Layout from '../components/layout'
import TextField from '../components/text-field'
import Button from '../components/button'
import Loader from '../components/loader'


const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
const customClasses = (showPasscode) => {
  return makeStyles({
    siderContainer: { padding: '5rem 4.375rem' },
    siderImage: {
      position: 'absolute',
      backgroundImage: `url(${BG_IMAGE_URL})`,
      backgroundBlendMode: 'multiply',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transform: 'scale(1.5)',
      backgroundColor: '#00599A',
    },
    welContainer: {
      width: '25rem',
      marginTop: '5rem',
    },
    welTitle: {
      fontFamily: 'Radio Canada',
      fontSize: '2.125rem',
      lineHeight: '2.25rem',
    },
    welDescription: {
      marginTop: '5rem',
      fontFamily: 'Radio Canada',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.009rem',
      color: '#FFFFFF',
    },
    contentContainer: {
      width: showPasscode ? '40.313rem' : '27.438rem',
      marginLeft: '5rem',
    },
    login: {
      fontFamily: 'Radio Canada',
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
    verificationDescription: {
      marginTop: '2.25rem',
      fontFamily: 'Radio Canada',
      fontSize: '1rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.016rem',
    },
    emailChangeDescription: {
      marginTop: '1rem',
      fontFamily: 'Radio Canada',
      fontSize: '1rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.016rem',
    },
    loginDescription: {
      marginTop: '2.25rem',
      fontFamily: 'Radio Canada',
      fontSize: '1rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.016rem',
    },
    spacingMargin: {
      marginTop: '2.5rem',
    },
    logo: {
      width: '6.601rem',
      height: '4rem',
    },
    footerLogo: {
      marginTop: '6.25rem',
      width: '13.438rem',
      height: '5rem',
    },
    copyrightMsg: {
      marginTop: '1.25rem',
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '0.625rem',
      lineHeight: '3.5rem',
    },
    largeWidth: {
      width: showPasscode ? '16rem' : '25rem',
    },
    buttonMargin: {
      marginTop: showPasscode ? '1rem' : '2.5rem',
    },
    divider: {
      marginTop: '5rem',
      width: '25.125rem',
    },
  })}

const Login = ({
  classes = {
    logo: '',
    footerLogo: '',
    welcomeTitle: '',
    welcomeDescription: '',
    siderImage: '',
  },
  product,
  showPasscode,
  emailChangeToggle,
  primaryLogo,
  secondaryLogo = null,
  welcomeTitle = 'Example Welcome Message for Login',
  welcomeDescription = `Example description lorem ipsum dolor sit amet.
  Id veritatis omnis qui veritatis velit in tenetur consequatur ut dolorem tempore qui galisum adipisci.`,
  copyrightMessage,
  loadingConfig = {
    type: '',
    isLoading: false,
    message: '',
  },
  errorConfig = {
    type: '',
    isError: false,
    message: '',
  },
  onEmailSubmit = null,
  onPasscodeSubmit = null,
  onChange = null,
}) => {
  const [email, setEmail] = useState('')
  const [passcode, setPasscode] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState({})

  const styles = customClasses(showPasscode)

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
        <div className={`w-full h-full ${styles.siderImage} ${classes.siderImage}`} />
        <div className='relative w-full h-full'>
          <div className={`${classes.logo} ${styles.logo} text-secondary-50`}>{secondaryLogo}</div>
          {!showPasscode && <div className={styles.welContainer}>
            <p className={`${classes.welcomeTitle} ${styles.welTitle} font-normal text-left text-secondary-50`}>
              {welcomeTitle}
            </p>
            <p className={`${classes.welcomeDescription} ${styles.welDescription} font-normal text-left`}>
              {welcomeDescription}
            </p>
          </div>}
        </div>
      </Layout.Sider>
      <Layout.Content className='w-7/12 h-full flex justify-center items-center'>
        <div className={`flex flex-col justify-center items-center ${styles.contentContainer}`}>
          <p className={`${styles.login} font-normal text-secondary-900`}>
            {showPasscode ? 'Verify Account' : 'Log In'}</p>
          {!showPasscode && <p className={`${styles.loginDescription} font-normal text-secondary-700 text-center`}>
            To begin using {product}, please enter your associated email address and authenticate your account.
          </p>}
          {showPasscode &&
            <>
              <p className={`${styles.verificationDescription} font-normal text-center text-secondary-700`}>
                Account authentication methods have been sent to <span className='text-secondary-900'>{email}</span>
              </p>
              <a
                className={`${styles.emailChangeDescription} font-normal text-primary-500 cursor-pointer hover:underline`}
                onClick={emailChangeToggle}
              >
                Change email address
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
            classes={{ container: `${styles.largeWidth} ${styles.spacingMargin}` }}
          />}
          {showPasscode &&
          <div className={`flex flex-col ${styles.spacingMargin}`}>
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
              classes={{ container: `${styles.largeWidth} ` }}
            />
            <a
              className={`${styles.emailChangeDescription} font-normal text-primary-500 cursor-pointer hover:underline`}
              onClick={handleEmailSubmit}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Didn't receive a code?
            </a>
          </div>}
          <Button
            size='lg'
            variant='filled'
            classes={{ button: `${styles.largeWidth} ${styles.buttonMargin}` }}
            disabled={showPasscode ? !passcode : !email}
            onClick={showPasscode ? handlePasscodeSubmit : handleEmailSubmit}
          >Submit</Button>
          <hr className={`${styles.divider} border-secondary-300`} />

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

export default Login
