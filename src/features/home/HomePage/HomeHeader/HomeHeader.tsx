import { Link } from 'react-router'
import { aboutContent, localized } from '../../../../content'
import type { SiteControls } from '../../../../shared/types/site'
import { HeaderControls } from '../../../../shared/ui/HeaderControls'
import { MobileMenu } from '../../../../shared/ui/MobileMenu/MobileMenu'
import { HomeHeaderTokens } from './HomeHeader.tokens'

export const HomeHeader = ({ theme, toggleTheme, language, toggleLanguage }: SiteControls) => {
  const navigationLinks = [{ to: '/projects', label: localized(language, 'Projects', 'المشاريع') }, { to: '/skills', label: localized(language, 'Skills', 'المهارات') }, { to: '/about', label: localized(language, 'About', 'عن عمر') }, { to: '/contact', label: localized(language, 'Contact', 'تواصل') }]
  const navigationLabel = localized(language, 'Quick navigation', 'التنقل السريع')
  const controls = <HeaderControls className="mobile-menu-controls" theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />

  return <header {...HomeHeaderTokens.root}>
    <Link {...HomeHeaderTokens.wordmark} to="/">{localized(language, aboutContent.brand.name, aboutContent.brand.nameAr)}</Link>
    <p {...HomeHeaderTokens.hint}>{localized(language, 'Drag', 'اسحب')}<i {...HomeHeaderTokens.hintDivider} />{localized(language, 'Scroll', 'مرّر')}</p>
    <nav {...HomeHeaderTokens.navigation} aria-label={navigationLabel}>{navigationLinks.map((link) => <Link key={link.to} to={link.to} viewTransition>{link.label}</Link>)}{controls}</nav>
    <MobileMenu links={navigationLinks} controls={controls} label={navigationLabel} />
  </header>
}
