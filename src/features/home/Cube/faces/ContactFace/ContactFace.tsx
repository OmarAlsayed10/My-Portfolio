import { aboutContent, localized } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { SceneNumber } from '../SceneNumber'
import { ContactFaceTokens } from './ContactFace.tokens'

export const ContactFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={5} /><p {...ContactFaceTokens.eyebrow}>{localized(language, aboutContent.contactFace.eyebrow, aboutContent.contactFace.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.contactFace.title, aboutContent.contactFace.titleAr)}</DisplayHeading><a {...ContactFaceTokens.email} href={`mailto:${aboutContent.brand.email}`}>{aboutContent.brand.email}</a><div {...ContactFaceTokens.social}>{aboutContent.brand.links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{localized(language, link.label, link.labelAr)}</a>)}</div></>
)
