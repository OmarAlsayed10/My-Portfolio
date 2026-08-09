import { SiteRoutes } from './SiteRoutes'
import { useSitePreferences } from './hooks/useSitePreferences'

export const App = () => {
  const siteControls = useSitePreferences()
  return <div className="app-shell" data-theme={siteControls.theme} data-language={siteControls.language}><SiteRoutes {...siteControls} /></div>
}
