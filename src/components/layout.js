import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


const Layout = ({ children, className }) => {
  const [sider, setSider] = useState(-1)
  const layoutClass = sider > -1 ? 'flex flex-row' : 'flex flex-col'

  return (
    <div className={`${layoutClass} ${className}`}>
      {React.Children.map(children, (child) => React.cloneElement(child, { setSider }))}
    </div>
  )
}
Layout.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }
Layout.defaultProps = { className: 'w-full' }

const Sider = ({ children, setSider, className }) => {
  useEffect(() => {
    if (setSider) {
      setSider((prev) => prev + 1)
    }
  }, [])

  return (<div className={className}>{children}</div>)
}
Sider.propTypes = { children: PropTypes.node.isRequired, setSider: PropTypes.func, className: PropTypes.string }
Sider.defaultProps = { setSider: () => {}, className: 'w-full' }

const Header = ({ children, className }) => <div className={className}>{children}</div>
Header.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }
Header.defaultProps = { className: 'w-full' }
  
const Footer = ({ children, className }) => <div className={className}>{children}</div>
Footer.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }
Footer.defaultProps = { className: 'w-full' }

const Content = ({ children, className }) => <div className={className}>{children}</div>
Content.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }
Content.defaultProps = { className: 'w-full' }

Layout.Header = Header
Layout.Sider = Sider
Layout.Footer = Footer
Layout.Content = Content

export default Layout
