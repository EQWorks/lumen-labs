import React from 'react'
import PropTypes from 'prop-types'

import { CardBase } from '../base-components'


const sizes = Object.freeze({
  sm: 'w-48.5 min-h-33 p-3 shadow-10',
  md: 'w-92.5 min-h-57.5 p-3.5 shadow-10',
  lg: 'w-112.5 min-h-107.5 p-4 shadow-10',
})

const Card = ({
  classes = {},
  size = 'md',
  ...rest
}) => {
  const _classes = {
    ...classes,
    root: `card__root-container ${[classes.root, 'rounded-sm', sizes[size]].join(' ')}`,
    closeIcon: `card__close-icon ${classes.closeIcon || ''}`,
    header: `card__header-container ${classes.header || ''}`,
    content: `card__content-container ${classes.content || ''}`,
    footer: `card__footer-container ${classes.footer || ''}`,
  }
  return (
    <CardBase classes={_classes} {...rest} />
  )
}

Card.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
}

export default Card
