import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { adjacentSceneIndex } from '../Cube.constants'

const emptyDrag = { x: 0, y: 0 }

type PointerStart = { id: number; x: number; y: number }

export const useCubeDrag = (activeIndex: number, selectScene: (index: number) => void) => {
  const [drag, setDrag] = useState(emptyDrag)
  const [isDragging, setIsDragging] = useState(false)
  const pointerStart = useRef<PointerStart | null>(null)
  const currentDrag = useRef(emptyDrag)

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    pointerStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
    currentDrag.current = emptyDrag
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveCube = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return
    currentDrag.current = { x: event.clientX - pointerStart.current.x, y: event.clientY - pointerStart.current.y }
    setDrag(currentDrag.current)
  }

  const resetDrag = () => {
    pointerStart.current = null
    currentDrag.current = emptyDrag
    setDrag(emptyDrag)
    setIsDragging(false)
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return
    const { x, y } = currentDrag.current
    const distance = Math.abs(x) > Math.abs(y) ? x : -y
    if (Math.abs(distance) > 45) selectScene(adjacentSceneIndex(activeIndex, distance < 0 ? 1 : -1))
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    resetDrag()
  }

  return { drag, isDragging, startDrag, moveCube, finishDrag, resetDrag }
}
