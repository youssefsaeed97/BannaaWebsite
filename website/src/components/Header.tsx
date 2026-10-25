import { useLanguage } from '../i18n/useLanguage'
import { Logo } from './Logo'

export function Header() {
  const { lang, t, toggle } = useLanguage()
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <Logo />
          <span>{t.brand}</span>
        </a>
        <nav className="nav" aria-label={t.nav.label}>
          <a href="#how">{t.nav.how}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <button className="lang-switch" onClick={toggle} lang={lang === 'ar' ? 'en' : 'ar'}>
          {t.switchLanguage}
        </button>
      </div>
    </header>
  )
}
