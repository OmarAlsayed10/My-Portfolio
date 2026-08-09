export const HomeHeaderTokens = {
  root: { className: 'fixed inset-x-0 top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center bg-[linear-gradient(var(--header),transparent)] px-8 py-[1.45rem] text-foreground backdrop-blur-sm max-[760px]:grid-cols-[1fr_auto] max-[760px]:px-4 max-[760px]:py-[1.1rem]' },
  wordmark: { className: 'w-max text-base font-extrabold tracking-[-.03em]' },
  hint: { className: 'flex items-center gap-2 font-mono text-[.64rem] uppercase max-[760px]:hidden' },
  hintDivider: { className: 'block h-px w-6 bg-line' },
  navigation: { className: 'hidden justify-self-end items-center gap-5 text-[.69rem] min-[761px]:flex' }
}
