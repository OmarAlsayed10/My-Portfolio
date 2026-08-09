import type { DisplayHeadingVariant } from './DisplayHeading.types'

export const DisplayHeadingTokens: { root: { className: string }; variants: Record<DisplayHeadingVariant, { className: string }> } = {
  root: { className: 'm-0 text-balance font-bold [[data-language=ar]_&]:tracking-[-.025em]' },
  variants: {
    page: { className: 'text-[clamp(2.8rem,5.4vw,5.6rem)] leading-[.94] tracking-[-.065em] max-[760px]:text-[clamp(2.4rem,10.5vw,3.8rem)] [[data-language=ar]_&]:leading-[1.16]' },
    cube: { className: 'text-[clamp(2rem,2.9vw,3.05rem)] leading-[.98] tracking-[-.06em] max-[760px]:text-[clamp(1.7rem,7.2vw,2.35rem)] [[data-language=ar]_&]:leading-[1.1]' },
    'cube-hero': { className: 'text-[clamp(2.85rem,4.3vw,4.35rem)] leading-[.96] tracking-[-.065em] max-[760px]:text-[clamp(2.3rem,10.5vw,3.3rem)] [[data-language=ar]_&]:leading-[1.1]' },
    card: { className: 'text-[clamp(1.55rem,2.7vw,2.9rem)] leading-none tracking-[-.045em]' },
    section: { className: 'text-[clamp(2rem,4vw,4.2rem)] leading-[.98] tracking-[-.06em] [[data-language=ar]_&]:leading-[1.2]' },
    feature: { className: 'text-[clamp(1.45rem,2.4vw,2.7rem)] leading-[1.06] tracking-[-.045em] [[data-language=ar]_&]:text-[clamp(1.4rem,2.2vw,2.45rem)] [[data-language=ar]_&]:leading-[1.3]' },
    subsection: { className: 'text-[clamp(1.05rem,1.5vw,1.4rem)] leading-[1.18] tracking-[-.025em] [[data-language=ar]_&]:leading-[1.35]' },
    statement: { className: 'text-[clamp(1.6rem,3vw,3.3rem)] leading-[1.14] tracking-[-.045em] [[data-language=ar]_&]:leading-[1.3]' }
  }
}
