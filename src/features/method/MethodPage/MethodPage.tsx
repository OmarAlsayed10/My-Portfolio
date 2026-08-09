import { Link } from 'react-router'
import { aboutContent, localized } from '../../../content'
import type { SiteControls } from '../../../shared/types/site'
import { DisplayHeading } from '../../../shared/ui/DisplayHeading'
import { PageShell } from '../../../shared/ui/PageShell'

export const MethodPage = (siteControls: SiteControls) => {
  const { language } = siteControls
  const details = aboutContent.sections.method
  return (
    <PageShell {...siteControls}><main className="section-page method-page"><p>{localized(language, details.eyebrow, details.eyebrowAr)}</p><DisplayHeading as="h1" variant="page">{localized(language, details.title, details.titleAr)}</DisplayHeading><div className="section-statement"><p>{localized(language, details.copy, details.copyAr)}</p></div><section className="method-steps">{details.steps.map((step, index) => <article key={step.title}><header><span>0{index + 1}</span><DisplayHeading variant="feature">{localized(language, step.title, step.titleAr)}</DisplayHeading></header><div><p>{localized(language, step.copy, step.copyAr)}</p><small>{localized(language, 'Output', 'المخرج')}</small><strong>{localized(language, step.output, step.outputAr)}</strong></div></article>)}</section><section className="method-standards"><header><p>{localized(language, 'Always present', 'حاضرة دائماً')}</p><DisplayHeading variant="section">{localized(language, details.standardsTitle, details.standardsTitleAr)}</DisplayHeading></header><div>{details.standards.map((standard) => <article key={standard.title}><DisplayHeading as="h3" variant="subsection">{localized(language, standard.title, standard.titleAr)}</DisplayHeading><p>{localized(language, standard.copy, standard.copyAr)}</p></article>)}</div></section><Link className="next-project" to="/projects" viewTransition>{localized(language, 'See the method in the work', 'شاهد المنهج داخل الأعمال')} ↗</Link></main></PageShell>
  )
}
