import { Link } from 'react-router'
import { localized, projectYear } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'

const externalUrl = (url: string) => /^https?:\/\//i.test(url) ? url : `https://${url}`

const ProjectLinks = ({ project, language }: { project: Project; language: Language }) => {
  if (!project.links.github && !project.links.demo) return null
  return <nav className="project-links" aria-label={localized(language, 'Project links', 'روابط المشروع')}>{project.links.github && <a href={externalUrl(project.links.github)} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.links.demo && <a href={externalUrl(project.links.demo)} target="_blank" rel="noreferrer">{localized(language, 'Website', 'عرض مباشر')} ↗</a>}</nav>
}

export const ProjectHeader = ({ project, language }: { project: Project; language: Language }) => (
  <><Link className="inline-flex gap-3 text-[.66rem] text-muted" to="/projects" viewTransition>← {localized(language, 'All projects', 'كل المشاريع')}</Link><header className="mt-20"><p>{project.discipline[language]} · <time dateTime={project.publishedAt}>{projectYear(project)}</time></p><DisplayHeading as="h1" variant="page" className="mt-8">{project.name}</DisplayHeading><div className="ms-auto mt-12 w-full max-w-3xl text-muted leading-7"><p>{project.description[language]}</p></div><ProjectLinks project={project} language={language} /></header></>
)
