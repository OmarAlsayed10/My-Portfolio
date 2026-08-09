export const MobileMenuTokens = {
  root: { className: 'min-[761px]:hidden' },
  toggle: { className: 'relative z-50 grid size-10 place-items-center border border-line bg-surface/90 text-foreground shadow-sm backdrop-blur' },
  panel: { className: 'fixed inset-x-3 top-[4.5rem] z-40 border border-line bg-surface/95 p-4 shadow-2xl shadow-black/20 backdrop-blur' },
  navigation: { className: '!grid !justify-self-stretch gap-1' },
  link: { className: 'border-b border-line px-1 py-3 text-sm font-semibold' },
  controls: { className: 'mt-4 border-t border-line pt-4 [&_.mobile-menu-controls]:w-full [&_.mobile-menu-controls]:justify-between' }
}
