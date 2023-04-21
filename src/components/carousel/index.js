import React, { forwardRef, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import CarouselItem from './carousel-item'
import { makeStyles } from '../../utils/make-styles'
import { useCarousel } from '../../hooks/carousel'
import { ChevronLeft, ChevronRight } from '../../icons'


const customStyle =  makeStyles({
  root: {
    '& .carousel__main-container': {
      overflow: 'hidden',
      scrollbarWidth: 'none',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      touchAction: 'pan-x',
    },

    '& .carousel-prev-next__container': {
      '& .active': {
        cursor: 'pointer',
      },

      '& .disabled': {
        cursor: 'not-allowed',
      },
    },
  },
})

const Carousel = forwardRef(({ children, classes, variant, nextIcon, prevIcon, onClickNext, onClickPrev, ...rest }, ref) => {
  const [touchPosition, setTouchPosition] = useState(null)
  const carouselContainerRef = useRef(null)

  const carouselClasses = Object.freeze({
    root: `carousel__root ${classes.root || ''} w-full inline-flex flex-col overflow-hidden ${customStyle.root}`,
    mainContainer: `carousel__main-container ${classes.mainContainer || ''} flex z-0`,
    prevNextContainer: `carousel-prev-next__container ${classes.prevNextContainer || ''} flex`,
    prevIconContainer: `carousel-prev-icon__container ${classes.prevIconContainer || ''}`,
    nextIconContainer: `carousel-next-icon__container ${classes.nextIconContainer || ''}`,
  })

  const { moveNext, movePrev, isDisabled, currentIndex } = useCarousel(
    carouselContainerRef, variant, children.length,
  )

  const handleOnMoveNext = e => {
    e.stopPropagation()
    moveNext(e)
    onClickNext(e)
  }

  const handleOnMovePrev= e => {
    e.stopPropagation()
    movePrev(e)
    onClickPrev(e)
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition
    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      handleOnMoveNext(e)
    }

    if (diff < -5) {
      handleOnMovePrev(e)
    }

    setTouchPosition(null)
  }

  const renderCarouselItems = (child, index) => {
    let rc = child
    if (variant === 'single' && currentIndex !== index) {
      rc = <></>
    }

    if (React.isValidElement(child)) {
      return React.cloneElement(rc)
    }
    return rc
  }

  return (
    <div
      ref={ref}
      className={carouselClasses.root}
      {...rest}
    >
      <div
        ref={carouselContainerRef}
        className={carouselClasses.mainContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {React.Children.map(children, (child, index) => (
          renderCarouselItems(child, index)
        ))}
      </div>
      <div className={carouselClasses.prevNextContainer}>
        <div className={`${carouselClasses.prevIconContainer} ${isDisabled('prev') ? 'disabled' : 'active'}`} onClick={handleOnMovePrev}>
          {prevIcon ? prevIcon : <ChevronLeft size='lg'/>}
        </div>
        <div className={`${carouselClasses.nextIconContainer} ${isDisabled('next') ? 'disabled' : 'active'}`} onClick={handleOnMoveNext}>
          {nextIcon ? nextIcon : <ChevronRight size='lg'/>}
        </div>
      </div>
    </div>
  )
})

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    mainContainer: PropTypes.string,
    prevNextContainer: PropTypes.string,
    prevIconContainer: PropTypes.string,
    nextIconContainer: PropTypes.string,
  }),
  variant: PropTypes.oneOf(['single', 'multi']),
  nextIcon: PropTypes.node,
  prevIcon: PropTypes.node,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
}

Carousel.defaultProps = {
  classes: {
    root: '',
    mainContainer: '',
    prevNextContainer: '',
    prevIconContainer: '',
    nextIconContainer: '',
  },
  variant: 'multi',
  nextIcon: null,
  prevIcon: null,
  onClickNext: () => {},
  onClickPrev: () => {},
}

Carousel.displayName = 'Carousel'

Carousel.CarouselItem = CarouselItem

export default Carousel
