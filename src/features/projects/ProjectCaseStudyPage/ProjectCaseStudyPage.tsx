import { Link, Navigate, useParams } from "react-router";
import { localized, projectBySlug } from "../../../content";
import type { SiteControls } from "../../../shared/types/site";
import { PageShell } from "../../../shared/ui/PageShell";
import { CaseStudySections } from "./CaseStudySections";
import { ProjectFacts } from "./ProjectFacts";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectCaseStudyPageTokens } from "./ProjectCaseStudyPage.tokens";

export const ProjectCaseStudyPage = (siteControls: SiteControls) => {
  const { slug = "" } = useParams();
  const project = projectBySlug(slug);
  if (!project) return <Navigate to="/projects" replace />;

  const { language } = siteControls;
  return (
    <PageShell {...siteControls}>
      <main {...ProjectCaseStudyPageTokens.root}>
        <ProjectHeader project={project} language={language} />
        <ProjectFacts project={project} language={language} />
        <ProjectMedia project={project} language={language} />
        <CaseStudySections project={project} language={language} />
        <Link {...ProjectCaseStudyPageTokens.next} to="/contact" viewTransition>
          <span>{localized(language, "Need something similar?", "محتاج منتج قريب من ده؟")}</span>
          <strong {...ProjectCaseStudyPageTokens.nextAction}>{localized(language, "Contact me", "كلّمني")} ↗</strong>
        </Link>
      </main>
    </PageShell>
  );
};
