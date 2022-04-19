import React from 'react'
import PropTypes from 'prop-types'

import Question from '../icons/question'
import AlertInformation from '../icons/alert-information'
import CheckBadge from '../icons/check-badge'
import AlertWarning from '../icons/alert-warning'
import MoodWarning from '../icons/mood-warning'

import { makeStyles } from '../utils/make-styles'


const styles = makeStyles({
  titleTypography: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  descriptionTypography: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
  },
})

const iconColors = Object.freeze({
  default: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  error: 'text-error-500',
})
const renderIcon = (variant) => ({
  default: <Question size='lg' className={iconColors[variant]} />,
  info: <AlertInformation size='lg' className={iconColors[variant]} />,
  success: <CheckBadge size='lg' className={iconColors[variant]} />,
  warning: <AlertWarning size='lg' className={iconColors[variant]} />,
  error: <MoodWarning size='lg' className={iconColors[variant]} />,
})[variant]
const bgColors = Object.freeze({
  default: 'bg-neutral-50',
  info: 'bg-info-100',
  success: 'bg-success-100',
  warning: 'bg-warning-100',
  error: 'bg-error-100',
})

const Message = ({ classes, variant, title, description, showIcon }) => {
  return (
    <div className={`flex flex-row justify-start items-start p-2.5 rounded-sm ${bgColors[variant]} ${classes.root}`}>
      {showIcon && <div className={`mr-2.5 ${title ? 'mt-1' : 'mt-0.5'}`}>
        {renderIcon(variant) || <Question size='lg' className={iconColors[variant]} />}
      </div>}
      <div className={classes.messageContainer}>
        {title && <p className={`font-bold ${styles.titleTypography} text-secondary-900 ${classes.title}`}>
          {title}
        </p>}
        <p className={`font-normal ${styles.descriptionTypography} text-secondary-800 ${classes.description}`}>
          {description}
        </p>
      </div>
    </div>
  )
}

Message.propTypes = {
  description: PropTypes.string.isRequired,
  classes: PropTypes.object,
  variant: PropTypes.string,
  title: PropTypes.string,
  showIcon: PropTypes.bool,
}
Message.defaultProps = {
  classes: { root: '', messageContainer: '', title: '', description: '' },
  variant: 'default',
  title: '',
  showIcon: true,
}

export default Message
