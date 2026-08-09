import { localized } from '../../../content'
import type { SiteControls } from '../../types/site'

export const HeaderControls = ({ theme, toggleTheme, language, toggleLanguage, className }: SiteControls & { className?: string }) => (
  <div className={className}><button className="language-toggle" onClick={toggleLanguage} aria-label={localized(language, 'Switch to Arabic', 'التبديل إلى الإنجليزية')}>{localized(language, 'العربية', 'English')}</button><button className="theme-toggle" onClick={toggleTheme} aria-label={localized(language, `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`, `التبديل إلى الوضع ${theme === 'light' ? 'الداكن' : 'الفاتح'}`)}><i />{localized(language, theme === 'light' ? 'Dark' : 'Light', theme === 'light' ? 'داكن' : 'فاتح')}</button></div>
)
