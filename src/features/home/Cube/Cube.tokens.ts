export const CubeTokens = {
  stage: { className: 'cube-stage absolute left-1/2 top-1/2 z-4 size-[var(--cube-size)] -translate-x-1/2 -translate-y-[52%] touch-none select-none cursor-pointer [perspective:1200px] max-[760px]:-translate-y-[58%] max-[760px]:[perspective:900px]' },
  cube: { className: 'cube relative size-full transform-3d transition-transform duration-[850ms] ease-[cubic-bezier(.18,.85,.18,1)] will-change-transform' },
  draggingCube: { className: '!transition-none' },
  shadow: { className: 'cube-shadow absolute -z-1 bottom-[-12%] left-[12%] h-[13%] w-[76%] rotate-x-[70deg] rounded-full bg-[rgba(5,8,15,.36)] blur-[28px]' }
}
