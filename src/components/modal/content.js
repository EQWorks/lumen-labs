import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Content = forwardRef(({ classes, children, ...rest }, ref) => {  
  const modalClasses = Object.freeze({
    content: `h-full px-5 my-15px text-sm tracking-sm leading-1.43 overflow-y-auto ${classes.content}`,
  })

  return (
    <div ref={ref} className={`content-container ${modalClasses.content}`} {...rest}>
      {children}
    </div>
  )
})

Content.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
}

Content.defaultProps = {
  classes: { 
    content: '', 
  },
}

Content.displayName = 'Content'

export default Content
