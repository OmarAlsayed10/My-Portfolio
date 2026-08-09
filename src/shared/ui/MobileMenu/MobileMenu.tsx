import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { MobileMenuTokens } from './MobileMenu.tokens'

type MobileMenuLink = { to: string; label: string }

type MobileMenuProps = {
  links: MobileMenuLink[]
  controls: React.ReactNode
  label: string
}

export const MobileMenu = ({ links, controls, label }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return <div {...MobileMenuTokens.root}><button {...MobileMenuTokens.toggle} type="button" aria-label={label} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X size={18} /> : <Menu size={18} />}</button>{isOpen && <div {...MobileMenuTokens.panel}><nav {...MobileMenuTokens.navigation} aria-label={label}>{links.map((link) => <Link {...MobileMenuTokens.link} key={link.to} to={link.to} viewTransition onClick={() => setIsOpen(false)}>{link.label}</Link>)}</nav><div {...MobileMenuTokens.controls} onClick={(event) => { if ((event.target as HTMLElement).closest('.language-control')) setIsOpen(false) }}>{controls}</div></div>}</div>
}
