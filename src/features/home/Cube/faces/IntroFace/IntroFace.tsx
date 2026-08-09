import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'
import { IntroFaceTokens } from './IntroFace.tokens'

export const IntroFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={0} /><p {...IntroFaceTokens.eyebrow}>{localized(language, aboutContent.intro.eyebrow, aboutContent.intro.eyebrowAr)}</p><DisplayHeading as="h1" variant="cube-hero">{localized(language, aboutContent.brand.name, aboutContent.brand.nameAr)}</DisplayHeading><p {...IntroFaceTokens.lead}>{localized(language, aboutContent.intro.statement, aboutContent.intro.statementAr)}</p><div {...IntroFaceTokens.mark} aria-hidden="true"><i /><i /><i /></div></>
)
