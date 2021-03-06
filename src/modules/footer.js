import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'


const styles = makeStyles({
  container: { minHeight: '455px' },
  details: { padding: '80px 150px 80px 150px' },
  logo: { width: '145px', height: '80px' },
  infoContainer: { width: '500px' },
  description: {
    marginTop: '20px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.06em',
  },
  socialIconButtons: {
    width: '35px',
    height: '35px',
    marginRight: '30px',
  },
  socialIcons: { width: '15px', height: '15px' },
  linksContainer: { marginLeft: '320px' },
  quickLinkHeading: {
    marginBottom: '30px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
  },
  quickLinks: {
    marginBottom: '10px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.06em',
  },
  copyrightMsg: {
    padding: '15px 150px 15px 150px',
    fontFamily: "'PT Sans', sans-serif",
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.05em',
  },
})

const Footer = ({ logo, description, socialIcons, copyrightMessage, quickLinks }) => {
  return (
    <div className={`w-full flex flex-col justify-between bg-primary-700 ${styles.container}`}>
      <div className={`${styles.details} flex`}>
        <div className={styles.infoContainer}>
          <div className={styles.logo}>{logo}</div>
          <p className={`${styles.description} font-normal text-secondary-50`}>{description}</p>
          {socialIcons && Boolean(socialIcons.length) && <div className='w-full inline-flex mt-10'>
            {socialIcons.map(({ Icon, link }, i) => (
              <button
                key={i}
                onClick={() => window.open(link, '_blank')}
                className={`focus:outline-none inline-flex justify-center items-center ${styles.socialIconButtons}
                  cursor-pointer bg-primary-800 border border-primary-800 hover:border-primary-100 active:bg-primary-900`}
              >
                <Icon key={i} className={`${styles.socialIcons} text-secondary-50`} />
              </button>
            ))}
          </div>}
        </div>

        <div className={`${styles.linksContainer} inline-flex justify-between`}>
          {quickLinks && Boolean(quickLinks.length) && quickLinks.map(({ heading, links }, i) => (
            <div key={i} className={(i === quickLinks.length - 1) ? '' : 'mr-28'}>
              <p className={`${styles.quickLinkHeading} uppercase font-bold text-secondary-200`}>{heading}</p>
              <li className='list-none w-40'>
                {links.map(({ title, link }, i) => (
                  <ul
                    key={`${title}-${i}`}
                    onClick={() => window.open(link, '_blank')}
                    className={`${styles.quickLinks} font-normal text-secondary-50 hover:underline cursor-pointer`}
                  >{title}</ul>
                ))}
              </li>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.copyrightMsg} font-normal text-secondary-50 bg-primary-800`}>
        {copyrightMessage}
      </div>
    </div>
  )
}

Footer.propTypes = {
  logo: PropTypes.element.isRequired,
  description: PropTypes.string,
  socialIcons: PropTypes.array,
  copyrightMessage: PropTypes.string,
  quickLinks: PropTypes.array,
}
Footer.defaultProps = {
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Hendrerit felis faucibus volutpat, nulla pharetra tellus libero orci.
  Pulvinar netus volutpat augue eget.`,
  copyrightMessage: '?? 2022 Company. All rights reserved.',
  socialIcons: [],
  quickLinks: [],
}
export default Footer
