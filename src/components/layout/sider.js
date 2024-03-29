import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


const Sider = ({
  children,
  setSider = () => {},
  className = 'w-full',
}) => {
  useEffect(() => {
    setSider((prev) => prev + 1)
  }, [setSider])

  return (<aside className={`sider__root-container ${className}`}>{children}</aside>)
}

Sider.propTypes = { children: PropTypes.node.isRequired, setSider: PropTypes.func, className: PropTypes.string }

export default Sider
