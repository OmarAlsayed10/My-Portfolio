import { Link } from 'react-router'
import type { Language } from '../../../../content'
import { sceneActions, sceneRoutes } from '../Cube.constants'

export const SceneAction = ({ activeIndex, language }: { activeIndex: number; language: Language }) => (
  <Link className="scene-action" to={sceneRoutes[activeIndex]} viewTransition><span>{sceneActions[activeIndex][language]}</span><b>↗</b></Link>
)
