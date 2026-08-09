import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { AboutPage } from '../../features/about/AboutPage'
import { ContactPage } from '../../features/contact/ContactPage'
import { HomePage } from '../../features/home/HomePage'
import { MethodPage } from '../../features/method/MethodPage'
import { ProjectCaseStudyPage } from '../../features/projects/ProjectCaseStudyPage'
import { ProjectsOverviewPage } from '../../features/projects/ProjectsOverviewPage'
import { SkillsPage } from '../../features/skills/SkillsPage'
import type { SiteControls } from '../../shared/types/site'

const ScrollReset = () => {
  const { pathname } = useLocation()
  useEffect(() => { scrollTo(0, 0) }, [pathname])
  return null
}

export const SiteRoutes = (siteControls: SiteControls) => (
  <><ScrollReset /><Routes>
    <Route path="/" element={<HomePage {...siteControls} />} />
    <Route path="/projects" element={<ProjectsOverviewPage {...siteControls} />} />
    <Route path="/projects/:slug" element={<ProjectCaseStudyPage {...siteControls} />} />
    <Route path="/skills" element={<SkillsPage {...siteControls} />} />
    <Route path="/capabilities" element={<SkillsPage {...siteControls} />} />
    <Route path="/about" element={<AboutPage {...siteControls} />} />
    <Route path="/method" element={<MethodPage {...siteControls} />} />
    <Route path="/contact" element={<ContactPage {...siteControls} />} />
    <Route path="*" element={<ProjectsOverviewPage {...siteControls} />} />
  </Routes></>
)
