import { useCallback, useState, useEffect } from 'react'


export const useFeaturedCarousel = (ref) => {
  const [prevElement, setPrevElement] = useState(null)
  const [nextElement, setNextElement] = useState(null)

  useEffect(() => {
    if (ref) {
      const update = () => {
        const rect = ref.getBoundingClientRect()
        const visibleElements = Array.from(ref.children).filter((child) => {
          const childRect = child.getBoundingClientRect()
          return childRect.left >= rect.left && childRect.right <= rect.right
        })

        if (visibleElements.length > 0) {
          setPrevElement(visibleElements[0]?.previousElementSibling)
          const nextSibling = visibleElements[visibleElements.length - 1].nextElementSibling
          setNextElement(nextSibling instanceof HTMLElement ? nextSibling : null)
        }
      }

      const onWheel = (e) => {
        if (e.deltaY === 0) return
        if (
          !(ref.scrollLeft === 0 && e.deltaY < 0) &&
          !(ref.scrollWidth - ref.clientWidth - Math.round(ref.scrollLeft) === 0 && e.deltaY > 0)
        ) {
          e.preventDefault()
        }

        ref.scrollTo({
          left: ref.scrollLeft + e.deltaY,
          behavior: 'smooth',
        })
      }

      update()
      ref.addEventListener('wheel', onWheel)
      ref.addEventListener('scroll', update, { passive: true })
      return () => {
        ref.removeEventListener('wheel', onWheel)
        ref.removeEventListener('scroll', update, { passive: true })
      }
    }

    return null
  }, [ref])

  const scrollToElement = useCallback(
    (element) => {
      const currentNode = ref
      if (!currentNode || !element) return
      const newScrollPosition = element.offsetLeft
        + element.getBoundingClientRect().width / 2
        - currentNode.getBoundingClientRect().width / 2
      currentNode.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    },
    [ref],
  )

  const scrollRight = useCallback(() => scrollToElement(nextElement), [
    scrollToElement,
    nextElement,
  ])

  const scrollLeft = useCallback(() => scrollToElement(prevElement), [
    scrollToElement,
    prevElement,
  ])

  return { scrollRight, scrollLeft }
}

const getContainerMargin = (element, marginSide) => {
  const getStyle = window.getComputedStyle(element)
  return Number(getStyle[marginSide].replace(/\D/g, ''))
}

export const useCarousel = (carouselRef, variant, length, initialPage) => {
  const [currentIndex, setCurrentIndex] = useState(initialPage || 0)
  const [slideNumber, setSlideNumber] = useState(0)

  const movePrev = (_, num = 1) => {
    if (carouselRef.current !== null && currentIndex > 0) {
      if (variant === 'multi') {
        setCurrentIndex((prevState) => prevState - num)
      }

      if (variant === 'single') {
        setCurrentIndex(currentIndex - num)
      }
    }
  }

  const moveNext = (_, num = 1) => {
    if (carouselRef.current !== null) {
      if (
        variant === 'multi' && currentIndex < Math.ceil((length / Math.floor(carouselRef.current.offsetWidth /
          carouselRef.current.childNodes[0].clientWidth) - 1))
      ) {
        setCurrentIndex((prevState) => prevState + num)
      }

      if (variant === 'single' && currentIndex < length - 1) {
        setCurrentIndex(currentIndex + num)
      }
    }
  }

  const movePagination = (_, num) => {
    if (carouselRef.current !== null) {
      setCurrentIndex(num)
    }
  }

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carouselRef.current !== null) {
      if (variant === 'multi') {
        return currentIndex >= Math.ceil((length / Math.floor(carouselRef.current.offsetWidth / carouselRef.current.childNodes[0].clientWidth) - 1))
      }

      if (variant === 'single') {
        return currentIndex === length - 1
      }
    }

    return false
  }

  useEffect(() => {
    if (carouselRef !== null && carouselRef?.current !== null) {
      const getMarginRight = getContainerMargin(carouselRef.current.childNodes[0], 'marginRight')
      const getMarginLeft = getContainerMargin(carouselRef.current.childNodes[0], 'marginLeft')
      const visibleItems = Math.floor(carouselRef.current.offsetWidth / carouselRef.current.childNodes[0].clientWidth)
      const calcOffsetWidth = carouselRef.current.offsetWidth -
        ((carouselRef.current.childNodes[0].clientWidth * visibleItems) +
        ((getMarginRight + getMarginLeft) * visibleItems))

      carouselRef.current.scrollLeft =
        (carouselRef.current.offsetWidth - calcOffsetWidth) * currentIndex

      setSlideNumber(Math.ceil((carouselRef.current.childNodes[0].clientWidth * length) / (carouselRef.current.offsetWidth - calcOffsetWidth)))
    }
  }, [currentIndex, carouselRef, length, setSlideNumber])

  return { moveNext, movePrev, movePagination, isDisabled, currentIndex, slideNumber }
}
