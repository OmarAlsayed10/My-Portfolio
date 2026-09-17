export const AvailableProductsTokens = {
  root: { className: 'mt-28 border-y border-line py-12 max-[760px]:mt-20 max-[760px]:py-9' },
  header: { className: 'grid grid-cols-[.65fr_1.35fr] gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-5' },
  eyebrow: { className: 'font-mono text-[.62rem] uppercase text-accent' },
  introduction: { className: 'max-w-3xl [&>p]:mt-5 [&>p]:leading-[1.8] [&>p]:text-muted' },
  grid: { className: 'mt-12 grid grid-cols-3 border border-line max-[900px]:grid-cols-1' },
  card: { className: 'group relative flex min-h-80 cursor-pointer flex-col border-e border-line p-7 transition-[background,transform] duration-300 last:border-e-0 hover:-translate-y-0.5 focus-within:-translate-y-0.5 max-[900px]:min-h-0 max-[900px]:border-e-0 max-[900px]:border-b max-[900px]:last:border-b-0' },
  available: { className: 'bg-accent text-white hover:bg-accent/90' },
  upcoming: { className: 'bg-surface-soft hover:bg-accent/8' },
  meta: { className: 'mb-12 flex items-center justify-between gap-4 font-mono text-[.56rem] uppercase' },
  status: { className: 'flex items-center gap-2' },
  statusMark: { className: 'size-1.5 rounded-full bg-signal' },
  discipline: { className: 'mt-5 text-[.82rem] opacity-80' },
  description: { className: 'mt-5 text-[.98rem] leading-[1.75] opacity-90' },
  actions: { className: 'mt-auto flex flex-wrap items-center gap-3 pt-10 font-mono text-[.64rem] font-bold uppercase tracking-[.08em]' },
  primaryAction: { className: 'relative z-10 rounded-full border-2 border-current px-5 py-2.5 transition-colors duration-200 hover:bg-current/12 focus-visible:bg-current/12' },
  secondaryAction: { className: 'rounded-full px-5 py-2.5 underline decoration-current/40 underline-offset-4 transition-colors duration-200 group-hover:decoration-current after:absolute after:inset-0 after:content-[""]' }
}
