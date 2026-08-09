export const ProjectMediaTokens = {
  gallery: { className: 'project-gallery mt-24 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-color:var(--blue)_var(--line)] max-[760px]:mt-16' },
  figure: { className: 'm-0 flex-[0_0_min(88%,68rem)] snap-start snap-always border border-line bg-surface-soft max-[760px]:flex-basis-full' },
  image: { className: 'block h-[min(52vw,42rem)] w-full object-contain object-top max-[760px]:h-[min(130vw,42rem)]' },
  caption: { className: 'flex justify-between gap-4 border-t border-line px-4 py-3.5 font-mono text-[.56rem] uppercase text-muted' },
  index: { className: 'text-accent' },
  fallback: { className: 'project-visual relative mt-24 h-[min(62vw,46rem)] overflow-hidden border border-line bg-surface-soft max-[760px]:mt-16 max-[760px]:h-[75svh] [&>span]:absolute [&>span]:bottom-[7%] [&>span]:left-[6%] [&>span]:z-2 [&>span]:text-[clamp(4rem,12vw,11rem)] [&>span]:font-extrabold [&>span]:tracking-[-.08em] max-[760px]:[&>span]:text-[18vw] [&>i]:absolute [&>i]:size-[9px] [&>i]:rounded-full [&>i]:bg-foreground [&>i:nth-of-type(1)]:left-[29%] [&>i:nth-of-type(1)]:top-[18%] [&>i:nth-of-type(2)]:right-[17%] [&>i:nth-of-type(2)]:top-[58%] [&>i:nth-of-type(2)]:bg-signal [&>i:nth-of-type(3)]:bottom-[13%] [&>i:nth-of-type(3)]:left-[52%] [&>i:nth-of-type(3)]:bg-accent' }
}
