import { useLanguage } from '../i18n/useLanguage'

export function Header() {
  const { lang, t, toggle } = useLanguage()
  return (
    <header className="header">
      <span className="brand">{t.brand}</span>
      <button className="lang-switch" onClick={toggle} lang={lang === 'ar' ? 'en' : 'ar'}>
        {t.switchLanguage}
      </button>
    </header>
  )
}
