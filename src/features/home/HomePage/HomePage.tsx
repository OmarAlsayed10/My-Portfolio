import { useEffect, useState } from 'react'
import { localized, scenes } from '../../../content'
import type { SiteControls } from '../../../shared/types/site'
import { SpaceField } from '../../../shared/ui/SpaceField'
import { Cube } from '../Cube'
import { HomeHeader } from './HomeHeader'
import { SceneNavigation } from './SceneNavigation'
import { HomePageTokens } from './HomePage.tokens'

export const HomePage = (siteControls: SiteControls) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { language } = siteControls

  useEffect(() => {
    const navigateWithKeys = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowUp') setActiveIndex((index) => (index + 1) % scenes.length)
      if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') setActiveIndex((index) => (index - 1 + scenes.length) % scenes.length)
      if (event.key === 'Home') setActiveIndex(0)
      if (event.key === 'End') setActiveIndex(scenes.length - 1)
    }
    addEventListener('keydown', navigateWithKeys)
    return () => removeEventListener('keydown', navigateWithKeys)
  }, [])

  return (
    <main {...HomePageTokens.root}><HomeHeader {...siteControls} /><SpaceField /><p {...HomePageTokens.status} aria-live="polite">{localized(language, scenes[activeIndex].label, scenes[activeIndex].labelAr)}</p><Cube activeIndex={activeIndex} setActiveIndex={setActiveIndex} language={language} /><SceneNavigation activeIndex={activeIndex} selectScene={setActiveIndex} language={language} /><p {...HomePageTokens.hint}>{localized(language, 'Use wheel, drag, swipe, or arrow keys', 'استخدم التمرير أو السحب أو الأسهم')}</p><div {...HomePageTokens.grain} aria-hidden="true" /></main>
  )
}
