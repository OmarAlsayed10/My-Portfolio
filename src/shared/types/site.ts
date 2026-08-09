import type { Language } from '../../content'

export type Theme = 'light' | 'dark'
export type SiteControls = { theme: Theme; toggleTheme: () => void; language: Language; toggleLanguage: () => void }
