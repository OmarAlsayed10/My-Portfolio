export const ProjectCardTokens = {
  root: { className: 'project-card relative grid grid-cols-[4rem_1fr_auto] gap-8 border-b border-line py-[2.3rem] transition-[transform,padding,background] duration-300 hover:translate-x-2.5 hover:bg-accent/8 hover:px-5 focus-visible:translate-x-2.5 focus-visible:bg-accent/8 focus-visible:px-5 max-[760px]:grid-cols-[2rem_1fr] max-[760px]:gap-4 max-[760px]:hover:translate-x-1 max-[760px]:hover:px-2' },
  index: { className: 'card-index font-mono text-[.62rem] text-muted' },
  identity: { className: 'mb-2 flex gap-3 font-mono text-[.80rem] uppercase' },
  done: { className: 'text-accent' },
  active: { className: 'text-signal' },
  visibility: { className: 'text-muted' },
  discipline: { className: 'mb-2 text-[.72rem] text-muted' },
  heading: { className: 'my-3' },
  description: { className: 'mb-2 text-[.72rem] text-muted' },
  action: { className: 'self-center font-mono text-[.56rem] font-medium max-[760px]:col-start-2' }
}
