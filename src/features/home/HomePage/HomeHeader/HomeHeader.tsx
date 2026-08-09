import { Link } from 'react-router'
import { aboutContent, localized } from '../../../../content'
import type { SiteControls } from '../../../../shared/types/site'
import { HeaderControls } from '../../../../shared/ui/HeaderControls'
import { MobileMenu } from '../../../../shared/ui/MobileMenu/MobileMenu'

export const HomeHeader = ({ theme, toggleTheme, language, toggleLanguage }: SiteControls) => {
  const navigationLinks = [{ to: '/projects', label: localized(language, 'Projects', 'المشاريع') }, { to: '/skills', label: localized(language, 'Skills', 'المهارات') }, { to: '/about', label: localized(language, 'About', 'عن عمر') }, { to: '/contact', label: localized(language, 'Contact', 'تواصل') }]
  const navigationLabel = localized(language, 'Quick navigation', 'التنقل السريع')
  const controls = <HeaderControls className="header-controls" theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />

  return <header className="masthead">
    <Link to="/" className="wordmark">{localized(language, aboutContent.brand.name, aboutContent.brand.nameAr)}</Link>
    <p>{localized(language, 'Drag', 'اسحب')}<i />{localized(language, 'Scroll', 'مرّر')}</p>
    <nav className="!hidden md:!flex" aria-label={navigationLabel}>{navigationLinks.map((link) => <Link key={link.to} to={link.to} viewTransition>{link.label}</Link>)}{controls}</nav>
    <MobileMenu links={navigationLinks} controls={controls} label={navigationLabel} />
  </header>
}
