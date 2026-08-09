import { localized } from '../../../../content'
import type { Language, SkillGroup as SkillGroupContent } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { skillIconFor } from '../SkillsPage.constants'

export const SkillGroup = ({ group, groupIndex, language }: { group: SkillGroupContent; groupIndex: number; language: Language }) => (
  <section><header><span>0{groupIndex + 1}</span><DisplayHeading variant="subsection">{localized(language, group.title, group.titleAr)}</DisplayHeading></header><div>{group.skills.map((skill) => { const SkillIcon = skillIconFor(skill.icon); return <article key={skill.name}><SkillIcon aria-hidden="true" strokeWidth={1.6} /><span>{localized(language, skill.name, skill.nameAr ?? skill.name)}</span></article> })}</div></section>
)
