import { Link } from 'react-router'
import { localized, projectYear } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { projectStatusLabels, projectVisibilityLabels } from '../../projectCategories'

export const ProjectCard = ({ project, index, language }: { project: Project; index: number; language: Language }) => (
  <Link className="project-card" to={`/projects/${project.slug}`} viewTransition>
    <span className="card-index">0{index + 1}</span><div><div className="mb-2 flex gap-3 font-mono text-[.80rem] uppercase"><span className={project.status === 'done' ? 'text-accent' : 'text-signal'}>{projectStatusLabels[project.status][language]}</span><span className="text-muted">{projectVisibilityLabels[project.visibility][language]}</span></div><p>{project.discipline[language]} · {projectYear(project)}</p><DisplayHeading as="h2" variant="card">{project.name}</DisplayHeading><p>{project.description[language]}</p></div><b>{localized(language, 'View project', 'عرض المشروع')} ↗</b>
  </Link>
)
