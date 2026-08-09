import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

type MobileMenuLink = { to: string; label: string }

type MobileMenuProps = {
  links: MobileMenuLink[]
  controls: React.ReactNode
  label: string
}

export const MobileMenu = ({ links, controls, label }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return <div className="md:hidden"><button className="relative z-50 grid size-10 place-items-center border border-line bg-surface/90 text-foreground shadow-sm backdrop-blur" type="button" aria-label={label} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X size={18} /> : <Menu size={18} />}</button>{isOpen && <div className="fixed inset-x-3 top-[4.5rem] z-40 border border-line bg-surface/95 p-4 shadow-2xl shadow-black/20 backdrop-blur"><nav className="!grid !justify-self-stretch gap-1" aria-label={label}>{links.map((link) => <Link className="border-b border-line px-1 py-3 text-sm font-semibold" key={link.to} to={link.to} viewTransition onClick={() => setIsOpen(false)}>{link.label}</Link>)}</nav><div className="mt-4 border-t border-line pt-4 [&_.header-controls]:w-full [&_.header-controls]:justify-between">{controls}</div></div>}</div>
}
