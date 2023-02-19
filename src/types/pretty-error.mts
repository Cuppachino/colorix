import type { UnionLiteral } from '@cuppachino/type-space'
import type { Colorix } from './colorix.mjs'

export interface PrettyErr<
  _ErrName extends string,
  FallbackMessage extends string | undefined = string
> {
  new (msg?: UnionLiteral<FallbackMessage, string>, ...args: string[]): Colorix<
    ['redBright'],
    [FallbackMessage]
  >
}
