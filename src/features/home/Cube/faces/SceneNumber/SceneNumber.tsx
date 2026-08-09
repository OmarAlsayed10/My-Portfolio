import { SceneNumberTokens } from './SceneNumber.tokens'

export const SceneNumber = ({ index }: { index: number }) => <span {...SceneNumberTokens.root}>0{index + 1} / 06</span>
