import { useCallback, useState, useEffect } from 'react'

export const useCarousel = (ref) => {
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
