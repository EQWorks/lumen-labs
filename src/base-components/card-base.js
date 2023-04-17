import React from 'react'
import PropTypes from 'prop-types'

import { Close } from '../icons'
import Layout from '../components/layout'


const CardBase = ({ classes, header, content, footer, onClose }) => (
  <div className={`${classes.root} inline-flex flex-col border`}>
    {onClose && <Close size='md' className={`${classes.closeIcon} self-end cursor-pointer`} onClick={onClose} />}
    <Layout className='h-full'>
      {header && <Layout.Header className={classes.header}>{header}</Layout.Header>}
      <Layout.Content className={`${classes.content} h-full`}>{content}</Layout.Content>
      {footer && <Layout.Footer className={classes.footer}>{footer}</Layout.Footer>}
    </Layout>
  </div>
)

CardBase.propTypes = {
  content: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
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
