import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent, PointerEvent } from 'react'
import { useNavigate } from 'react-router'
import type { Language } from '../../../content'
import { SceneAction } from './SceneAction'
import { sceneRoutes } from './Cube.constants'
import { AboutFace, CapabilitiesFace, ContactFace, CubeFace, IntroFace, MethodFace, WorkActions, WorkFace } from './faces'
import { useCubeDrag } from './hooks/useCubeDrag'
import { useSceneSettled } from './hooks/useSceneSettled'
import { useWheelNavigation } from './hooks/useWheelNavigation'
import { CubeTokens } from './Cube.tokens'
import './Cube.tokens.css'

type CubeProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
  language: Language
}

export const Cube = ({ activeIndex, setActiveIndex, language }: CubeProps) => {
  const navigate = useNavigate()
  const isSettled = useSceneSettled(activeIndex)
  const [isIdlePaused, setIsIdlePaused] = useState(false)
  const resumeTimer = useRef<number | undefined>(undefined)
  const { rotation, isAligned, isDragging, clickedSceneIndex, startDrag, moveCube, finishDrag, resetDrag } = useCubeDrag(activeIndex, setActiveIndex, isIdlePaused)
  useWheelNavigation(activeIndex, setActiveIndex)
  useEffect(() => () => window.clearTimeout(resumeTimer.current), [])

  const cubeStyle = {
    '--rotate-x': `${rotation.x}deg`,
    '--rotate-y': `${rotation.y}deg`
  } as CSSProperties
  const faceActionsVisible = activeIndex === 1 && isSettled && isAligned && !isDragging

  const pauseIdleRotation = () => {
    window.clearTimeout(resumeTimer.current)
    setIsIdlePaused(true)
  }

  const resumeIdleRotation = () => {
    window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => setIsIdlePaused(false), 250)
  }

  const beginDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    startDrag(event)
  }

  const activateVisibleScene = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    const sceneIndex = clickedSceneIndex()
    if (sceneIndex !== null) navigate(sceneRoutes[sceneIndex])
  }

  return (
    <div className={`${CubeTokens.stage.className}${isDragging ? ' is-dragging' : ''}${faceActionsVisible ? ' face-actions-visible' : ''}`} onPointerEnter={pauseIdleRotation} onPointerLeave={resumeIdleRotation} onPointerDown={beginDrag} onPointerMove={moveCube} onPointerUp={finishDrag} onPointerCancel={resetDrag} onClick={activateVisibleScene}>
      <div {...CubeTokens.shadow} />
      <div className={`${CubeTokens.cube.className} ${isDragging ? CubeTokens.draggingCube.className : ''}`} style={cubeStyle}>
        <CubeFace index={0} activeIndex={activeIndex}><IntroFace language={language} /></CubeFace>
        <CubeFace index={1} activeIndex={activeIndex}><WorkFace language={language} /></CubeFace>
        <CubeFace index={2} activeIndex={activeIndex}><CapabilitiesFace language={language} /></CubeFace>
        <CubeFace index={3} activeIndex={activeIndex}><AboutFace language={language} /></CubeFace>
        <CubeFace index={4} activeIndex={activeIndex}><MethodFace language={language} /></CubeFace>
        <CubeFace index={5} activeIndex={activeIndex}><ContactFace language={language} /></CubeFace>
      </div>
      {activeIndex === 1 && isSettled && !isDragging && <WorkActions language={language} isVisible={faceActionsVisible} />}
      {isSettled && isAligned && !isDragging && <SceneAction activeIndex={activeIndex} language={language} />}
    </div>
  )
}
