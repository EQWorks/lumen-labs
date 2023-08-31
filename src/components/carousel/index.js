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
    },

    '& .carousel-prev-next__container': {
      '& .--active': {
        cursor: 'pointer',
      },

      '& .--disabled': {
        cursor: 'not-allowed',
      },

      '& .carousel-pagination__container': {
        '& .carousel-pagination-item__container.--selected': {
          color: 'white',
          backgroundColor: 'black',
        },
      },
    },
  },
})

const Carousel = forwardRef(({
  children,
  classes = {
    root: '',
    mainContainer: '',
    prevNextContainer: '',
    paginationContainer: '',
    paginationItem: '',
    prevIconContainer: '',
    nextIconContainer: '',
  },
  variant = 'multi',
  initialPage = 0,
  nextIcon = null,
  prevIcon = null,
  onClickNext = () => {},
  onClickPrev = () => {},
  ...rest
}, ref) => {
  const [touchPosition, setTouchPosition] = useState(null)
  const carouselContainerRef = useRef(null)

  const carouselClasses = Object.freeze({
    root: `carousel__root ${classes.root || ''} w-full inline-flex flex-col overflow-hidden ${customStyle.root}`,
    mainContainer: `carousel__main-container ${classes.mainContainer || ''} flex z-0`,
    prevNextContainer: `carousel-prev-next__container ${classes.prevNextContainer || ''} flex`,
    paginationContainer: `carousel-pagination__container ${classes.paginationContainer || ''} flex`,
    paginationItem: `carousel-pagination-item__container ${classes.paginationItem || ''} w-5 text-center`,
    prevIconContainer: `carousel-prev-icon__container ${classes.prevIconContainer || ''} self-center`,
    nextIconContainer: `carousel-next-icon__container ${classes.nextIconContainer || ''} self-center`,
  })

  const {
    moveNext,
    movePrev,
    movePagination,
    isDisabled,
    currentIndex,
    slideNumber,
  } = useCarousel(
    carouselContainerRef, variant, children.length, initialPage,
  )

  const handleOnMoveNext = e => {
    e.stopPropagation()
    moveNext(e, 1)
    onClickNext(e)
  }

  const handleOnMovePrev = e => {
    e.stopPropagation()
    movePrev(e, 1)
    onClickPrev(e)
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handlePaginationOnClick = (e, num) => {
    if (num > currentIndex) {
      movePagination(e, num)
    }

    if (num < currentIndex) {
      movePagination(e, num)
    }
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
        <div className={`${carouselClasses.prevIconContainer} ${isDisabled('prev') ? '--disabled' : '--active'}`} onClick={handleOnMovePrev}>
          {prevIcon ? prevIcon : <ChevronLeft size='lg'/>}
        </div>
        <div className={carouselClasses.paginationContainer}>
          {[...Array(slideNumber).keys()].map((i) => (
            <div
              key={`pagination-item-${i}`}
              className={`${carouselClasses.paginationItem} ${i === currentIndex ? '--selected' : 'cursor-pointer'}`}
              onClick={ e => handlePaginationOnClick(e, i)}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className={`${carouselClasses.nextIconContainer} ${isDisabled('next') ? '--disabled' : '--active'}`} onClick={handleOnMoveNext}>
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
    paginationContainer: PropTypes.string,
    paginationItem: PropTypes.string,
    prevIconContainer: PropTypes.string,
    nextIconContainer: PropTypes.string,
  }),
  variant: PropTypes.oneOf(['single', 'multi']),
  initialPage: PropTypes.number,
  nextIcon: PropTypes.node,
  prevIcon: PropTypes.node,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
}

Carousel.displayName = 'Carousel'

Carousel.CarouselItem = CarouselItem

export default Carousel
