import { aboutContent, localized } from '../../../content'
import type { SiteControls } from '../../../shared/types/site'
import { DisplayHeading } from '../../../shared/ui/DisplayHeading'
import { PageShell } from '../../../shared/ui/PageShell'
import { ContactForm } from './ContactForm'
import { ContactQuestions } from './ContactQuestions'

export const ContactPage = (siteControls: SiteControls) => {
  const { language } = siteControls
  return (
    <PageShell {...siteControls}><main className="contact-page"><header><p>{localized(language, aboutContent.contactFace.eyebrow, aboutContent.contactFace.eyebrowAr)}</p><DisplayHeading as="h1" variant="page">{localized(language, aboutContent.contactFace.title, aboutContent.contactFace.titleAr)}</DisplayHeading></header><section className="contact-workspace"><div><span>{localized(language, 'Direct email', 'البريد المباشر')}</span><a href={`mailto:${aboutContent.brand.email}`}>{aboutContent.brand.email} ↗</a></div><ContactForm language={language} /></section><ContactQuestions language={language} /><nav aria-label={localized(language, 'Social links', 'روابط التواصل')}><a href={aboutContent.brand.github}>GitHub ↗</a><a href={aboutContent.brand.linkedin}>LinkedIn ↗</a></nav></main></PageShell>
  )
}
