import { createElement } from 'react'
import { DisplayHeadingTokens } from './DisplayHeading.tokens'
import type { DisplayHeadingProps } from './DisplayHeading.types'

export const DisplayHeading = ({ as = 'h2', variant, children, className = '' }: DisplayHeadingProps) => createElement(as, { ...DisplayHeadingTokens.root, className: `${DisplayHeadingTokens.root.className} ${DisplayHeadingTokens.variants[variant].className} ${className}`.trim() }, children)
