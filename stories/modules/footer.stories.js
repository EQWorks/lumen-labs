import React from 'react'

import { makeStyles } from '../../src'
import Footer from '../../src/modules/footer'


export default {
  title: 'Modules/Footer',
}

export const Normal = () => {
  return (<Footer
    logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
  />)
}

/* -- Temporary Icons -- */
const FBIcon = () => (
  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.57141 4.28567C5.57141 3.21424 6.10713 3.21424 6.64284 3.21424H7.2857C7.39303 3.21568 7.49957 3.19561 7.59901 3.15519C7.69845 3.11478 7.7888 3.05486 7.8647 2.97895C7.9406 2.90305 8.00053 2.81271 8.04094 2.71327C8.08135 2.61382 8.10143 2.50729 8.09999 2.39996V1.39281C8.09999 1.28497 8.07858 1.1782 8.03699 1.07871C7.9954 0.979207 7.93446 0.88896 7.85771 0.813205C7.78096 0.73745 7.68992 0.677695 7.58989 0.637409C7.48986 0.597123 7.38282 0.577109 7.27499 0.578528L5.75356 0.557099C5.31055 0.539965 4.86911 0.61916 4.45969 0.78922C4.05026 0.95928 3.68262 1.21615 3.38213 1.54211C3.08163 1.86807 2.85545 2.25535 2.71918 2.67723C2.58291 3.0991 2.53981 3.54552 2.59284 3.98567V5.53924H1.74641C1.53045 5.53924 1.32334 5.62503 1.17063 5.77774C1.01792 5.93045 0.932129 6.13757 0.932129 6.35353V7.36067C0.932129 7.57663 1.01792 7.78375 1.17063 7.93646C1.32334 8.08917 1.53045 8.17496 1.74641 8.17496H2.59284V13.9285C2.59284 14.0706 2.64928 14.2069 2.74975 14.3073C2.85022 14.4078 2.98648 14.4642 3.12856 14.4642H5.06784C5.20428 14.456 5.33242 14.396 5.42604 14.2964C5.51965 14.1968 5.57166 14.0652 5.57141 13.9285V8.17496H6.51427C6.73023 8.17496 6.93735 8.08917 7.09006 7.93646C7.24277 7.78375 7.32856 7.57663 7.32856 7.36067V6.35353C7.32856 6.13757 7.24277 5.93045 7.09006 5.77774C6.93735 5.62503 6.73023 5.53924 6.51427 5.53924H5.57141V4.28567Z" stroke="#D6E8FD" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.28571 9.07149C3.52064 9.67242 2.64251 10.1133 1.70357 10.3679C1.60015 10.4055 1.51079 10.4739 1.44765 10.564C1.3845 10.6541 1.35063 10.7615 1.35063 10.8715C1.35063 10.9815 1.3845 11.0889 1.44765 11.179C1.51079 11.2691 1.60015 11.3375 1.70357 11.3751C9.11785 14.4179 13.8321 9.71434 13.1143 4.49649L14.3143 2.01077H12.9214C11.1857 -0.12137 6.57857 -0.0142267 7.33928 4.52863C7.33928 4.52863 4.875 4.96792 1.725 1.87149C1.65213 1.79955 1.56017 1.75 1.46002 1.72871C1.35986 1.70741 1.2557 1.71527 1.15987 1.75135C1.06404 1.78743 0.980562 1.85021 0.919314 1.93227C0.858065 2.01432 0.821616 2.11221 0.814282 2.21434C0.481209 3.58347 0.647894 5.02653 1.28432 6.28366C1.92075 7.5408 2.9851 8.52942 4.28571 9.07149V9.07149Z" stroke="#D6E8FD" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const YTIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="35" height="35" fill="#112B84"/>
    <path d="M22.3214 12.1428H12.6786C11.4951 12.1428 10.5357 13.1022 10.5357 14.2857V20.7143C10.5357 21.8977 11.4951 22.8571 12.6786 22.8571H22.3214C23.5049 22.8571 24.4643 21.8977 24.4643 20.7143V14.2857C24.4643 13.1022 23.5049 12.1428 22.3214 12.1428Z" stroke="#D6E8FD" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6893 19.9857V15.4857C15.687 15.4097 15.7056 15.3346 15.7429 15.2684C15.7802 15.2021 15.8348 15.1473 15.9009 15.1099C15.9671 15.0724 16.0422 15.0537 16.1181 15.0557C16.1941 15.0577 16.2681 15.0804 16.3321 15.1214L20.1893 17.3714C20.2537 17.4092 20.3072 17.4632 20.3443 17.5281C20.3814 17.5929 20.401 17.6663 20.401 17.7411C20.401 17.8158 20.3814 17.8892 20.3443 17.954C20.3072 18.0189 20.2537 18.0729 20.1893 18.1107L16.3321 20.3607C16.2667 20.3985 16.1924 20.4183 16.1169 20.4181C16.0413 20.418 15.9671 20.3978 15.9019 20.3597C15.8366 20.3217 15.7826 20.267 15.7452 20.2013C15.7079 20.1356 15.6886 20.0612 15.6893 19.9857V19.9857Z" stroke="#D6E8FD" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const socialIcons = [
  { Icon: FBIcon, link: 'https://en.wikipedia.org/wiki/Facebook' },
  { Icon: TwitterIcon, link: 'https://en.wikipedia.org/wiki/Twitter' },
  { Icon: YTIcon, link: 'https://en.wikipedia.org/wiki/YouTube' },
]
export const WithSocialIcons = () => {
  return (<Footer
    logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
    socialIcons={socialIcons}
  />)
}

