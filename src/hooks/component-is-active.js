import { useState, useEffect, useRef } from 'react'


// pointer focus, does not handle keyboard events
//  --> can use these states to handle onFocus/onBlur events on target components
export const useComponentIsActive = () => {
  const [componentIsActive, setComponentIsActive] = useState(false)
  const ref = useRef(null)

  const outOfComponentClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setComponentIsActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('pointerdown', outOfComponentClick)
    return () => document.removeEventListener('pointerdown', outOfComponentClick)
  })

  return { ref, componentIsActive, setComponentIsActive }
}
