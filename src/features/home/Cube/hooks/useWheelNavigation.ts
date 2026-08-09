import { useEffect, useRef } from 'react'
import { adjacentSceneIndex } from '../Cube.constants'

export const useWheelNavigation = (activeIndex: number, selectScene: (index: number) => void) => {
  const wheelLocked = useRef(false)

  useEffect(() => {
    const rotateWithWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (wheelLocked.current || Math.abs(event.deltaY) < 12) return
      wheelLocked.current = true
      selectScene(adjacentSceneIndex(activeIndex, event.deltaY > 0 ? 1 : -1))
      window.setTimeout(() => { wheelLocked.current = false }, 650)
    }
    addEventListener('wheel', rotateWithWheel, { passive: false })
    return () => removeEventListener('wheel', rotateWithWheel)
  }, [activeIndex, selectScene])
}
