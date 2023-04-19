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

export const useCarousel = (carouselRef, variant, length) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const movePrev = () => {
    if (variant === 'multi' && carouselRef.current !== null) {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1)
      }
    }
    else if (variant === 'single' && carouselRef.current !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const moveNext = () => {
    if (variant === 'multi') {
      if (
        carouselRef.current !== null && currentIndex < Math.ceil((length / Math.floor(carouselRef.current.offsetWidth /
          carouselRef.current.childNodes[0].clientWidth) - 1))
      ) {
        setCurrentIndex((prevState) => prevState + 1)
      }
    }
    else if (variant === 'single' && carouselRef.current !== null && currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1)
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
      else if (variant === 'single') {
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
    }
  }, [currentIndex, carouselRef])

  return { moveNext, movePrev, isDisabled, currentIndex }
}
