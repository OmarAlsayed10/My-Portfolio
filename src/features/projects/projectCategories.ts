import type { Language, ProjectCategory, ProjectStatus } from '../../content'

export const projectCategoryLabels: Record<'All' | ProjectCategory, Record<Language, string>> = {
  All: { en: 'All', ar: 'الكل' },
  'Online Stores': { en: 'Online Stores', ar: 'متاجر إلكترونية' },
  Bots: { en: 'Telegram & Discord Bots', ar: 'بوتات تيليجرام وديسكورد' },
  'Study & Learning': { en: 'Study & Learning', ar: 'التعليم والدراسة' },
  Healthcare: { en: 'Healthcare', ar: 'الرعاية الصحية' },
  'AI Tools': { en: 'AI Tools', ar: 'أدوات الذكاء الاصطناعي' },
  Websites: { en: 'Websites', ar: 'المواقع' },
  'Mobile Apps': { en: 'Mobile Apps', ar: 'تطبيقات الهاتف' },
  'Desktop Apps': { en: 'Desktop Apps', ar: 'تطبيقات الحاسوب' },
  'Browser Extensions': { en: 'Browser Extensions', ar: 'إضافات المتصفح' }
}

export const projectCategories = Object.keys(projectCategoryLabels) as ('All' | ProjectCategory)[]

export const projectCategoryNames = (categories: ProjectCategory[], language: Language) => categories.map((category) => projectCategoryLabels[category][language]).join(' · ')

export const projectStatusLabels: Record<ProjectStatus, Record<Language, string>> = {
  done: { en: 'Live', ar: 'يعمل الآن' },
  'in-progress': { en: 'In progress', ar: 'قيد التنفيذ' }
}
