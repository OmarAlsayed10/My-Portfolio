import { Link } from 'react-router'
import type { Language } from '../../../../content'
import { sceneActions, sceneRoutes } from '../Cube.constants'
import { SceneActionTokens } from './SceneAction.tokens'

export const SceneAction = ({ activeIndex, language }: { activeIndex: number; language: Language }) => (
  <Link {...SceneActionTokens.root} className={`group ${SceneActionTokens.root.className}`} to={sceneRoutes[activeIndex]} viewTransition><span {...SceneActionTokens.label}>{sceneActions[activeIndex][language]}</span><b {...SceneActionTokens.arrow}>↗</b></Link>
)
