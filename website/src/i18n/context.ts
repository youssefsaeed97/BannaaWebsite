import { createContext } from 'react'
import type { Lang, strings } from './strings'

export type LanguageValue = {
  lang: Lang
  t: (typeof strings)[Lang]
  toggle: () => void
}

export const LanguageContext = createContext<LanguageValue | null>(null)
