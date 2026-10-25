import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './context'
import { strings, type Lang } from './strings'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = strings[lang].brand
  }, [lang])

  const toggle = () => setLang((current) => (current === 'ar' ? 'en' : 'ar'))

  return (
    <LanguageContext.Provider value={{ lang, t: strings[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}
