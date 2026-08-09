import type { ReactNode } from 'react'
import { scenes } from '../../../../../content'
import { cubeFaceClassNames } from '../../Cube.constants'

export const CubeFace = ({ children, index, activeIndex }: { children: ReactNode; index: number; activeIndex: number }) => (
  <section className={`cube-face ${cubeFaceClassNames[index]}`} aria-hidden={index !== activeIndex} data-face={scenes[index].name}>
    <div className="face-glass" />
    <div className="face-content">{children}</div>
  </section>
)
