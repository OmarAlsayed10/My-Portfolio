import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { projectCategoryLabels } from '../../projectCategories'

export const ProjectMedia = ({ project, language }: { project: Project; language: Language }) => project.images.length > 0 ? (
  <div className="project-gallery">{project.images.map((image, imageIndex) => <img key={image} src={image} alt={localized(language, `${project.name} project view ${imageIndex + 1}`, `صورة ${imageIndex + 1} من مشروع ${project.name}`)} loading="lazy" />)}</div>
) : <div className="project-visual" data-category={project.category}><span>{projectCategoryLabels[project.category][language]}</span><i /><i /><i /></div>
