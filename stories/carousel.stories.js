import React from 'react'

import { Card, Carousel, Layout, makeStyles } from '../src'


export default {
  title: 'Carousel',
  component: Carousel,
}

const customClasses = makeStyles({
  CarouselContainer: {
    '& .carousel__root': {
      '& .carousel__main-container': {
        '& .carousel-item__root': {
          marginRight: '0.5rem',
          '&:last-child': {
            marginRight: 0,
          },

          '& .custom-layout__root-container': {
            width: '42rem',
            height: '32rem',

            '& .custom-layout__header-container': {
              width: '100%',
              height: '11.25rem',
              marginBottom: '2.5rem',
            },

            '& .custom-layout__content-container': {
              width: '100%',
              height: '10rem',
              marginBottom: '2.5rem',
              padding: '0 2.5rem',
            },

            '& .custom-layout__footer-container': {
              width: '100%',
              height: '3.25rem',
              marginBottom: '2.5rem',
              padding: '0 2.5rem',
            },
          },
        },
      },

      '& .carousel-prev-next__container': {
        justifyContent: 'center',
        backgroundColor: 'green',
      },
    },
  },
})

const renderCustom = (i) => (
  <Carousel.CarouselItem
    key={i}
    classes={{
      root: 'bg-error-500',
    }}
  >
    <Layout className='custom-layout__root-container'>
      <Layout.Header className='custom-layout__header-container bg-primary-100'>header</Layout.Header>
      <Layout.Content className='custom-layout__content-container bg-neutral-50'>content - {i + 1}</Layout.Content>
      <Layout.Footer className='custom-layout__footer-container bg-neutral-50'>footer</Layout.Footer>
    </Layout>
  </Carousel.CarouselItem>
)

export const Normal = () => {
  return (
    <Carousel>
      {[...Array(10).keys()].map(i => (
        <Carousel.CarouselItem
          key={i}
        >
          <Card
            size='lg'
            header='Header section'
            content={`Content section - ${i + 1}`}
            footer={'Footer section'}
          />
        </Carousel.CarouselItem>
      ))}
    </Carousel>
  )
}

export const Multi = () => {
  return (
    <div className={customClasses.CarouselContainer}>
      <Carousel>
        {[...Array(7).keys()].map(i => (
          renderCustom(i)
        ))}
      </Carousel>
    </div>
  )
}

export const single = () => {
  return (
    <div className={customClasses.CarouselContainer}>
      <Carousel
        variant='single'
      >
        {[...Array(7).keys()].map(i => (
          renderCustom(i)
        ))}
      </Carousel>
    </div>
  )
}
