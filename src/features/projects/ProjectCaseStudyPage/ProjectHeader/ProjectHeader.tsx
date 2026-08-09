import { Link } from 'react-router'
import { localized, projectYear } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { ProjectHeaderTokens } from './ProjectHeader.tokens'

const externalUrl = (url: string) => /^https?:\/\//i.test(url) ? url : `https://${url}`

const ProjectLinks = ({ project, language }: { project: Project; language: Language }) => {
  if (!project.links.github && !project.links.demo) return null
  return <nav {...ProjectHeaderTokens.links} aria-label={localized(language, 'Project links', 'روابط المشروع')}>{project.links.github && <a {...ProjectHeaderTokens.link} href={externalUrl(project.links.github)} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.links.demo && <a {...ProjectHeaderTokens.link} href={externalUrl(project.links.demo)} target="_blank" rel="noreferrer">{localized(language, 'Website', 'عرض مباشر')} ↗</a>}</nav>
}

export const ProjectHeader = ({ project, language }: { project: Project; language: Language }) => (
  <><Link {...ProjectHeaderTokens.back} to="/projects" viewTransition>← {localized(language, 'All projects', 'كل المشاريع')}</Link><header {...ProjectHeaderTokens.root}><p>{project.discipline[language]} · <time dateTime={project.publishedAt}>{projectYear(project)}</time></p><DisplayHeading as="h1" variant="page" className={ProjectHeaderTokens.heading.className}>{project.name}</DisplayHeading><div {...ProjectHeaderTokens.description}><p>{project.description[language]}</p></div><ProjectLinks project={project} language={language} /></header></>
)
