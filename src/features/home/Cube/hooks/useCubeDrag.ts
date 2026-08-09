import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { cubeRotations } from '../Cube.constants'

const angularDistance = (firstAngle: number, secondAngle: number) => Math.abs(((firstAngle - secondAngle + 540) % 360) - 180)

const closestSceneIndex = (rotation: Rotation, activeIndex: number) => {
  if (activeIndex >= 4 && angularDistance(rotation.x, cubeRotations[activeIndex].x) < 45) return activeIndex
  return cubeRotations.reduce((closestIndex, candidate, candidateIndex) => {
    const closest = cubeRotations[closestIndex]
    const candidateDistance = angularDistance(rotation.x, candidate.x) + angularDistance(rotation.y, candidate.y)
    const closestDistance = angularDistance(rotation.x, closest.x) + angularDistance(rotation.y, closest.y)
    return candidateDistance < closestDistance ? candidateIndex : closestIndex
  }, 0)
}

type PointerStart = { id: number; x: number; y: number }
type Rotation = { x: number; y: number }

export const useCubeDrag = (activeIndex: number, selectScene: (index: number) => void, isIdlePaused: boolean) => {
  const [rotation, setRotation] = useState<Rotation>(cubeRotations[activeIndex])
  const [isDragging, setIsDragging] = useState(false)
  const rotationRef = useRef(rotation)
  const pointerStart = useRef<PointerStart | null>(null)
  const dragStartRotation = useRef(rotation)
  const sceneSelectedFromRotation = useRef(false)
  const dragMoved = useRef(false)

  const updateRotation = (nextRotation: Rotation) => {
    rotationRef.current = nextRotation
    setRotation(nextRotation)
  }

  const selectRotationScene = (nextRotation: Rotation) => {
    const nextIndex = closestSceneIndex(nextRotation, activeIndex)
    if (nextIndex === activeIndex) return nextIndex
    sceneSelectedFromRotation.current = true
    selectScene(nextIndex)
    return nextIndex
  }

  useEffect(() => {
    if (sceneSelectedFromRotation.current) {
      sceneSelectedFromRotation.current = false
      return
    }
    updateRotation(cubeRotations[activeIndex])
  }, [activeIndex])

  useEffect(() => {
    if (isIdlePaused || isDragging || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let animationFrame = 0
    let previousTime = 0
    const rotate = (time: number) => {
      if (previousTime) {
        const elapsed = Math.min(time - previousTime, 40)
        setRotation((current) => {
          const nextRotation = { x: current.x + elapsed * .007, y: current.y + elapsed * .018 }
          rotationRef.current = nextRotation
          return nextRotation
        })
      }
      previousTime = time
      animationFrame = requestAnimationFrame(rotate)
    }
    const idleDelay = activeIndex === 0 ? 700 : 3000
    const startTimer = window.setTimeout(() => { animationFrame = requestAnimationFrame(rotate) }, idleDelay)
    return () => {
      window.clearTimeout(startTimer)
      cancelAnimationFrame(animationFrame)
    }
  }, [activeIndex, isDragging, isIdlePaused])

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    pointerStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
    dragStartRotation.current = rotationRef.current
    dragMoved.current = false
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveCube = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return
    if (Math.abs(event.clientX - pointerStart.current.x) + Math.abs(event.clientY - pointerStart.current.y) > 5) dragMoved.current = true
    updateRotation({ x: dragStartRotation.current.x - (event.clientY - pointerStart.current.y) * .3, y: dragStartRotation.current.y + (event.clientX - pointerStart.current.x) * .3 })
  }

  const resetDrag = () => {
    pointerStart.current = null
    setIsDragging(false)
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return
    const finalRotation = { x: dragStartRotation.current.x - (event.clientY - pointerStart.current.y) * .3, y: dragStartRotation.current.y + (event.clientX - pointerStart.current.x) * .3 }
    updateRotation(finalRotation)
    selectRotationScene(finalRotation)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    resetDrag()
  }

  const activeRotation = cubeRotations[activeIndex]
  const isAligned = angularDistance(rotation.x, activeRotation.x) < .1 && angularDistance(rotation.y, activeRotation.y) < .1
  const clickedSceneIndex = () => {
    if (dragMoved.current) {
      dragMoved.current = false
      return null
    }
    return closestSceneIndex(rotationRef.current, activeIndex)
  }

  return { rotation, isAligned, isDragging, clickedSceneIndex, startDrag, moveCube, finishDrag, resetDrag }
}
