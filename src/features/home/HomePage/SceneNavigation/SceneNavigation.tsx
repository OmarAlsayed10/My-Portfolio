import { localized, scenes } from '../../../../content'
import type { Language } from '../../../../content'
import { SceneNavigationTokens } from './SceneNavigation.tokens'

export const SceneNavigation = ({ activeIndex, selectScene, language }: { activeIndex: number; selectScene: (index: number) => void; language: Language }) => (
  <nav {...SceneNavigationTokens.root} aria-label={localized(language, 'Cube scenes', 'واجهات المكعب')}>{scenes.map((scene, index) => <button key={scene.name} className={`${SceneNavigationTokens.button.className} ${activeIndex === index ? SceneNavigationTokens.active.className : ''}`} onClick={() => selectScene(index)} aria-label={localized(language, scene.label, scene.labelAr)} aria-current={activeIndex === index ? 'page' : undefined}><span {...SceneNavigationTokens.index}>0{index + 1}</span><strong {...SceneNavigationTokens.label}>{localized(language, scene.label, scene.labelAr)}</strong></button>)}</nav>
)
