import { useEffect, useState } from 'react'
import type { Language } from '../../content'
import type { SiteControls, Theme } from '../../shared/types/site'

export const useSitePreferences = (): SiteControls => {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('omar-theme') === 'light' ? 'light' : 'dark')
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('omar-language') === 'ar' ? 'ar' : 'en')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('omar-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dataset.language = language
    localStorage.setItem('omar-language', language)
  }, [language])

  return {
    theme,
    language,
    toggleTheme: () => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light'),
    toggleLanguage: () => setLanguage((currentLanguage) => currentLanguage === 'en' ? 'ar' : 'en')
  }
}
