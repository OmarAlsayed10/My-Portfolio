export const ContactFormTokens = {
  root: { className: 'contact-form grid grid-cols-1 gap-x-4 gap-y-6 border-t border-line pt-5 md:grid-cols-2 [&_option]:bg-surface-soft [&_option]:text-foreground [&_textarea]:resize-y [&_input[type=email]]:text-left [&_input[type=email]]:[direction:ltr]' },
  honey: { className: 'absolute -left-[9999px]' },
  label: { className: 'grid gap-2.5 text-muted' },
  field: { className: 'w-full rounded-[2px] border border-line bg-[color-mix(in_srgb,var(--page-soft)_90%,var(--blue)_3%)] px-3.5 py-3 text-foreground transition-[border-color,background,box-shadow] duration-[220ms] focus:border-accent focus:bg-surface-soft focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--blue)_15%,transparent)] focus:outline-none' },
  message: { className: 'grid gap-2.5 text-muted md:col-span-2' },
  submit: { className: 'justify-self-end bg-accent px-5 py-4 text-white md:col-span-2' }
}
