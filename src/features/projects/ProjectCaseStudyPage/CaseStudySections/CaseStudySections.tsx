import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'

const projectSections = (project: Project, language: Language) => [
  { title: localized(language, 'Scope', 'النطاق'), copy: project.scope[language] },
  { title: localized(language, 'Challenge', 'التحدي'), copy: project.challenge[language] },
  { title: localized(language, 'Engineering approach', 'النهج الهندسي'), copy: project.approach[language] },
  { title: localized(language, 'Outcome', 'النتيجة'), copy: project.outcome[language] }
]

export const CaseStudySections = ({ project, language }: { project: Project; language: Language }) => (
  <section className="my-28 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">{projectSections(project, language).map((section, sectionIndex) => <article className="border-t border-line pt-4" key={section.title}><span className="font-mono text-[.58rem] text-accent">0{sectionIndex + 1}</span><DisplayHeading variant="feature" className="my-8">{section.title}</DisplayHeading><p className="leading-7 text-muted">{section.copy}</p></article>)}</section>
)
