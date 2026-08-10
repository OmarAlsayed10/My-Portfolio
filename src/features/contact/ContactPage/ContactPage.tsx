import { aboutContent, localized } from '../../../content'
import type { SiteControls } from '../../../shared/types/site'
import { DisplayHeading } from '../../../shared/ui/DisplayHeading'
import { PageShell } from '../../../shared/ui/PageShell'
import { ContactForm } from './ContactForm'
import { ContactQuestions } from './ContactQuestions'
import { ContactPageTokens } from './ContactPage.tokens'

export const ContactPage = (siteControls: SiteControls) => {
  const { language } = siteControls
  return (
    <PageShell {...siteControls}><main {...ContactPageTokens.root}><header {...ContactPageTokens.header}><p>{localized(language, aboutContent.contactFace.eyebrow, aboutContent.contactFace.eyebrowAr)}</p><DisplayHeading as="h1" variant="page">{localized(language, aboutContent.contactFace.title, aboutContent.contactFace.titleAr)}</DisplayHeading></header><section {...ContactPageTokens.workspace}><div {...ContactPageTokens.direct}><span>{localized(language, 'Direct email', 'البريد المباشر')}</span><a href={`mailto:${aboutContent.brand.email}`}>{aboutContent.brand.email} ↗</a></div><ContactForm language={language} /></section><ContactQuestions language={language} /><nav {...ContactPageTokens.social} aria-label={localized(language, 'Social links', 'روابط التواصل')}>{aboutContent.brand.links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{localized(language, link.label, link.labelAr)} ↗</a>)}</nav></main></PageShell>
  )
}
