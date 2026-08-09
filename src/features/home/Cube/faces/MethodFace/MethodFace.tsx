import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'
import { MethodFaceTokens } from './MethodFace.tokens'

export const MethodFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={4} /><p {...MethodFaceTokens.eyebrow}>{localized(language, aboutContent.methodFace.eyebrow, aboutContent.methodFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.methodFace.title, aboutContent.methodFace.titleAr)}</DisplayHeading><div {...MethodFaceTokens.orbit} aria-hidden="true"><span>01</span><span>02</span><span>03</span></div><p {...MethodFaceTokens.copy}>{localized(language, aboutContent.methodFace.copy, aboutContent.methodFace.copyAr)}</p></>
)
