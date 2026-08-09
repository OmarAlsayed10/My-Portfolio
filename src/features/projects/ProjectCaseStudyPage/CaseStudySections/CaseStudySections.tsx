import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { CaseStudySectionsTokens } from './CaseStudySections.tokens'

const projectSections = (project: Project, language: Language) => [
  { title: localized(language, 'Scope', 'النطاق'), copy: project.scope[language] },
  { title: localized(language, 'Challenge', 'التحدي'), copy: project.challenge[language] },
  { title: localized(language, 'Engineering approach', 'النهج الهندسي'), copy: project.approach[language] },
  { title: localized(language, 'Outcome', 'النتيجة'), copy: project.outcome[language] }
]

export const CaseStudySections = ({ project, language }: { project: Project; language: Language }) => (
  <section {...CaseStudySectionsTokens.root}>{projectSections(project, language).map((section, sectionIndex) => <article {...CaseStudySectionsTokens.article} key={section.title}><span {...CaseStudySectionsTokens.index}>0{sectionIndex + 1}</span><DisplayHeading variant="feature" className={CaseStudySectionsTokens.heading.className}>{section.title}</DisplayHeading><p {...CaseStudySectionsTokens.copy}>{section.copy}</p></article>)}</section>
)
