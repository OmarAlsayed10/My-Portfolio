import aboutJson from './about.json'
import projectsJson from './projects.json'
import questionsJson from './questions.json'
import skillsJson from './skills.json'

export type Language = 'en' | 'ar'
export type SceneName = 'intro' | 'work' | 'capabilities' | 'about' | 'studio' | 'contact'
export type ProjectCategory = 'Online Stores' | 'Bots' | 'Study & Learning' | 'Healthcare' | 'AI Tools' | 'Websites' | 'Mobile Apps' | 'Desktop Apps' | 'Browser Extensions'
export type ProjectStatus = 'done' | 'in-progress'

type BilingualText = { en: string; ar: string }

export type Project = {
  slug: string
  name: string
  categories: ProjectCategory[]
  status: ProjectStatus
  discipline: BilingualText
  description: BilingualText
  scope: BilingualText
  challenge: BilingualText
  approach: BilingualText
  outcome: BilingualText
  business?: BilingualText
  headline: BilingualText
  story: { en: string[]; ar: string[] }
  beforeAfter: { before: BilingualText; after: BilingualText }[]
  work: { title: BilingualText; copy: BilingualText }[]
  roles: { who: BilingualText; gets: BilingualText }[]
  fit: BilingualText
  trust: BilingualText[]
  results?: { value: string; label: BilingualText }[]
  publishedAt: string
  images: string[]
  technologies: string[]
  links: { github: string | null; demo: string | null; download: string | null }
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
export const whatsappLink = aboutJson.brand.links.find((link) => link.label === 'WhatsApp')?.href ?? ''
export const localized =(language: Language, english: string, arabic: string) => language === 'ar' ? arabic : english
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)
export const projectYear = (project: Project) => new Date(project.publishedAt).getUTCFullYear().toString()
