import { SpaceFieldTokens } from './SpaceField.tokens'

export const SpaceField = ({ className = '' }: { className?: string }) => <div {...SpaceFieldTokens.root} className={`${SpaceFieldTokens.root.className} ${className}`.trim()} aria-hidden="true">{SpaceFieldTokens.stars.map((star, index) => <i {...star} key={index} />)}</div>
