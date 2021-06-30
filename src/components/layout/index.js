import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Sider from './sider'
import { generateElement } from './generate-element'


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

Layout.Sider = Sider
Layout.Header = generateElement({ tagName: 'header', displayName: 'Header' })
Layout.Footer = generateElement({ tagName: 'header', displayName: 'Footer' })
Layout.Content = generateElement({ tagName: 'main', displayName: 'Content' })

export default Layout