const links = [
  { heading: 'company', links: [
    { title: 'Our Story', link: '' },
    { title: 'Careers', link: '' },
    { title :'Legal', link: '' },
    { title: 'Contact Us', link: '' },
  ] },
  { heading: 'resources', links: [
    { title: 'API', link: '' },
    { title: 'Privacy', link: '' },
    { title :'Accessibility', link: '' },
    { title: 'Terms & Conditions', link: '' },
  ] },
  { heading: 'navigation', links: [
    { title: 'Dashboard', link: '' },
    { title: 'Reports', link: '' },
    { title :'Insights', link: '' },
  ] },
]
export const WithLinks = () => {
  return (<Footer
    logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
    socialIcons={socialIcons}
    quickLinks={links}
  />)
}

const simpleLinks = [
  { title: 'FAQ', onClick: () => {} },
  { title: 'Terms of Use', onClick: () => {} },
  { title: 'Privacy Policy', onClick: () => {} },
  { title: 'Contact Us', onClick: () => {} },
  { title: 'EN/FR', onClick: () => {} },
]

const customStyle = makeStyles({
  root: {
    minHeight: '0rem',
    height: '12.5rem',
    paddingLeft: '7.5rem',
    paddingRight: '7.5rem',
    paddingTop: '2.5rem',
    background: 'black',
  },
  content: {
    padding: 0,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  logo: {
    height: 'auto',
  },
  links: {
    marginLeft: '0rem',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  quickLinks: {
    color: 'white',
    cursor: 'pointer',
    marginBottom: 0,
    fontFamily: 'Radio Canada',
    fontSize: '1.125rem',
    lineHeight: 'initial',
  },
  copyrightMsg: {
    padding: '0',
    fontFamily: 'Radio Canada',
    fontSize: '1rem',
    lineHeight: 'initial',
    letterSpacing: 'initial',
    color: 'rgba(254, 254, 254, 1)',
    opacity: 0.8,
    background: 'none',
    marginBottom: '0.5rem',
  },
})

export const CustomStyle = () => (
  <Footer
    logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
    quickLinks={simpleLinks}
    type='vertical'
    classes={{
      root: customStyle.root,
      content: customStyle.content,
      logo: customStyle.logo,
      links: customStyle.links,
      quickLinks: customStyle.quickLinks,
      copyrightMsg: customStyle.copyrightMsg,
    }}
  />
)

const customLinkStyle = makeStyles({
  root: {
    minHeight: '0rem',
    paddingLeft: '7.5rem',
    paddingRight: '7.5rem',
    paddingTop: '2.547rem',
    paddingBottom: '0.5rem',
    background: 'black',
  },
  content: {
    padding: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 'auto',
  },
  downloadContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
  downloadLinkContainer: {
    display: 'flex',
    gap: '2rem',
  },
  downloadLink: {
    color: 'yellow',
  },
  downloadMessage: {
    color: 'white',
    marginBottom: '1rem',
  },
  links: {
    width: 'fit-content',
    display: 'flex',
    marginLeft: '2rem',
    paddingBottom: '2rem',
    gap: '2.5rem',
    justifyContent: 'space-between',
  },
  quickLinks: {
    color: 'white',
    cursor: 'pointer',
    marginBottom: 0,
    fontFamily: 'Radio Canada',
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: 'initial',
    textTransform: 'uppercase',
  },
  copyrightMsg: {
    padding: '0',
    fontFamily: 'Radio Canada',
    fontSize: '0.75rem',
    lineHeight: 'initial',
    letterSpacing: 'initial',
    color: 'rgba(254, 254, 254, 1)',
    opacity: 0.8,
    background: 'none',
    marginBottom: '0.5rem',
  },
})

export const CustomLinks = () => (
  <Footer
    logo={<h1 className='uppercase text-5xl text-secondary-50'>logo</h1>}
    type='horizontal'
    customLinks={['Link 1', 'Link 2']}
    description='Lorem ipsum dolor sit amet.'
    downloadLinks={['Download1', 'Download2']}
    downloadMessage='Lorem ipsum dolor sit amet.'
    copyrightMessage='© 2023 Company. All rights reserved.'
    classes={{
      root: customLinkStyle.root,
      content: customLinkStyle.content,
      logo: customLinkStyle.logo,
      downloadContainer: customLinkStyle.downloadContainer,
      downloadLinkContainer: customLinkStyle.downloadLinkContainer,
      downloadLink: customLinkStyle.downloadLink,
      downloadMessage: customLinkStyle.downloadMessage,
      links: customLinkStyle.links,
      quickLinks: customLinkStyle.quickLinks,
      copyrightMsg: customLinkStyle.copyrightMsg,
    }}
  />
)
