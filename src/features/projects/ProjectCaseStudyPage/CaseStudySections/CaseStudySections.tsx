import type { ReactNode } from 'react'
import { localized } from '../../../../content'
import type { Language, Project } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { Promises } from '../../../../shared/ui/Promises'
import { CaseStudySectionsTokens as tokens } from './CaseStudySections.tokens'

type SectionProps = { project: Project; language: Language }

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section {...tokens.section}><DisplayHeading variant="feature">{title}</DisplayHeading><div>{children}</div></section>
)

const ProjectResults = ({ project, language }: SectionProps) => project.results?.length ? (
  <dl {...tokens.results} aria-label={localized(language, 'Numbers so far', 'الأرقام حتى الآن')}>{project.results.map((result) => <div {...tokens.result} key={result.label.en}><dd {...tokens.resultValue}>{result.value}</dd><dt {...tokens.resultLabel}>{result.label[language]}</dt></div>)}</dl>
) : null

const BeforeAfter = ({ project, language }: SectionProps) => (
  <Section title={localized(language, 'Before and after', 'قبل وبعد')}>
    <div {...tokens.compare}>{project.beforeAfter.map((row) => <div {...tokens.compareRow} key={row.before.en}><p {...tokens.compareBefore}><small {...tokens.compareLabel}>{localized(language, 'Before', 'قبل')}</small>{row.before[language]}</p><p {...tokens.compareAfter}><small {...tokens.compareLabel}>{localized(language, 'After', 'بعد')}</small>{row.after[language]}</p></div>)}</div>
  </Section>
)

const ListSection = ({ title, items }: { title: string; items: { key: string; heading: string; copy: string }[] }) => (
  <Section title={title}><div {...tokens.list}>{items.map((item, itemIndex) => <article {...tokens.listItem} key={item.key}><span {...tokens.index}>{String(itemIndex + 1).padStart(2, '0')}</span><div><h3 {...tokens.listHeading}>{item.heading}</h3><p {...tokens.copy}>{item.copy}</p></div></article>)}</div></Section>
)

export const CaseStudySections = ({ project, language }: SectionProps) => (
  <>
    <ProjectResults project={project} language={language} />
    <Section title={localized(language, 'The story', 'القصة')}><div {...tokens.story}>{project.story[language].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Section>
    <BeforeAfter project={project} language={language} />
    <ListSection title={localized(language, 'The work, and why', 'العمل وأسبابه')} items={project.work.map((item) => ({ key: item.title.en, heading: item.title[language], copy: item.copy[language] }))} />
    <ListSection title={localized(language, 'What each person gets', 'ما يحصل عليه كل طرف')} items={project.roles.map((item) => ({ key: item.who.en, heading: item.who[language], copy: item.gets[language] }))} />
    <Section title={localized(language, 'What is included', 'ما يشمله المشروع')}><p {...tokens.lead}>{project.scope[language]}</p></Section>
    {project.business && <Section title={localized(language, 'How it earns or saves money', 'كيف يحقق دخلًا أو يوفر المال')}><p {...tokens.lead}>{project.business[language]}</p></Section>}
    <Section title={localized(language, 'Why you can trust this', 'لماذا يمكنك الوثوق بهذا العمل')}><ul {...tokens.trustList}>{project.trust.map((point) => <li {...tokens.trustItem} key={point.en}>{point[language]}</li>)}</ul></Section>
    <Section title={localized(language, 'This suits you if', 'يناسبك هذا إذا')}><p {...tokens.fit}>{project.fit[language]}</p></Section>
    <Promises language={language} />
    <details {...tokens.details}><summary {...tokens.summary}>{localized(language, 'Technical details, for your developers', 'التفاصيل التقنية لفريقك')}</summary><p {...tokens.copy}>{project.approach[language]}</p><p {...tokens.technologies}>{project.technologies.join(' · ')}</p>{project.links.github && <a {...tokens.github} href={project.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}</details>
  </>
)
