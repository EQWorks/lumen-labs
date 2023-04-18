import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'


const styles = makeStyles({
  root: { minHeight: '455px' },
  content: { padding: '80px 150px 80px 150px' },
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

const Footer = ({ classes, logo, description, socialIcons, copyrightMessage, quickLinks, type }) => {
  const footerClasses = Object.freeze({
    root: `footer__root-container ${classes.root} w-full flex flex-col justify-between bg-primary-700`,
    content: `footer__content-container ${classes.content} flex`,
    info: `footer__info-container ${classes.info}`,
    logo: `footer__logo-container ${classes.logo}`,
    description: `footer__description-container ${classes.description} font-normal text-secondary-50`,
    social: `footer__social-container ${classes.social} w-full inline-flex mt-10`,
    socialIconButtons: `footer__socialIconButtons-container ${classes.socialIconButtons} focus:outline-none inline-flex justify-center
    items-center cursor-pointer bg-primary-800 border border-primary-800 hover:border-primary-100 active:bg-primary-900 text-secondary-50`,
    socialIcon: `footer__socialIcon-container ${classes.socialIcon}`,
    links: `footer__links-container ${classes.links} inline-flex justify-between`,
    quickLinkHeading: `footer__quickLinkHeading-container ${classes.quickLinkHeading} uppercase font-bold text-secondary-200`,
    linkList: `footer__linkList-container ${classes.linkList} list-none w-40`,
    quickLinks: `footer__quickLinks-container ${classes.quickLinks} font-normal text-secondary-50 hover:underline cursor-pointer`,
    copyrightMsg: `footer__copyrightMsg-container ${classes.copyrightMsg} font-normal text-secondary-50 bg-primary-800`,
  })

  return (
    <div className={`${footerClasses.root} ${styles.root}`}>
      <div className={`${footerClasses.content} ${styles.content}`}>
        <div className={`${footerClasses.info} ${styles.infoContainer}`}>
          <div className={`${footerClasses.logo} ${styles.logo}`}>{logo}</div>
          <p className={`${footerClasses.description} ${styles.description}`}>{description}</p>
          {socialIcons && Boolean(socialIcons.length) && <div className={`${footerClasses.social}`}>
            {socialIcons.map(({ Icon, link }, i) => (
              <button
                key={i}
                onClick={() => window.open(link, '_blank')}
                className={`${footerClasses.socialIconButtons} ${styles.socialIconButtons}`}
              >
                <Icon key={i} className={`${footerClasses.socialIcon} ${styles.socialIcons}`} />
              </button>
            ))}
          </div>}
        </div>

        <div className={`${footerClasses.links} ${styles.linksContainer}`}>
          {
            quickLinks
            && type === 'horizontal'
            && Boolean(quickLinks.length)
            && quickLinks.map(({ heading, links }, i) => (
              <div key={i} className={(i === quickLinks.length - 1) ? '' : 'mr-28'}>
                <p className={`${footerClasses.quickLinkHeading} ${styles.quickLinkHeading}`}>{heading}</p>
                <li className={footerClasses.linkList}>
                  {links.map(({ title, link }, i) => (
                    <ul
                      key={`${title}-${i}`}
                      onClick={() => window.open(link, '_blank')}
                      className={`${footerClasses.quickLinks} ${styles.quickLinks}`}
                    >{title}</ul>
                  ))}
                </li>
              </div>
            ))
          }
          {
            quickLinks
            && type === 'vertical'
            && Boolean(quickLinks.length)
            && quickLinks.map(({ title, onClick }, i) => (
              <div key={i} onClick={onClick}>
                <p className={`${footerClasses.quickLinks} ${styles.quickLinks}`}>{title}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className={`${footerClasses.copyrightMsg} ${styles.copyrightMsg}`}>
        {copyrightMessage}
      </div>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  logo: PropTypes.element.isRequired,
  description: PropTypes.string,
  socialIcons: PropTypes.array,
  copyrightMessage: PropTypes.string,
  quickLinks: PropTypes.array,
  type: PropTypes.string,
}
Footer.defaultProps = {
  classes: {
    root: '',
    content: '',
    info: '',
    logo: '',
    description: '',
    social: '',
    socialIconButtons: '',
    socialIcon: '',
    links: '',
    quickLinkHeading: '',
    linkList: '',
    quickLinks: '',
    copyrightMsg: '',
  },
  description: '',
  copyrightMessage: '© 2022 Company. All rights reserved.',
  socialIcons: [],
  quickLinks: [],
  type: 'horizontal',
}
export default Footer
