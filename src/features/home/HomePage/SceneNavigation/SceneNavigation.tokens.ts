export const SceneNavigationTokens = {
  root: { className: 'scene-navigation fixed inset-x-8 bottom-[1.35rem] z-20 grid grid-cols-6 border-t border-line max-[760px]:inset-x-4 max-[760px]:bottom-4' },
  button: { className: 'relative grid cursor-pointer grid-cols-[auto_1fr] gap-x-3 gap-y-1 bg-transparent px-1 pt-3 text-left text-muted before:absolute before:-top-px before:left-0 before:h-0.5 before:w-0 before:bg-accent before:transition-[width] before:duration-350 max-[760px]:block max-[760px]:h-11 max-[760px]:px-1 max-[760px]:pt-3 max-[760px]:text-center' },
  active: { className: 'text-foreground before:w-full' },
  index: { className: 'row-span-2 font-mono text-[.53rem] max-[760px]:text-[.55rem]' },
  label: { className: 'text-[.72rem] font-semibold max-[760px]:hidden' }
}
