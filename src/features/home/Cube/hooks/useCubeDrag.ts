import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { cubeRotations } from '../Cube.constants'

const angularDistance = (firstAngle: number, secondAngle: number) => Math.abs(((firstAngle - secondAngle + 540) % 360) - 180)

const closestSceneIndex = (rotation: Rotation) => cubeRotations.reduce((closestIndex, candidate, candidateIndex) => {
  const closest = cubeRotations[closestIndex]
  const candidateDistance = angularDistance(rotation.x, candidate.x) + angularDistance(rotation.y, candidate.y)
  const closestDistance = angularDistance(rotation.x, closest.x) + angularDistance(rotation.y, closest.y)
  return candidateDistance < closestDistance ? candidateIndex : closestIndex
}, 0)

type PointerStart = { id: number; x: number; y: number }
type Rotation = { x: number; y: number }

export const useCubeDrag = (activeIndex: number, selectScene: (index: number) => void) => {
  const [rotation, setRotation] = useState<Rotation>(cubeRotations[activeIndex])
  const [isDragging, setIsDragging] = useState(false)
  const pointerStart = useRef<PointerStart | null>(null)
  const dragStartRotation = useRef(rotation)
  const activeSceneChangedByDrag = useRef(false)

  useEffect(() => {
    if (activeSceneChangedByDrag.current) {
      activeSceneChangedByDrag.current = false
      return
    }
    setRotation(cubeRotations[activeIndex])
  }, [activeIndex])

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    pointerStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
    dragStartRotation.current = rotation
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveCube = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return
    setRotation({ x: dragStartRotation.current.x - (event.clientY - pointerStart.current.y) * .3, y: dragStartRotation.current.y + (event.clientX - pointerStart.current.x) * .3 })
  }

  const resetDrag = () => {
    pointerStart.current = null
    setIsDragging(false)
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return
    const finalRotation = { x: dragStartRotation.current.x - (event.clientY - pointerStart.current.y) * .3, y: dragStartRotation.current.y + (event.clientX - pointerStart.current.x) * .3 }
    activeSceneChangedByDrag.current = true
    setRotation(finalRotation)
    selectScene(closestSceneIndex(finalRotation))
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    resetDrag()
  }

  return { rotation, isDragging, startDrag, moveCube, finishDrag, resetDrag }
}
