import { localized, sectionDetails, skillGroups } from "../../../content";
import type { SiteControls } from "../../../shared/types/site";
import { DisplayHeading } from "../../../shared/ui/DisplayHeading";
import { PageShell } from "../../../shared/ui/PageShell";
import { SkillGroup } from "./SkillGroup";
import { SkillsPageTokens } from "./SkillsPage.tokens";

export const SkillsPage = (siteControls: SiteControls) => {
  const { language } = siteControls;
  const { capabilities } = sectionDetails;
  return (
    <PageShell {...siteControls}>
      <main {...SkillsPageTokens.root}>
        <header {...SkillsPageTokens.intro}>
          <p>{localized(language, capabilities.eyebrow, capabilities.eyebrowAr)}</p>
          <DisplayHeading as="h1" variant="page">
            {localized(language, capabilities.title, capabilities.titleAr)}
          </DisplayHeading>
          <div {...SkillsPageTokens.summary}>
            <p>{localized(language, capabilities.copy, capabilities.copyAr)}</p>
          </div>
        </header>
        <div {...SkillsPageTokens.services}>
          {capabilities.services.map((service) => (
            <article {...SkillsPageTokens.service} key={service.title.en}>
              <DisplayHeading as="h2" variant="feature">
                {service.title[language]}
              </DisplayHeading>
              <p {...SkillsPageTokens.serviceCopy}>{service.copy[language]}</p>
            </article>
          ))}
        </div>
        <p {...SkillsPageTokens.toolsTitle}>
          {localized(language, "Tools behind the work, for your developers", "الأدوات المستخدمة، لفريقك التقني")}
        </p>
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
