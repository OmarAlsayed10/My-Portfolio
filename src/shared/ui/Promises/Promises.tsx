import { aboutContent } from '../../../content'
import type { Language } from '../../../content'
import { DisplayHeading } from '../DisplayHeading'
import { PromisesTokens } from './Promises.tokens'

export const Promises = ({ language }: { language: Language }) => {
  const { title, note, items } = aboutContent.promises
  return <section {...PromisesTokens.root}><DisplayHeading variant="feature">{title[language]}</DisplayHeading><div><ul {...PromisesTokens.list}>{items.map((item) => <li {...PromisesTokens.item} key={item.en}>{item[language]}</li>)}</ul><p {...PromisesTokens.note}>{note[language]}</p></div></section>
}
