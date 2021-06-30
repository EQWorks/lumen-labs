import React from 'react'
import PropTypes from 'prop-types'

import { Close } from '../icons'
import Layout from '../components/layout'


const CardBase = ({ classes, header, content, footer, onClose }) => (
  <div className={`inline-flex flex-col border ${classes.root}`}>
    {onClose && <Close size='md' className={`self-end cursor-pointer ${classes.closeIcon}`} onClick={onClose} />}
    <Layout className='h-full'>
      {header && <Layout.Header className={classes.header}>{header}</Layout.Header>}
      <Layout.Content className={`h-full ${classes.content}`}>{content}</Layout.Content>
      {footer && <Layout.Footer className={classes.footer}>{footer}</Layout.Footer>}
    </Layout>
  </div>
)

CardBase.propTypes = {
  content: PropTypes.any.isRequired,
  classes: PropTypes.object,
  header: PropTypes.any,
  footer: PropTypes.any,
  onClose: PropTypes.func,
}
CardBase.defaultProps = {
  classes: { root: '', closeIcon: '', header: '', content: '', footer: '' },
  header: null,
  footer: null,
  onClose: null,
}

export default CardBase
