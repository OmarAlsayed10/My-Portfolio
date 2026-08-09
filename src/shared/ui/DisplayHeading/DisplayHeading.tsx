import { createElement } from 'react'
import type { DisplayHeadingProps } from './DisplayHeading.types'
import './DisplayHeading.tokens.css'

export const DisplayHeading = ({ as = 'h2', variant, children, className = '' }: DisplayHeadingProps) => createElement(as, { className: `display-heading ${className}`.trim(), 'data-heading': variant }, children)
