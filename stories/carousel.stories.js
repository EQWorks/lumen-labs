import React from 'react'

import { Carousel } from '../src'


export default {
  title: 'Carousel',
  component: Carousel,
}

export const Simple = () => {
  return (
    <Carousel>
      <Carousel.CarouselItem>Item 1</Carousel.CarouselItem>
      <Carousel.CarouselItem>Item 2</Carousel.CarouselItem>
      <Carousel.CarouselItem>Item 3</Carousel.CarouselItem>
    </Carousel>
  )
}
