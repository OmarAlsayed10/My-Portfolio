import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'
import { CapabilitiesFaceTokens } from './CapabilitiesFace.tokens'

export const CapabilitiesFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={2} /><p {...CapabilitiesFaceTokens.eyebrow}>{localized(language, aboutContent.capabilitiesFace.eyebrow, aboutContent.capabilitiesFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.capabilitiesFace.title, aboutContent.capabilitiesFace.titleAr)}</DisplayHeading><ul {...CapabilitiesFaceTokens.list}>{aboutContent.capabilitiesFace.items.map((capability) => <li key={capability.en}>{capability[language]}</li>)}</ul></>
)
