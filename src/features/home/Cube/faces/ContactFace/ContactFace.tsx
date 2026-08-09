import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'
import { ContactFaceTokens } from './ContactFace.tokens'

export const ContactFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={5} /><p {...ContactFaceTokens.eyebrow}>{localized(language, aboutContent.contactFace.eyebrow, aboutContent.contactFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.contactFace.title, aboutContent.contactFace.titleAr)}</DisplayHeading><span {...ContactFaceTokens.email}>{aboutContent.brand.email}</span><div {...ContactFaceTokens.social}><span>GitHub</span><span>LinkedIn</span></div></>
)
