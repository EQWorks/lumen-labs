import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Sider from './sider'
import { generateElement } from './generate-element'


const Layout = ({
  children,
  className = 'w-full',
}) => {
  const [sider, setSider] = useState(-1)
  const layoutClass = sider > -1 ? 'flex flex-row' : 'flex flex-col'

  return (
    <div className={`layout__root-container ${layoutClass} ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { setSider })
        }
        return child
      })}
    </div>
  )
}

Layout.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string }

Layout.Sider = Sider
Layout.Header = generateElement({ tagName: 'header', displayName: 'Header' })
Layout.Footer = generateElement({ tagName: 'footer', displayName: 'Footer' })
Layout.Content = generateElement({ tagName: 'main', displayName: 'Content' })

export default Layout
