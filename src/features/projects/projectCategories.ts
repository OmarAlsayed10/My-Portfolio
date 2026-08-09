import type { Language, ProjectCategory, ProjectStatus, ProjectVisibility } from '../../content'

export const projectCategoryLabels: Record<'All' | ProjectCategory, Record<Language, string>> = {
  All: { en: 'All', ar: 'الكل' },
  'AI & Career': { en: 'AI & Career', ar: 'الذكاء والمسار المهني' },
  'Health Tech': { en: 'Health Tech', ar: 'التقنية الصحية' },
  Commerce: { en: 'Commerce', ar: 'التجارة' },
  'Developer Tools': { en: 'Developer Tools', ar: 'أدوات المطورين' },
  Websites: { en: 'Websites', ar: 'المواقع' }
}

export const projectCategories = Object.keys(projectCategoryLabels) as ('All' | ProjectCategory)[]

export const projectStatusLabels: Record<ProjectStatus, Record<Language, string>> = {
  done: { en: 'Done', ar: 'مكتمل' },
  'in-progress': { en: 'In progress', ar: 'قيد التنفيذ' }
}

export const projectVisibilityLabels: Record<ProjectVisibility, Record<Language, string>> = {
  public: { en: 'Public', ar: 'عام' },
  private: { en: 'Private', ar: 'خاص' }
}
