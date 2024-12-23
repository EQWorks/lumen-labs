import React, { forwardRef, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import CarouselItem from './carousel-item'
import { makeStyles } from '../../utils/make-styles'
import { useCarousel } from '../../hooks/carousel'
import { ChevronLeft, ChevronRight } from '../../icons'


const styles = (isPagination) => makeStyles({
  root: {
    '& .carousel__main-container': {
      overflowX: isPagination ? 'hidden' : 'scroll',
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

    '& .carousel-scroll-progress__container': {
      '& .carousel-scroll-progress__content-container': {
        '& .carousel-scroll-progress-bar': {
          transition: 'width 1s',
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
    scrollProgressContainer: '',
    scrollProgressContentContainer: '',
    scrollProgressBar: '',
  },
  variant = 'multi',
  isPagination = true,
  initialPage = 0,
  nextIcon = null,
  prevIcon = null,
  onClickNext = () => {},
  onClickPrev = () => {},
  onClickPagination = () => {},
  ...rest
}, ref) => {
  const carouselContainerRef = useRef(null)
  const [touchPosition, setTouchPosition] = useState(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)

  const {
    moveNext,
    movePrev,
    movePagination,
    isDisabled,
    currentIndex,
    slideNumber,
    scrollProgressWidth,
  } = useCarousel(
    carouselContainerRef, variant, children.length, initialPage,
  )

  const customStyle = styles(isPagination)
  const carouselClasses = Object.freeze({
    root: `carousel__root ${classes.root || ''} w-full inline-flex flex-col overflow-hidden ${customStyle.root}`,
    mainContainer: `carousel__main-container ${classes.mainContainer || ''} flex z-0`,
    prevNextContainer: `carousel-prev-next__container ${classes.prevNextContainer || ''} flex`,
    paginationContainer: `carousel-pagination__container ${classes.paginationContainer || ''} flex`,
    paginationItem: `carousel-pagination-item__container ${classes.paginationItem || ''} w-5 text-center`,
    prevIconContainer: `carousel-prev-icon__container ${classes.prevIconContainer || ''} self-center`,
    nextIconContainer: `carousel-next-icon__container ${classes.nextIconContainer || ''} self-center`,
    scrollProgressContainer: `carousel-scroll-progress__container ${classes.scrollProgressContainer || ''} mt-4 pr-4 pl-4 w-full`,
    scrollProgressContentContainer: `carousel-scroll-progress__content-container ${classes.scrollProgressContentContainer || ''} w-full bg-red-200`,
    scrollProgressBar: `carousel-scroll-progress-bar ${classes.scrollProgressBar || ''} h-2 bg-red-500 overflow-hidden`,
  })

  const handleOnMoveNext = e => {
    e.stopPropagation()
    moveNext(e, 1)
    onClickNext(e, slideNumber === currentIndex + 1 ? currentIndex : currentIndex + 1)
  }

  const handleOnMovePrev = e => {
    e.stopPropagation()
    movePrev(e, 1)
    onClickPrev(e, currentIndex === 0 ? currentIndex : currentIndex - 1)
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleMouseDown = (e) => {
    if (carouselContainerRef.current) {
      setStartX(e.pageX - - (carouselContainerRef?.current?.offsetLeft > 100 ? 100 : carouselContainerRef?.current?.offsetLeft))
      setScrollLeft(carouselContainerRef?.current?.scrollLeft)
      setIsMouseDown(true)
    }
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown) return
    e.preventDefault()

    if (carouselContainerRef.current) {
      const x = e.pageX - (carouselContainerRef?.current?.offsetLeft > 100 ? 100 : carouselContainerRef?.current?.offsetLeft)
      const speed = (x - startX)*1
      carouselContainerRef.current.scrollLeft = scrollLeft - speed
    }
  }

  const handlePaginationOnClick = (e, num) => {
    if (num > currentIndex) {
      movePagination(e, num)
    }

    if (num < currentIndex) {
      movePagination(e, num)
    }

    onClickPagination(e, num)
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

  const renderCarouselFooter = () => {
    const length = Number.isInteger(slideNumber) ? slideNumber : children.length

    if (variant === 'multi' && isPagination === false) {
      return (
        <div
          className={carouselClasses.scrollProgressContainer}
        >
          <div
            className={carouselClasses.scrollProgressContentContainer}
          >
            <div className={carouselClasses.scrollProgressBar} style={{ width: scrollProgressWidth }}></div>
          </div>
        </div>
      )
    }

    return (
      <div className={carouselClasses.prevNextContainer}>
        <div className={`${carouselClasses.prevIconContainer} ${isDisabled('prev') ? '--disabled' : '--active'}`} onClick={handleOnMovePrev}>
          {prevIcon ? prevIcon : <ChevronLeft size='lg'/>}
        </div>
        <div className={carouselClasses.paginationContainer}>
          {[...Array(length).keys()].map((i) => (
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
    )
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
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {React.Children.map(children, (child, index) => (
          renderCarouselItems(child, index)
        ))}
      </div>
      {renderCarouselFooter()}
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
    scrollProgressContainer: PropTypes.string,
    scrollProgressContentContainer: PropTypes.string,
    scrollProgressBar: PropTypes.string,
  }),
  variant: PropTypes.oneOf(['single', 'multi']),
  isPagination: PropTypes.boolean,
  initialPage: PropTypes.number,
  nextIcon: PropTypes.node,
  prevIcon: PropTypes.node,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClickPagination: PropTypes.func,
}

Carousel.displayName = 'Carousel'

Carousel.CarouselItem = CarouselItem

export default Carousel
