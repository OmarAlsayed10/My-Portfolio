import { Navigate, useParams } from "react-router";
import { localized, projectBySlug, whatsappLink } from "../../../content";
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
        <a {...ProjectCaseStudyPageTokens.next} href={whatsappLink} target="_blank" rel="noreferrer">
          <span>{localized(language, `Want something like ${project.name} for your business?`, `هل تريد شيئًا مثل ${project.name} لعملك؟`)}</span>
          <strong {...ProjectCaseStudyPageTokens.nextAction}>{localized(language, "Talk to me on WhatsApp", "تحدث معي على واتساب")} ↗</strong>
        </a>
      </main>
    </PageShell>
  );
};
