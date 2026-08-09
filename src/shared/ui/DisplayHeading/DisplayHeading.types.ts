import type { ReactNode } from 'react'

export type DisplayHeadingVariant = 'page' | 'cube' | 'cube-hero' | 'card' | 'section' | 'feature' | 'subsection' | 'statement'
export type DisplayHeadingProps = { as?: 'h1' | 'h2' | 'h3'; variant: DisplayHeadingVariant; children: ReactNode; className?: string }
