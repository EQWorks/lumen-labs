import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'


const CarouselItem = forwardRef(({
  classes = { root: '' },
  children,
  onClick = () => {},
  ...rest
}, ref) => {
  const carouselItemClasses = Object.freeze({
    root: `carousel-item__root ${classes.root} w-full h-full inline-flex items-center justify-center snap-start`,
  })

  return (
    <div
      ref={ref}
      className={carouselItemClasses.root}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
})

CarouselItem.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
}

CarouselItem.displayName = 'CarouselItem'

export default CarouselItem
