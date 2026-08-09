import { Link } from 'react-router'
import { aboutContent, localized } from '../../../../content'
import type { SiteControls } from '../../../types/site'
import { HeaderControls } from '../../HeaderControls'
import { MobileMenu } from '../../MobileMenu/MobileMenu'

export const SiteHeader = ({ theme, toggleTheme, language, toggleLanguage }: SiteControls) => {
  const navigationLinks = [{ to: '/projects', label: localized(language, 'Projects', 'المشاريع') }, { to: '/skills', label: localized(language, 'Skills', 'المهارات') }, { to: '/about', label: localized(language, 'About', 'عن عمر') }, { to: '/contact', label: localized(language, 'Contact', 'تواصل') }]
  const navigationLabel = localized(language, 'Primary navigation', 'التنقل الرئيسي')
  const controls = <HeaderControls className="header-controls" theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />

  return <header className="page-header">
    <Link className="wordmark" to="/" viewTransition>{localized(language, aboutContent.brand.name, aboutContent.brand.nameAr)}</Link>
    <nav aria-label={navigationLabel}>{navigationLinks.map((link) => <Link key={link.to} to={link.to} viewTransition>{link.label}</Link>)}</nav>
    <div className="hidden md:block">{controls}</div>
    <MobileMenu links={navigationLinks} controls={controls} label={navigationLabel} />
  </header>
}
