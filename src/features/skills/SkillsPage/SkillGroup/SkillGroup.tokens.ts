export const SkillGroupTokens = {
  root: { className: 'grid grid-cols-[15rem_1fr] gap-12 border-b border-line py-12 max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[760px]:py-10' },
  header: { className: 'grid content-start grid-cols-[2rem_1fr] gap-4' },
  index: { className: 'pt-1.5 font-mono text-[.58rem] text-accent' },
  skills: { className: 'grid grid-cols-3 gap-2.5 max-[760px]:grid-cols-2' },
  skill: { className: 'flex min-h-14 items-center gap-3 border border-line bg-surface-soft/70 px-4 py-3 transition-[border-color,transform,background] duration-[220ms] hover:-translate-y-0.5 hover:border-accent hover:bg-accent/8 max-[760px]:px-3' },
  icon: { className: 'size-[1.1rem] shrink-0 text-accent' },
  name: { className: 'text-[.72rem] leading-[1.35]' }
}
