import { localized } from '../../../content'
import { HeaderControlsTokens } from './HeaderControls.tokens'
import type { SiteControls } from '../../types/site'

export const HeaderControls = ({ theme, toggleTheme, language, toggleLanguage, className }: SiteControls & { className?: string }) => (
  <div {...HeaderControlsTokens.root} className={`${HeaderControlsTokens.root.className} ${className ?? ''}`.trim()}><button {...HeaderControlsTokens.language} onClick={toggleLanguage} aria-label={localized(language, 'Switch to Arabic', 'التبديل إلى الإنجليزية')}>{localized(language, 'العربية', 'English')}</button><button {...HeaderControlsTokens.theme} onClick={toggleTheme} aria-label={localized(language, `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`, `التبديل إلى الوضع ${theme === 'light' ? 'داكن' : 'الفاتح'}`)}><i {...HeaderControlsTokens.themeMark} />{localized(language, theme === 'light' ? 'Dark' : 'Light', theme === 'light' ? 'داكن' : 'فاتح')}</button></div>
)
