import * as React from 'react'

export const canUseSymbol =
  typeof Symbol === 'function' && typeof Symbol.for === 'function'

const contextKey = canUseSymbol
  ? Symbol.for('__LOADABLE_CONTEXT__')
  : '__LOADABLE_CONTEXT__'

export function getChunkExtractorContext() {
  let context = React.createContext[contextKey]
  if (!context) {
    Object.defineProperty(React.createContext, contextKey, {
      value: (context = React.createContext({})),
      enumerable: false,
      writable: false,
      configurable: true,
    })
    context.displayName = 'ChunkExtractorContext'
  }
  return context
}

export { getChunkExtractorContext as resetChunkExtractorContext }
