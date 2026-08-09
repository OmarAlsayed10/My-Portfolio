export const ContactQuestionsTokens = {
  root: { className: 'contact-questions mt-32 block max-[760px]:mt-20 [&>p]:font-mono [&>p]:text-[.62rem] [&>p]:text-muted [&>h2]:my-4 [&>h2]:mb-12 [&>div]:border-t [&>div]:border-line' },
  details: { className: 'border-b border-line' },
  summary: { className: 'grid cursor-pointer list-none grid-cols-[3rem_1fr_auto] items-center gap-4 py-6 max-[760px]:grid-cols-[2rem_1fr_auto]' },
  index: { className: 'font-mono text-[.58rem] text-muted' },
  question: { className: 'flex justify-between gap-8 text-[clamp(1rem,1.6vw,1.35rem)] max-[760px]:grid max-[760px]:gap-1.5' },
  mark: { className: 'text-2xl not-italic text-accent transition-transform duration-[220ms] group-open:rotate-45' },
  answer: { className: 'ms-16 w-[min(100%_-_4rem,60rem)] pb-8 leading-7 text-muted max-[760px]:ms-12 max-[760px]:w-[calc(100%_-_3rem)]' }
}
