import { Link } from 'react-router'
import { localized, projectYear, whatsappLink } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { ProjectHeaderTokens } from './ProjectHeader.tokens'

const externalUrl = (url: string) => /^https?:\/\//i.test(url) ? url : `https://${url}`

const ProjectLinks = ({ project, language }: { project: Project; language: Language }) => {
  return <nav {...ProjectHeaderTokens.links} aria-label={localized(language, 'Project links', 'روابط المشروع')}>{project.links.download && <a {...ProjectHeaderTokens.download} href={project.links.download}>{localized(language, 'Download for Android (95 MB)', 'نزّل التطبيق لأندرويد (95 ميجابايت)')} ↓</a>}{project.links.demo && <a {...ProjectHeaderTokens.link} href={externalUrl(project.links.demo)} target="_blank" rel="noreferrer">{localized(language, 'Visit website', 'زيارة الموقع')} ↗</a>}<a {...ProjectHeaderTokens.download} href={whatsappLink} target="_blank" rel="noreferrer">{localized(language, 'I want something like this', 'أريد شيئًا مثل هذا')} ↗</a></nav>
}

export const ProjectHeader = ({ project, language }: { project: Project; language: Language }) => (
  <><Link {...ProjectHeaderTokens.back} to="/projects" viewTransition>← {localized(language, 'All projects', 'كل المشاريع')}</Link><header {...ProjectHeaderTokens.root}><p>{project.discipline[language]} · <time dateTime={project.publishedAt}>{projectYear(project)}</time></p><DisplayHeading as="h1" variant="page" className={ProjectHeaderTokens.heading.className}>{project.name}</DisplayHeading><p {...ProjectHeaderTokens.headline}>{project.headline[language]}</p><div {...ProjectHeaderTokens.description}><p>{project.description[language]}</p></div><ProjectLinks project={project} language={language} /></header></>
)
