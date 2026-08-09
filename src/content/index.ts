import aboutJson from './about.json'
import projectsJson from './projects.json'
import questionsJson from './questions.json'
import skillsJson from './skills.json'

export type Language = 'en' | 'ar'
export type SceneName = 'intro' | 'work' | 'capabilities' | 'about' | 'studio' | 'contact'
export type ProjectCategory = 'AI & Career' | 'Health Tech' | 'Commerce' | 'Developer Tools' | 'Websites'
export type ProjectStatus = 'done' | 'in-progress'
export type ProjectVisibility = 'public' | 'private'

type BilingualText = { en: string; ar: string }

export type Project = {
  slug: string
  name: string
  category: ProjectCategory
  status: ProjectStatus
  visibility: ProjectVisibility
  discipline: BilingualText
  description: BilingualText
  scope: BilingualText
  challenge: BilingualText
  approach: BilingualText
  outcome: BilingualText
  publishedAt: string
  images: string[]
  technologies: string[]
  links: { github: string | null; demo: string | null }
}

export type Question = { question: BilingualText; answer: BilingualText }
export type Skill = { name: string; nameAr?: string; icon: string }
export type SkillGroup = { title: string; titleAr: string; skills: Skill[] }

export const aboutContent = aboutJson
export const projects = projectsJson as Project[]
export const questions = questionsJson as Question[]
export const skillGroups = skillsJson as SkillGroup[]
export const scenes = aboutJson.scenes as { name: SceneName; label: string; labelAr: string }[]
export const sectionDetails = aboutJson.sections
export const localized = (language: Language, english: string, arabic: string) => language === 'ar' ? arabic : english
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)
export const projectYear = (project: Project) => new Date(project.publishedAt).getUTCFullYear().toString()
