import { aboutContent, localized } from '../../../content'
import type { SiteControls } from '../../types/site'
import { PageMotion } from '../PageMotion/PageMotion'
import { SpaceField } from '../SpaceField'
import { SiteHeader } from './SiteHeader'

export const PageShell = ({ children, ...siteControls }: SiteControls & { children: React.ReactNode }) => (
  <div className="site-page"><SiteHeader {...siteControls} /><SpaceField /><PageMotion>{children}</PageMotion><footer><span>{aboutContent.brand.name} © 2026</span><span>{localized(siteControls.language, 'I build what the work actually needs.', 'أبني ما يحتاجه العمل فعلاً.')}</span></footer></div>
)
