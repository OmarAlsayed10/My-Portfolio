import { useEffect, useRef, useState } from 'react'

export const useSceneSettled = (activeIndex: number) => {
  const [isSettled, setIsSettled] = useState(true)
  const previousIndex = useRef(activeIndex)

  useEffect(() => {
    if (previousIndex.current === activeIndex) return
    previousIndex.current = activeIndex
    setIsSettled(false)
    const settleTimer = window.setTimeout(() => setIsSettled(true), 850)
    return () => window.clearTimeout(settleTimer)
  }, [activeIndex])

  return isSettled
}
