import { Link } from "react-router";
import { aboutContent, localized } from "../../../content";
import type { SiteControls } from "../../../shared/types/site";
import { DisplayHeading } from "../../../shared/ui/DisplayHeading";
import { PageShell } from "../../../shared/ui/PageShell";
import { AboutPageTokens } from "./AboutPage.tokens";

export const AboutPage = (siteControls: SiteControls) => {
  const { language } = siteControls;
  const details = aboutContent.sections.about;
  return (
    <PageShell {...siteControls}>
      <main {...AboutPageTokens.root}>
        <p>{localized(language, details.eyebrow, details.eyebrowAr)}</p>
        <DisplayHeading as="h1" variant="page">
          {localized(language, details.title, details.titleAr)}
        </DisplayHeading>
        <div {...AboutPageTokens.statement}>
          <p>{localized(language, details.copy, details.copyAr)}</p>
        </div>
        <section {...AboutPageTokens.narrative}>
          {details.story.map((story, index) => (
            <article key={story.title}>
              <span>0{index + 1}</span>
              <div>
                <DisplayHeading variant="feature">
                  {localized(language, story.title, story.titleAr)}
                </DisplayHeading>
                <p>{localized(language, story.copy, story.copyAr)}</p>
              </div>
            </article>
          ))}
        </section>
        <section {...AboutPageTokens.principles}>
          <header>
            <p>{localized(language, "How I work", "كيف أعمل")}</p>
            <DisplayHeading variant="section">
              {localized(
                language,
                details.principlesTitle,
                details.principlesTitleAr,
              )}
            </DisplayHeading>
          </header>
          <div>
            {details.principles.map((principle) => (
              <article key={principle.title}>
                <DisplayHeading as="h3" variant="subsection">
                  {localized(language, principle.title, principle.titleAr)}
                </DisplayHeading>
                <p>{localized(language, principle.copy, principle.copyAr)}</p>
              </article>
            ))}
          </div>
        </section>
        <blockquote {...AboutPageTokens.quote}>
          {localized(language, details.closing, details.closingAr)}
        </blockquote>
        <Link {...AboutPageTokens.next} to="/contact" viewTransition>
          {localized(
            language,
            "Bring me the difficult part",
            "هات أصعب جزء ونبدأ منه",
          )}{" "}
          ↗
        </Link>
      </main>
    </PageShell>
  );
};
