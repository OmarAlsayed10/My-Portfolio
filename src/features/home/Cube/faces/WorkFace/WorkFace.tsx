import { Link } from 'react-router'
import { aboutContent, localized, projectYear } from '../../../../../content'
import type { Language } from '../../../../../content'
import { DisplayHeading } from '../../../../../shared/ui/DisplayHeading'
import { selectedProjects } from '../../Cube.constants'
import { SceneNumber } from '../SceneNumber'
import { WorkFaceTokens } from './WorkFace.tokens'

const ProjectIdentity = ({ projectIndex, projectName, discipline, year }: { projectIndex: number; projectName: string; discipline: string; year: string }) => (
  <><span>0{projectIndex + 1}</span><strong>{projectName}</strong><small>{discipline} · {year}</small></>
)

export const WorkFace = ({ language }: { language: Language }) => (
  <><SceneNumber index={1} /><p {...WorkFaceTokens.eyebrow}>{localized(language, aboutContent.work.eyebrow, aboutContent.work.eyebrowAr)}</p><DisplayHeading variant="cube">{localized(language, aboutContent.work.title, aboutContent.work.titleAr)}</DisplayHeading><div {...WorkFaceTokens.stack} aria-hidden="true">{selectedProjects.map((project, projectIndex) => <div {...WorkFaceTokens.row} key={project.slug}><ProjectIdentity projectIndex={projectIndex} projectName={project.name} discipline={project.discipline[language]} year={projectYear(project)} /></div>)}</div></>
)

export const WorkActions = ({ language, isVisible }: { language: Language; isVisible: boolean }) => (
  <div className={`${WorkFaceTokens.actions.className} ${isVisible ? '' : WorkFaceTokens.hiddenActions.className}`} aria-label={localized(language, 'Selected projects', 'المشاريع المختارة')}>{selectedProjects.map((project, projectIndex) => <Link {...WorkFaceTokens.action} className={`group ${WorkFaceTokens.action.className}`} key={project.slug} to={`/projects/${project.slug}`} viewTransition><ProjectIdentity projectIndex={projectIndex} projectName={project.name} discipline={project.discipline[language]} year={projectYear(project)} /><b {...WorkFaceTokens.more}>{localized(language, 'Show more', 'المزيد')} →</b></Link>)}</div>
)
