import { localized } from '../../../../content'
import type { Language, SkillGroup as SkillGroupContent } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { skillIconFor } from '../SkillsPage.constants'
import { SkillGroupTokens } from './SkillGroup.tokens'

export const SkillGroup = ({ group, groupIndex, language }: { group: SkillGroupContent; groupIndex: number; language: Language }) => (
  <section {...SkillGroupTokens.root}><header {...SkillGroupTokens.header}><span {...SkillGroupTokens.index}>0{groupIndex + 1}</span><DisplayHeading variant="subsection">{localized(language, group.title, group.titleAr)}</DisplayHeading></header><div {...SkillGroupTokens.skills}>{group.skills.map((skill) => { const SkillIcon = skillIconFor(skill.icon); return <article {...SkillGroupTokens.skill} key={skill.name}><SkillIcon {...SkillGroupTokens.icon} aria-hidden="true" strokeWidth={1.6} /><span {...SkillGroupTokens.name}>{localized(language, skill.name, skill.nameAr ?? skill.name)}</span></article> })}</div></section>
)
