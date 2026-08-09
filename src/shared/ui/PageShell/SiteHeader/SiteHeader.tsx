import { Link } from 'react-router'
import { aboutContent, localized } from '../../../../content'
import type { SiteControls } from '../../../types/site'
import { HeaderControls } from '../../HeaderControls'

export const SiteHeader = ({ theme, toggleTheme, language, toggleLanguage }: SiteControls) => (
  <header className="page-header">
    <Link className="wordmark" to="/" viewTransition>{localized(language, aboutContent.brand.name, aboutContent.brand.nameAr)}</Link>
    <nav aria-label={localized(language, 'Primary navigation', 'التنقل الرئيسي')}><Link to="/projects" viewTransition>{localized(language, 'Projects', 'المشاريع')}</Link><Link to="/skills" viewTransition>{localized(language, 'Skills', 'المهارات')}</Link><Link to="/about" viewTransition>{localized(language, 'About', 'عن عمر')}</Link><Link to="/contact" viewTransition>{localized(language, 'Contact', 'تواصل')}</Link></nav>
    <HeaderControls className="header-controls" theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
  </header>
)
