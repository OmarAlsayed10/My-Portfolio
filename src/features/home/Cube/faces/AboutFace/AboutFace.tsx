import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'

export const AboutFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={3} /><p className="eyebrow">{localized(language, aboutContent.aboutFace.eyebrow, aboutContent.aboutFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.aboutFace.title, aboutContent.aboutFace.titleAr)}</DisplayHeading><div className="split-copy"><p>{localized(language, aboutContent.aboutFace.copy, aboutContent.aboutFace.copyAr)}</p></div></>
)
