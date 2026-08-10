import { useState } from "react";
import { localized, projects } from "../../../content";
import type { ProjectCategory } from "../../../content";
import type { SiteControls } from "../../../shared/types/site";
import { DisplayHeading } from "../../../shared/ui/DisplayHeading";
import { PageShell } from "../../../shared/ui/PageShell";
import { projectCategories, projectCategoryLabels } from "../projectCategories";
import { AvailableProducts } from "./AvailableProducts";
import { ProjectCard } from "./ProjectCard";
import { ProjectsOverviewPageTokens } from "./ProjectsOverviewPage.tokens";

export const ProjectsOverviewPage = (siteControls: SiteControls) => {
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const visibleProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);
  const { language } = siteControls;
  return (
    <PageShell {...siteControls}>
      <main {...ProjectsOverviewPageTokens.root}>
        <header {...ProjectsOverviewPageTokens.intro}>
          <p>{localized(language, "Project orbit", "مدار المشاريع")}</p>
          <DisplayHeading as="h1" variant="page">
            {localized(
              language,
              "Work, grouped by the surface it changed.",
              "شغل متصنّف حسب الواجهة اللي غيّرها.",
            )}
          </DisplayHeading>
        </header>
        <AvailableProducts language={language} />
        <nav
          {...ProjectsOverviewPageTokens.filter}
          aria-label={localized(
            language,
            "Project categories",
            "تصنيفات المشاريع",
          )}
        >
          {projectCategories.map((name) => (
            <button
              className={`${ProjectsOverviewPageTokens.filterButton.className} ${category === name ? ProjectsOverviewPageTokens.activeFilter.className : ""}`}
              key={name}
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
            >
              {projectCategoryLabels[name][language]}
            </button>
          ))}
        </nav>
        <div {...ProjectsOverviewPageTokens.grid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>
      </main>
    </PageShell>
  );
};
