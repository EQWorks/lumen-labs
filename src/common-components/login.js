import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'
import Layout from '../components/layout'
import TextField from '../components/text-field'
import Button from '../components/button'


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
    fontFamily: 'PT Sans',
    fontSize: '34px',
    lineHeight: '36px',
  },
  welDescription: {
    marginTop: '20px',
    fontFamily: 'PT Sans',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  contentContainer: {
    width: '400px',
    marginLeft: '80px',
  },
  login: {
    fontFamily: 'PT Sans',
    fontSize: '60px',
    lineHeight: '72px',
    letterSpacing: '-0.5px',
  },
  loginDescription: {
    marginTop: '40px',
    fontFamily: 'PT Sans',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  spacingMargin: {
    marginTop: '40px',
  },
  footerLogo: {
    marginTop: '100px',
    width: '215px',
    height: '80px',
  },
  copyrightMsg: {
    marginTop: '20px',
    fontFamily: 'PT Sans',
    fontSize: '10px',
    lineHeight: '56px',
  },
})

const Login = ({ classes, product, logo, welcomeTitle, welcomeDescription, copyrightMessage }) => {
  return (
    <Layout className='w-full h-screen'>
      <Layout.Sider className={`border ${styles.siderContainer} relative w-5/12 h-full overflow-hidden`}>
        <div className={`w-full h-full bg-primary-500 ${styles.siderImage}`} />
        <div className='relative w-full h-full'>
          <div className={`${classes.logo} text-secondary-50`}>{logo}</div>
          <div className={styles.welContainer}>
            <p className={`${classes.welcomeTitle} ${styles.welTitle} font-normal text-left text-secondary-50`}>{welcomeTitle}</p>
            <p className={`${classes.welcomeDescription} ${styles.welDescription} font-bold text-left text-secondary-50`}>{welcomeDescription}</p>
          </div>
        </div>
      </Layout.Sider>
      <Layout.Content className='w-7/12 h-full flex justify-center items-center'>
        <div className={`flex flex-col justify-center items-start ${styles.contentContainer}`}>
          <p className={`${styles.login} font-normal text-secondary-900`}>Login In</p>
          <p className={`${styles.loginDescription} font-normal text-secondary-900`}>
            To begin using {product}, please enter your associated email address to authenticate your account.
          </p>
          <TextField
            label='Email'
            inputProps={{ placeholder: 'example@gmail.com' }}
            classes={{ container: `w-full ${styles.spacingMargin}` }}
          />
          <Button size='lg' variant='filled' classes={{ button: `w-full ${styles.spacingMargin}` }}>Submit</Button>
          <hr className={`w-full ${styles.spacingMargin} border-secondary-300`} />

          <div className='w-full flex flex-col justify-center items-center'>
            <div className={`${classes.footerLogo} ${styles.footerLogo}`}>{logo}</div>
            {copyrightMessage && <p className={`${styles.copyrightMsg} font-normal text-secondary-500`}>{copyrightMessage}</p>}
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

Login.propTypes = {
  product: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
  classes: PropTypes.object,
  welcomeTitle: PropTypes.string,
  welcomeDescription: PropTypes.string, 
  copyrightMessage: PropTypes.string,
}
Login.defaultProps = {
  classes: { logo: '', footerLogo: '', welcomeTitle: '', welcomeDescription: '' },
  welcomeTitle: 'Example Welcome Message for Login',
  welcomeDescription: `Example description lorem ipsum dolor sit amet.
    Id veritatis omnis qui veritatis velit in tenetur consequatur ut dolorem tempore qui galisum adipisci.`,
  copyrightMessage: 'lorem ipsum dolor sit amet',
}

export default Login
