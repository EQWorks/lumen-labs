import React, { useState, useCallback, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../utils/make-styles'
import { useCarousel } from '../hooks/carousel'

import Button from '../components/button'
import ButtonGroup from '../components/button-group'
import { ArrowLeft, ArrowRight } from '../icons'


const style = makeStyles({
  carouselContainer: {
    scrollbarWidth: 'none',
    scrollSnapType: 'x mandatory',
  },
})

const FeaturedContent = forwardRef(({ classes, buttonProps, children, title, description, isLoading }, ref) => {
  const featuredContentClasses = Object.freeze({
    root: `featured-content-root w-full flex flex-col bg-neutral-50 border-2 border-solid border-neutral-50 ${classes.root && classes.root}`,
    header: `featured-content-header p-30px flex items-end justify-between bg-secondary-50 text-secondary-800 ${classes.header && classes.header}`,
    headerContent: `header-content ${classes.headerContet && classes.headerContet}`,
    title: `header-title mb-5px font-bold ${classes.title && classes.title}`,
    description: `header-description ${classes.description && classes.description}`,
    carousel: `carousel-container flex items-center overflow-scroll ${style.carouselContainer} ${classes.carousel && classes.carousel}`,
  })

  const [carouselRef, setCarouselRef] = useState(null)
  const { scrollLeft, scrollRight } = useCarousel(carouselRef)

  const onRefChange = useCallback((node) => {
    if (!isLoading && node) {
      setCarouselRef(node)
    }
  }, [isLoading])

  return (
    <div className={featuredContentClasses.root} ref={ref}>
      <div className={featuredContentClasses.header}>
        <div className={featuredContentClasses.headerContent}>
          <h5 className={featuredContentClasses.title}>{title}</h5>
          <h6 className={featuredContentClasses.description}>{description}</h6>
        </div>
        <ButtonGroup size='md' variant='filled'>
          <Button {...buttonProps} onClick={scrollLeft}>
            <ArrowLeft size='md' />
          </Button>
          <Button {...buttonProps} onClick={scrollRight}>
            <ArrowRight size='md' />
          </Button>
        </ButtonGroup>
      </div>
      <div className={featuredContentClasses.carousel} ref={onRefChange}>
        {children && children}
      </div>
    </div>
  )
})

FeaturedContent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  buttonProps: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  isLoading: PropTypes.bool,
}
FeaturedContent.defaultProps = {
  classes: {},
  children: undefined,
  buttonProps: {},
  title: 'Favorites',
  description: 'Quick access to all your favorited reports.',
  isLoading: false,
}

FeaturedContent.displayName = ''

export default FeaturedContent
