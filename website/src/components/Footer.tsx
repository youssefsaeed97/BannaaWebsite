import { useLanguage } from '../i18n/useLanguage'
import { Logo } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand">
          <Logo />
          <span>{t.brand}</span>
        </span>
        <span className="muted">{t.footer.tagline}</span>
        <span className="muted small">{t.footer.copyright.replace('{year}', String(year))}</span>
      </div>
    </footer>
  )
}
