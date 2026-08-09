import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { projectCategoryLabels } from '../../projectCategories'

export const ProjectMedia = ({ project, language }: { project: Project; language: Language }) => project.images.length > 0 ? (
  <section className="project-gallery" aria-label={localized(language, `${project.name} project views`, `صور مشروع ${project.name}`)}>{project.images.map((image, imageIndex) => <figure key={image}><img src={image} alt={localized(language, `${project.name} project view ${imageIndex + 1}`, `صورة ${imageIndex + 1} من مشروع ${project.name}`)} loading="lazy" /><figcaption><span>0{imageIndex + 1}</span><span>{localized(language, 'Project view', 'واجهة المشروع')}</span></figcaption></figure>)}</section>
) : <div className="project-visual" data-category={project.category}><span>{projectCategoryLabels[project.category][language]}</span><i /><i /><i /></div>
