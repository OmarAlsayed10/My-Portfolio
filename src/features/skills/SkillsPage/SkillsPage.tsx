import { localized, skillGroups } from '../../../content'
import type { SiteControls } from '../../../shared/types/site'
import { DisplayHeading } from '../../../shared/ui/DisplayHeading'
import { PageShell } from '../../../shared/ui/PageShell'
import { SkillGroup } from './SkillGroup'

export const SkillsPage = (siteControls: SiteControls) => {
  const { language } = siteControls
  return (
    <PageShell {...siteControls}>
      <main className="skills-page">
        <header className="page-intro">
          <p>{localized(language, 'Engineering range', 'نطاق الخبرات الهندسية')}</p>
          <DisplayHeading as="h1" variant="page">{localized(language, 'From map geometry to AI runtimes.', 'من هندسة الخرائط إلى أنظمة الذكاء الاصطناعي.')}</DisplayHeading>
          <div className="skills-intro"><p>{localized(language, 'Skills earned by shipping enterprise GIS plugins, offline-first clinical software, commerce platforms, bilingual products, and local AI infrastructure.', 'خبرات اكتسبناها من إطلاق إضافات GIS للمؤسسات وبرمجيات عيادات تعمل دون اتصال ومنصات تجارة ومنتجات ثنائية اللغة وبنية محلية للذكاء الاصطناعي.')}</p></div>
        </header>
        <div className="skill-groups">{skillGroups.map((group, groupIndex) => <SkillGroup key={group.title} group={group} groupIndex={groupIndex} language={language} />)}</div>
      </main>
    </PageShell>
  )
}
