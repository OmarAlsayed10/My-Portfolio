import { localized, skillGroups } from "../../../content";
import type { SiteControls } from "../../../shared/types/site";
import { DisplayHeading } from "../../../shared/ui/DisplayHeading";
import { PageShell } from "../../../shared/ui/PageShell";
import { SkillGroup } from "./SkillGroup";
import { SkillsPageTokens } from "./SkillsPage.tokens";

export const SkillsPage = (siteControls: SiteControls) => {
  const { language } = siteControls;
  return (
    <PageShell {...siteControls}>
      <main {...SkillsPageTokens.root}>
        <header {...SkillsPageTokens.intro}>
          <p>
            {localized(language, "Engineering range", "نطاق الخبرات الهندسية")}
          </p>
          <DisplayHeading as="h1" variant="page">
            {localized(
              language,
              "From map geometry to AI runtimes.",
              "من هندسة الخرائط لأنظمة الذكاء الاصطناعي.",
            )}
          </DisplayHeading>
          <div {...SkillsPageTokens.summary}>
            <p>
              {localized(
                language,
                "Skills earned by shipping enterprise GIS plugins, offline-first clinical software, commerce platforms, bilingual products, and local AI infrastructure.",
                "خبرات اكتسبتها من إطلاق إضافات GIS للمؤسسات، وبرامج عيادات بتشتغل من غير إنترنت، ومنصات تجارة، ومنتجات باللغتين، وبنية محلية للذكاء الاصطناعي.",
              )}
            </p>
          </div>
        </header>
        <div {...SkillsPageTokens.groups}>
          {skillGroups.map((group, groupIndex) => (
            <SkillGroup
              key={group.title}
              group={group}
              groupIndex={groupIndex}
              language={language}
            />
          ))}
        </div>
      </main>
    </PageShell>
  );
};
