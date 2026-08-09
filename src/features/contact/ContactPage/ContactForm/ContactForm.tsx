import { aboutContent, localized } from '../../../../content'
import type { Language } from '../../../../content'

export const ContactForm = ({ language }: { language: Language }) => (
  <form className="contact-form" action={`https://formsubmit.co/${aboutContent.brand.email}`} method="POST">
    <input type="hidden" name="_subject" value="New Omar Alsayed portfolio inquiry" /><input type="hidden" name="_template" value="table" /><input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
    <label><span>{localized(language, 'Name', 'الاسم')}</span><input name="name" required autoComplete="name" /></label>
    <label><span>{localized(language, 'Email', 'البريد الإلكتروني')}</span><input name="email" type="email" required autoComplete="email" /></label>
    <label><span>{localized(language, 'Company', 'الشركة')}</span><input name="company" autoComplete="organization" /></label>
    <label><span>{localized(language, 'Project type', 'نوع المشروع')}</span><select name="projectType" required defaultValue=""><option value="" disabled>{localized(language, 'Select', 'اختر')}</option><option>{localized(language, 'Web platform', 'منصة ويب')}</option><option>{localized(language, 'Mobile product', 'منتج جوال')}</option><option>{localized(language, 'Desktop system', 'نظام مكتبي')}</option><option>{localized(language, 'Automation', 'أتمتة')}</option><option>{localized(language, 'Other', 'أخرى')}</option></select></label>
    <label className="message-field"><span>{localized(language, 'What is currently stuck?', 'ما الذي يعيق العمل؟')}</span><textarea name="message" required rows={6} /></label>
    <button type="submit">{localized(language, 'Send inquiry', 'إرسال الطلب')} ↗</button>
  </form>
)
