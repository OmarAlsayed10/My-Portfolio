import { localized, questions } from '../../../../content'
import type { Language } from '../../../../content'
import { DisplayHeading } from '../../../../shared/ui/DisplayHeading'
import { ContactQuestionsTokens } from './ContactQuestions.tokens'

export const ContactQuestions = ({ language }: { language: Language }) => (
  <section {...ContactQuestionsTokens.root}><p>{localized(language, 'Before you write', 'قبل أن تراسلنا')}</p><DisplayHeading variant="section">{localized(language, 'Useful questions.', 'أسئلة مفيدة.')}</DisplayHeading><div>{questions.map((question, index) => <details {...ContactQuestionsTokens.details} className={`group ${ContactQuestionsTokens.details.className}`} key={question.question.en}><summary {...ContactQuestionsTokens.summary}><span {...ContactQuestionsTokens.index}>0{index + 1}</span><b {...ContactQuestionsTokens.question}>{question.question[language]}</b><em {...ContactQuestionsTokens.mark}>+</em></summary><article {...ContactQuestionsTokens.answer}><p>{question.answer[language]}</p></article></details>)}</div></section>
)
