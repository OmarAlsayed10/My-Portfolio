import type { CSSProperties } from 'react'
import type { Language } from '../../../content'
import { SceneAction } from './SceneAction'
import { AboutFace, CapabilitiesFace, ContactFace, CubeFace, IntroFace, MethodFace, WorkActions, WorkFace } from './faces'
import { useCubeDrag } from './hooks/useCubeDrag'
import { useSceneSettled } from './hooks/useSceneSettled'
import { useWheelNavigation } from './hooks/useWheelNavigation'
import './Cube.tokens.css'

type CubeProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
  language: Language
}

export const Cube = ({ activeIndex, setActiveIndex, language }: CubeProps) => {
  const isSettled = useSceneSettled(activeIndex)
  const { rotation, isDragging, startDrag, moveCube, finishDrag, resetDrag } = useCubeDrag(activeIndex, setActiveIndex)
  useWheelNavigation(activeIndex, setActiveIndex)

  const cubeStyle = {
    '--rotate-x': `${rotation.x}deg`,
    '--rotate-y': `${rotation.y}deg`
  } as CSSProperties
  const faceActionsVisible = activeIndex === 1 && isSettled && !isDragging

  return (
    <div className={`cube-stage${isDragging ? ' is-dragging' : ''}${faceActionsVisible ? ' face-actions-visible' : ''}`} onPointerDown={startDrag} onPointerMove={moveCube} onPointerUp={finishDrag} onPointerCancel={resetDrag}>
      <div className="cube-shadow" />
      <div className="cube" style={cubeStyle}>
        <CubeFace index={0} activeIndex={activeIndex}><IntroFace language={language} /></CubeFace>
        <CubeFace index={1} activeIndex={activeIndex}><WorkFace language={language} /></CubeFace>
        <CubeFace index={2} activeIndex={activeIndex}><CapabilitiesFace language={language} /></CubeFace>
        <CubeFace index={3} activeIndex={activeIndex}><AboutFace language={language} /></CubeFace>
        <CubeFace index={4} activeIndex={activeIndex}><MethodFace language={language} /></CubeFace>
        <CubeFace index={5} activeIndex={activeIndex}><ContactFace language={language} /></CubeFace>
      </div>
      {faceActionsVisible && <WorkActions language={language} />}
      {isSettled && !isDragging && <SceneAction activeIndex={activeIndex} language={language} />}
    </div>
  )
}
