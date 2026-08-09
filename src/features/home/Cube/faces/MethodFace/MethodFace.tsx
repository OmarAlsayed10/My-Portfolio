import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'

export const MethodFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={4} /><p className="eyebrow">{localized(language, aboutContent.methodFace.eyebrow, aboutContent.methodFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.methodFace.title, aboutContent.methodFace.titleAr)}</DisplayHeading><div className="method-orbit" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div><p className="method-copy">{localized(language, aboutContent.methodFace.copy, aboutContent.methodFace.copyAr)}</p></>
)
