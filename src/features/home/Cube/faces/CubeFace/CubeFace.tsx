import type { ReactNode } from 'react'
import { scenes } from '../../../../../content'
import { cubeFaceClassNames } from '../../Cube.constants'
import { CubeFaceTokens } from './CubeFace.tokens'

export const CubeFace = ({ children, index, activeIndex }: { children: ReactNode; index: number; activeIndex: number }) => (
  <section className={`${CubeFaceTokens.root.className} ${cubeFaceClassNames[index]}`} aria-hidden={index !== activeIndex} data-face={scenes[index].name}>
    <div {...CubeFaceTokens.glass} />
    <div {...CubeFaceTokens.content}>{children}</div>
  </section>
)
