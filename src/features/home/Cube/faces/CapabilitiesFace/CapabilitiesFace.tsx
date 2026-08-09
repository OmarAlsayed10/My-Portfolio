import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'

export const CapabilitiesFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={2} /><p className="eyebrow">{localized(language, aboutContent.capabilitiesFace.eyebrow, aboutContent.capabilitiesFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.capabilitiesFace.title, aboutContent.capabilitiesFace.titleAr)}</DisplayHeading><ul className="capability-list">{aboutContent.capabilitiesFace.items.map((capability) => <li key={capability.en}>{capability[language]}</li>)}</ul></>
)
