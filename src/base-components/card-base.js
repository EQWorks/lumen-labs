import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Close } from '../icons'



const CardBase = ({ classes, header, content, footer, onClose }) => {
  const contentRows = clsx({
    'row-span-4': header && footer,
    'row-span-5': (header && !footer) || (!header && footer),
    'row-span-6': !header && !footer,
  })
  return (
    <div className={`inline-flex flex-col border ${classes.root}`}>
      {onClose && <span className='self-end cursor-pointer'>
        <Close size='md' className={`self-end ${classes.closeIcon}`} onClick={onClose} />
      </span>}
      <div className='grid grid-rows-6 h-full'>
        {header && <div className={`row-span-1 ${classes.header}`}>{header}</div>}
        <div className={`${contentRows} ${classes.content}`}>{content}</div>
        {footer && <div className={`row-span-1 ${classes.footer}`}>{footer}</div>}
      </div>
    </div>
  )
}

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
