import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { projectCategoryLabels } from '../../projectCategories'
import { ProjectMediaTokens } from './ProjectMedia.tokens'

export const ProjectMedia = ({ project, language }: { project: Project; language: Language }) => project.images.length > 0 ? (
  <section {...ProjectMediaTokens.gallery} aria-label={localized(language, `${project.name} project views`, `صور مشروع ${project.name}`)}>{project.images.map((image, imageIndex) => <figure {...ProjectMediaTokens.figure} key={image}><img {...ProjectMediaTokens.image} src={image} alt={localized(language, `${project.name} project view ${imageIndex + 1}`, `صورة ${imageIndex + 1} من مشروع ${project.name}`)} loading="lazy" /><figcaption {...ProjectMediaTokens.caption}><span {...ProjectMediaTokens.index}>0{imageIndex + 1}</span><span>{localized(language, 'Project view', 'واجهة المشروع')}</span></figcaption></figure>)}</section>
) : <div {...ProjectMediaTokens.fallback} data-category={project.category}><span>{projectCategoryLabels[project.category][language]}</span><i /><i /><i /></div>
