import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../../utils/make-styles'
import Layout from '../../components/layout'


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
})

const Login = ({ classes, logo, welcomeTitle, welcomeDescription }) => {
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
      <Layout.Content className='border w-7/12 h-full'>content</Layout.Content>
    </Layout>
  )
}

Login.propTypes = {
  logo: PropTypes.element.isRequired,
  classes: PropTypes.object,
  welcomeTitle: PropTypes.string,
  welcomeDescription: PropTypes.string, 
}
Login.defaultProps = {
  classes: { logo: '', welcomeTitle: '', welcomeDescription: '' },
  welcomeTitle: 'Example Welcome Message for Login',
  welcomeDescription: `Example description lorem ipsum dolor sit amet.
    Id veritatis omnis qui veritatis velit in tenetur consequatur ut dolorem tempore qui galisum adipisci.`,
}

export default Login
