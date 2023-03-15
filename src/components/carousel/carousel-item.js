import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const CarouselItem = forwardRef(({  
  classes, 
  children,
  onClick, 
  ...rest 
}, ref) => {
  const carouselItemClasses = Object.freeze({
    root: `${classes.carouselItemContainer} h-48 inline-flex items-center justify-center bg-error-500`,
  })

  return (
    <div 
      ref={ref}
      className={`carousel-item__root ${carouselItemClasses.root}`}
      onClick={onClick} 
      {...rest}
    >
      {children}
    </div>
  )
})

CarouselItem.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

CarouselItem.defaultProps = {
  classes: { root: '' },
  onClick: () => {},
}

CarouselItem.displayName = 'CarouselItem'

export default CarouselItem
