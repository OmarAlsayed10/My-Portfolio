import type { DisplayHeadingVariant } from "./DisplayHeading.types";

export const DisplayHeadingTokens: {
  root: { className: string };
  variants: Record<DisplayHeadingVariant, { className: string }>;
} = {
  root: {
    className:
      "m-0 text-balance font-bold [[data-language=ar]_&]:tracking-[-.025em]",
  },
  variants: {
    page: {
      className:
        "text-[clamp(2.55rem,5vw,5.2rem)] leading-[1.3] tracking-[-.065em] max-[760px]:text-[clamp(2.2rem,9.8vw,3.5rem)] [[data-language=ar]_&]:text-[clamp(2.4rem,4.7vw,4.85rem)] [[data-language=ar]_&]:leading-[1.5] max-[760px]:[[data-language=ar]_&]:text-[clamp(2.05rem,9vw,3.2rem)]",
    },
    cube: {
      className:
        "text-[clamp(1.85rem,2.7vw,2.85rem)] leading-[1.18] tracking-[-.06em] max-[760px]:text-[clamp(1.58rem,6.7vw,2.18rem)] [[data-language=ar]_&]:text-[clamp(1.7rem,2.5vw,2.6rem)] [[data-language=ar]_&]:leading-[1.4] max-[760px]:[[data-language=ar]_&]:text-[clamp(1.48rem,6.2vw,2rem)]",
    },
    "cube-hero": {
      className:
        "text-[clamp(2.6rem,4vw,4rem)] leading-[1.25] tracking-[-.065em] max-[760px]:text-[clamp(2.1rem,9.7vw,3rem)] [[data-language=ar]_&]:text-[clamp(2.4rem,3.7vw,3.7rem)] [[data-language=ar]_&]:leading-[1.4] max-[760px]:[[data-language=ar]_&]:text-[clamp(1.95rem,9vw,2.75rem)]",
    },
    card: {
      className:
        "text-[clamp(1.45rem,2.5vw,2.7rem)] leading-[1.12] tracking-[-.045em]",
    },
    section: {
      className:
        "text-[clamp(1.85rem,3.7vw,3.85rem)] leading-[1.15] tracking-[-.06em] [[data-language=ar]_&]:text-[clamp(1.7rem,3.4vw,3.55rem)] [[data-language=ar]_&]:leading-[1.4]",
    },
    feature: {
      className:
        "text-[clamp(1.35rem,2.2vw,2.5rem)] leading-[1.25] tracking-[-.045em] [[data-language=ar]_&]:text-[clamp(1.25rem,2vw,2.15rem)] [[data-language=ar]_&]:leading-[1.5]",
    },
    subsection: {
      className:
        "text-[clamp(1rem,1.4vw,1.32rem)] leading-[1.35] tracking-[-.025em] [[data-language=ar]_&]:text-[clamp(.95rem,1.3vw,1.24rem)] [[data-language=ar]_&]:leading-[1.55]",
    },
    statement: {
      className:
        "text-[clamp(1.5rem,2.8vw,3.05rem)] leading-[1.3] tracking-[-.045em] [[data-language=ar]_&]:text-[clamp(1.4rem,2.6vw,2.8rem)] [[data-language=ar]_&]:leading-[1.5]",
    },
  },
};
