export const CubeFaceTokens = {
  root: { className: 'cube-face pointer-events-none absolute inset-0 overflow-hidden rounded-[5px] border border-[#29313b] bg-[#10140f] text-white shadow-[inset_0_0_0_3px_rgba(5,8,11,.58),inset_0_0_0_4px_rgba(110,132,145,.25),inset_0_0_30px_rgba(75,111,143,.22),0_0_0_1px_rgba(5,8,11,.85),0_15px_35px_rgba(5,8,15,.2)] [backface-visibility:hidden] aria-[hidden=false]:pointer-events-auto aria-[hidden=false]:cursor-grab' },
  glass: { className: 'face-glass absolute inset-1 z-1 rounded-sm border border-[rgba(138,158,171,.2)] shadow-[inset_12px_0_22px_rgba(255,255,255,.035),inset_-9px_-8px_20px_rgba(0,0,0,.5)]' },
  content: { className: 'face-content relative z-2 flex h-full flex-col p-[var(--face-padding)] [text-shadow:0_1px_4px_rgba(0,0,0,.45)]' }
}
