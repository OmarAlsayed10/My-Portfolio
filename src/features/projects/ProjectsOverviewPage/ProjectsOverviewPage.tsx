import { useState } from 'react'
import { localized, projects } from '../../../content'
import type { ProjectCategory } from '../../../content'
import type { SiteControls } from '../../../shared/types/site'
import { DisplayHeading } from '../../../shared/ui/DisplayHeading'
import { PageShell } from '../../../shared/ui/PageShell'
import { projectCategories, projectCategoryLabels } from '../projectCategories'
import { ProjectCard } from './ProjectCard'

export const ProjectsOverviewPage = (siteControls: SiteControls) => {
  const [category, setCategory] = useState<'All' | ProjectCategory>('All')
  const visibleProjects = category === 'All' ? projects : projects.filter((project) => project.category === category)
  const { language } = siteControls
  return (
    <PageShell {...siteControls}><main className="index-page"><header className="page-intro"><p>{localized(language, 'Project orbit', 'مدار المشاريع')}</p><DisplayHeading as="h1" variant="page">{localized(language, 'Work, grouped by the surface it changed.', 'أعمال مصنفة حسب الواجهة التي غيّرتها.')}</DisplayHeading></header><nav className="category-filter" aria-label={localized(language, 'Project categories', 'تصنيفات المشاريع')}>{projectCategories.map((name) => <button key={name} className={category === name ? 'active' : ''} onClick={() => setCategory(name)}>{projectCategoryLabels[name][language]}</button>)}</nav><div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} language={language} />)}</div></main></PageShell>
  )
}
