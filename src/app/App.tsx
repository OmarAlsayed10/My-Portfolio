import { SiteRoutes } from './SiteRoutes'
import { useSitePreferences } from './hooks/useSitePreferences'
import { AppTokens } from './App.tokens'

export const App = () => {
  const siteControls = useSitePreferences()
  return <div {...AppTokens.root} data-theme={siteControls.theme} data-language={siteControls.language}><SiteRoutes {...siteControls} /></div>
}
