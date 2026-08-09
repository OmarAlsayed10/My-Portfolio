import { Link } from 'react-router'
import { aboutContent, localized } from '../../../../content'
import type { SiteControls } from '../../../../shared/types/site'
import { HeaderControls } from '../../../../shared/ui/HeaderControls'

export const HomeHeader = ({ theme, toggleTheme, language, toggleLanguage }: SiteControls) => (
  <header className="masthead">
    <Link to="/" className="wordmark">{localized(language, aboutContent.brand.name, aboutContent.brand.nameAr)}</Link>
    <p>{localized(language, 'Drag', 'اسحب')}<i />{localized(language, 'Scroll', 'مرّر')}</p>
    <nav aria-label={localized(language, 'Quick navigation', 'التنقل السريع')}><Link to="/projects" viewTransition>{localized(language, 'Projects', 'المشاريع')}</Link><Link to="/contact" viewTransition>{localized(language, 'Contact', 'تواصل')}</Link><HeaderControls className="header-controls" theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} /></nav>
  </header>
)
