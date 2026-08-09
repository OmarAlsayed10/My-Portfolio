import { localized, scenes } from '../../../../content'
import type { Language } from '../../../../content'

export const SceneNavigation = ({ activeIndex, selectScene, language }: { activeIndex: number; selectScene: (index: number) => void; language: Language }) => (
  <nav className="scene-navigation" aria-label={localized(language, 'Cube scenes', 'واجهات المكعب')}>{scenes.map((scene, index) => <button key={scene.name} className={activeIndex === index ? 'active' : ''} onClick={() => selectScene(index)} aria-label={localized(language, scene.label, scene.labelAr)} aria-current={activeIndex === index ? 'page' : undefined}><span>0{index + 1}</span><strong>{localized(language, scene.label, scene.labelAr)}</strong></button>)}</nav>
)
