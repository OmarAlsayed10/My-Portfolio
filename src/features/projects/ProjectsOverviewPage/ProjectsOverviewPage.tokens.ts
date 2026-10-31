export const ProjectsOverviewPageTokens = {
  root: { className: 'index-page mx-auto w-[min(100%_-_4rem,86rem)] pt-40 max-[760px]:w-[min(100%_-_2rem,86rem)]' },
  intro: { className: 'page-intro w-[min(100%,66rem)] [&>p]:font-mono [&>p]:text-[.65rem] [&>p]:uppercase [&>p]:text-accent [&>h1]:mt-8' },
  filter: { className: 'category-filter my-8 mt-20 flex flex-wrap gap-2 max-[760px]:-mx-4 max-[760px]:mt-14 max-[760px]:flex-nowrap max-[760px]:overflow-x-auto max-[760px]:px-4 max-[760px]:pb-2 max-[760px]:[scrollbar-width:none]' },
  filterButton: { className: 'shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-line bg-[var(--header)] px-4 py-2.5 text-muted max-[760px]:text-[.85rem]' },
  start: { className: 'mt-24 border-t border-line pt-10 max-[760px]:mt-16' },
  startSteps: { className: 'mt-10 grid grid-cols-1 gap-8 md:grid-cols-3' },
  startStep: { className: 'border-t border-line pt-4 [&>span]:font-bold [&>span]:text-accent [&>h3]:mt-3 [&>h3]:font-bold [&>p]:mt-3 [&>p]:leading-7 [&>p]:text-muted' },
  startAction: { className: 'mt-10 inline-block bg-accent px-6 py-4 font-bold text-white' },
  activeFilter: { className: 'border-accent bg-accent text-white shadow-[0_0_0_3px_color-mix(in_srgb,var(--blue)_15%,transparent)]' },
  grid: { className: 'project-grid border-t border-line' }
}
