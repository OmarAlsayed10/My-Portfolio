import { useState } from "react";
import { localized, projects, whatsappLink } from "../../../content";
import type { ProjectCategory } from "../../../content";
import type { SiteControls } from "../../../shared/types/site";
import { DisplayHeading } from "../../../shared/ui/DisplayHeading";
import { PageShell } from "../../../shared/ui/PageShell";
import { Promises } from "../../../shared/ui/Promises";
import { projectCategories, projectCategoryLabels } from "../projectCategories";
import { AvailableProducts } from "./AvailableProducts";
import { ProjectCard } from "./ProjectCard";
import { ProjectsOverviewPageTokens } from "./ProjectsOverviewPage.tokens";

const startSteps = [
  {
    title: { en: "Tell me what is costing you money", ar: "أخبرني بما يكلفك المال" },
    copy: { en: "Slow orders, manual follow-up, or an idea you want to sell. One message is enough to start.", ar: "طلبات بطيئة، أو متابعة يدوية، أو فكرة تريد بيعها. رسالة واحدة تكفي للبدء." },
  },
  {
    title: { en: "Hear what is worth building", ar: "اعرف ما يستحق البناء" },
    copy: { en: "I tell you honestly what to build first, and what to skip because it will not pay for itself.", ar: "أخبرك بصراحة بما يجب بناؤه أولًا، وما يجب تركه لأنه لن يغطي تكلفته." },
  },
  {
    title: { en: "Try it as it is built", ar: "جربه أثناء بنائه" },
    copy: { en: "You see working parts in stages, so you can change direction early, while changes are still cheap.", ar: "ترى أجزاء تعمل على مراحل، فتغير الاتجاه مبكرًا حين يكون التغيير قليل التكلفة." },
  },
];

export const ProjectsOverviewPage = (siteControls: SiteControls) => {
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const visibleProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(category));
  const { language } = siteControls;
  return (
    <PageShell {...siteControls}>
      <main {...ProjectsOverviewPageTokens.root}>
        <header {...ProjectsOverviewPageTokens.intro}>
          <p>{localized(language, "Our work", "أعمالنا")}</p>
          <DisplayHeading as="h1" variant="page">
            {localized(
              language,
              "Products that earn money or save it.",
              "منتجات تحقق دخلًا أو توفر المال.",
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
        <Promises language={language} />
        <section {...ProjectsOverviewPageTokens.start}>
          <DisplayHeading as="h2" variant="section">
            {localized(language, "Want something like this for your business?", "هل تريد شيئًا مثل هذا لعملك؟")}
          </DisplayHeading>
          <div {...ProjectsOverviewPageTokens.startSteps}>
            {startSteps.map((step, stepIndex) => (
              <article {...ProjectsOverviewPageTokens.startStep} key={step.title.en}>
                <span>{stepIndex + 1}</span>
                <h3>{step.title[language]}</h3>
                <p>{step.copy[language]}</p>
              </article>
            ))}
          </div>
          <a {...ProjectsOverviewPageTokens.startAction} href={whatsappLink} target="_blank" rel="noreferrer">
            {localized(language, "Talk to me on WhatsApp", "تحدث معي على واتساب")} ↗
          </a>
        </section>
      </main>
    </PageShell>
  );
};
