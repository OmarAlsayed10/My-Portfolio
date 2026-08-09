import type { ReactNode } from 'react'
import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { projectCategoryLabels, projectStatusLabels, projectVisibilityLabels } from '../../projectCategories'

const Fact = ({ label, children }: { label: string; children: ReactNode }) => <div className="py-6"><dt className="font-mono text-[.56rem] uppercase text-muted">{label}</dt><dd className="mt-3">{children}</dd></div>

export const ProjectFacts = ({ project, language }: { project: Project; language: Language }) => {
  const publishedDate = new Date(project.publishedAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
  return (
    <dl className="grid grid-cols-1 border-y border-line md:grid-cols-[1fr_1fr_1fr_1fr_2fr]">
      <Fact label={localized(language, 'Category', 'التصنيف')}>{projectCategoryLabels[project.category][language]}</Fact>
      <Fact label={localized(language, 'Status', 'الحالة')}><span className={project.status === 'done' ? 'text-accent' : 'text-signal'}>{projectStatusLabels[project.status][language]}</span></Fact>
      <Fact label={localized(language, 'Visibility', 'الظهور')}>{projectVisibilityLabels[project.visibility][language]}</Fact>
      <Fact label={localized(language, 'Published', 'تاريخ النشر')}><time dateTime={project.publishedAt}>{publishedDate}</time></Fact>
      <Fact label={localized(language, 'Technologies', 'التقنيات')}>{project.technologies.join(' · ')}</Fact>
    </dl>
  )
}
