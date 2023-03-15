import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'

import CarouselItem from './carousel-item'
import { makeStyles } from '../../utils/make-styles'


const useStyle = ({ currIndex }) => makeStyles({
  root: {
    '& .carousel__main-container': {
      transition: 'transform 0.3s',
      transform: `translateX(-${currIndex * 100}%)`,
  
      '& .carousel-item__root': {
        width: '100%',
      },
    },

    '& .carousel-prev-next__container': {
      display: 'flex',
      backgroundColor: 'green',

      '& .carousel-pagination__container': {
        '& .curr-slide': {
          backgroundColor: 'yellow',
        },
      },
    },
  },
})

const Carousel = forwardRef(({ children, classes, ...rest }, ref) => {
  const [currIndex, setCurrIndex] = useState(0)

  const customStyle = useStyle({ currIndex })
  const carouselClasses = Object.freeze({
    root: `${classes.root} overflow-hidden ${customStyle.root}`,
    mainContainer: `${classes.mainContainer} whitespace-nowrap`,
  })



  const updateCurrIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setCurrIndex(newIndex)
  }

  return (
    <div 
      ref={ref} 
      className={`carousel__root ${carouselClasses.root}`}
      {...rest}
    >
      <div className={`carousel__main-container ${carouselClasses.mainContainer}`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
          return child
        })}
      </div>
      <div className="carousel-prev-next__container">
        <button
          onClick={() => {
            updateCurrIndex(currIndex - 1)
          }}
        >
          Prev
        </button>
        <div className="carousel-pagination__container">
          {children.map((_, index) => 
            <button
              key={`slide-${index}`}
              className={`${index === currIndex ? 'curr-slide' : ''}`}
              onClick={() => updateCurrIndex(index)}
            >
              {index + 1}
            </button>,
          )}
        </div>
        <button
          onClick={() => {
            updateCurrIndex(currIndex + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
})

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
}

Carousel.defaultProps = {
  classes: { 
    root: '',
    mainContainer: '',
  },
}

Carousel.displayName = 'Carousel'

Carousel.CarouselItem = CarouselItem

export default Carousel
