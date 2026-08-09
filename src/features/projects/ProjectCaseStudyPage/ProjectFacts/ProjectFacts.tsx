import type { ReactNode } from 'react'
import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { projectCategoryLabels, projectStatusLabels, projectVisibilityLabels } from '../../projectCategories'
import { ProjectFactsTokens } from './ProjectFacts.tokens'

const Fact = ({ label, children }: { label: string; children: ReactNode }) => <div {...ProjectFactsTokens.fact}><dt {...ProjectFactsTokens.term}>{label}</dt><dd {...ProjectFactsTokens.description}>{children}</dd></div>

export const ProjectFacts = ({ project, language }: { project: Project; language: Language }) => {
  const publishedDate = new Date(project.publishedAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
  return <dl {...ProjectFactsTokens.root}>
    <Fact label={localized(language, 'Category', 'التصنيف')}>{projectCategoryLabels[project.category][language]}</Fact>
    <Fact label={localized(language, 'Status', 'الحالة')}><span {...(project.status === 'done' ? ProjectFactsTokens.done : ProjectFactsTokens.active)}>{projectStatusLabels[project.status][language]}</span></Fact>
    <Fact label={localized(language, 'Visibility', 'الظهور')}>{projectVisibilityLabels[project.visibility][language]}</Fact>
    <Fact label={localized(language, 'Published', 'تاريخ النشر')}><time dateTime={project.publishedAt}>{publishedDate}</time></Fact>
    <Fact label={localized(language, 'Technologies', 'التقنيات')}>{project.technologies.join(' · ')}</Fact>
  </dl>
}
