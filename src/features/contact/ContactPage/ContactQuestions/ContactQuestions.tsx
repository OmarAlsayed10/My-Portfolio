import { localized, questions } from '../../../../content'
import type { Language } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'

export const ContactQuestions = ({ language }: { language: Language }) => (
  <section className="contact-questions"><p>{localized(language, 'Before you write', 'قبل أن تراسلنا')}</p><DisplayHeading variant="section">{localized(language, 'Useful questions.', 'أسئلة مفيدة.')}</DisplayHeading><div>{questions.map((question, index) => <details key={question.question.en}><summary><span>0{index + 1}</span><b>{question.question[language]}</b><em>+</em></summary><article><p>{question.answer[language]}</p></article></details>)}</div></section>
)
