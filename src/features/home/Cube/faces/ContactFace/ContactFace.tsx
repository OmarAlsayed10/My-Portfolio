import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'

export const ContactFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={5} /><p className="eyebrow">{localized(language, aboutContent.contactFace.eyebrow, aboutContent.contactFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.contactFace.title, aboutContent.contactFace.titleAr)}</DisplayHeading><span className="email-link">{aboutContent.brand.email}</span><div className="social-links"><span>GitHub</span><span>LinkedIn</span></div></>
)
