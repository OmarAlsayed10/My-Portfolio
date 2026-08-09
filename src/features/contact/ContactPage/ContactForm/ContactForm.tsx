import { aboutContent, localized } from '../../../../content'
import type { Language } from '../../../../content'
import { ContactFormTokens } from './ContactForm.tokens'

export const ContactForm = ({ language }: { language: Language }) => (
  <form {...ContactFormTokens.root} action={`https://formsubmit.co/${aboutContent.brand.email}`} method="POST">
    <input type="hidden" name="_subject" value="New Omar Alsayed portfolio inquiry" /><input type="hidden" name="_template" value="table" /><input {...ContactFormTokens.honey} type="text" name="_honey" tabIndex={-1} autoComplete="off" />
    <label {...ContactFormTokens.label}><span>{localized(language, 'Name', 'الاسم')}</span><input {...ContactFormTokens.field} name="name" required autoComplete="name" /></label>
    <label {...ContactFormTokens.label}><span>{localized(language, 'Email', 'البريد الإلكتروني')}</span><input {...ContactFormTokens.field} name="email" type="email" required autoComplete="email" /></label>
    <label {...ContactFormTokens.label}><span>{localized(language, 'Company', 'الشركة')}</span><input {...ContactFormTokens.field} name="company" autoComplete="organization" /></label>
    <label {...ContactFormTokens.label}><span>{localized(language, 'Project type', 'نوع المشروع')}</span><select {...ContactFormTokens.field} name="projectType" required defaultValue=""><option value="" disabled>{localized(language, 'Select', 'اختر')}</option><option>{localized(language, 'Web platform', 'منصة ويب')}</option><option>{localized(language, 'Mobile product', 'منتج جوال')}</option><option>{localized(language, 'Desktop system', 'نظام مكتبي')}</option><option>{localized(language, 'Automation', 'أتمتة')}</option><option>{localized(language, 'Other', 'أخرى')}</option></select></label>
    <label {...ContactFormTokens.label} {...ContactFormTokens.message}><span>{localized(language, 'What is currently stuck?', 'ما الذي يعيق العمل؟')}</span><textarea {...ContactFormTokens.field} name="message" required rows={6} /></label>
    <button {...ContactFormTokens.submit} type="submit">{localized(language, 'Send inquiry', 'إرسال الطلب')} ↗</button>
  </form>
)
