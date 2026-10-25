import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './context'
import { strings, type Lang } from './strings'

const STORAGE_KEY = 'bannaa-lang'

// Arabic unless the visitor picked English before. Storage can be blocked, so never rely on it.
function initialLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar'
  } catch {
    return 'ar'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = `${strings[lang].brand} | ${strings[lang].hero.title}`
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, [lang])

  const toggle = () => setLang((current) => (current === 'ar' ? 'en' : 'ar'))

  return (
    <LanguageContext.Provider value={{ lang, t: strings[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}
