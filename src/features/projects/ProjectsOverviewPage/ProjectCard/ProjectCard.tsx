import { Link } from 'react-router'
import { localized, projectYear } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { projectStatusLabels, projectVisibilityLabels } from '../../projectCategories'
import { ProjectCardTokens } from './ProjectCard.tokens'

export const ProjectCard = ({ project, index, language }: { project: Project; index: number; language: Language }) => (
  <Link {...ProjectCardTokens.root} to={`/projects/${project.slug}`} viewTransition>
    <span {...ProjectCardTokens.index}>0{index + 1}</span><div><div {...ProjectCardTokens.identity}><span {...(project.status === 'done' ? ProjectCardTokens.done : ProjectCardTokens.active)}>{projectStatusLabels[project.status][language]}</span><span {...ProjectCardTokens.visibility}>{projectVisibilityLabels[project.visibility][language]}</span></div><p {...ProjectCardTokens.discipline}>{project.discipline[language]} · {projectYear(project)}</p><DisplayHeading as="h2" variant="card" className={ProjectCardTokens.heading.className}>{project.name}</DisplayHeading><p {...ProjectCardTokens.description}>{project.description[language]}</p></div><b {...ProjectCardTokens.action}>{localized(language, 'View project', 'عرض المشروع')} ↗</b>
  </Link>
)
