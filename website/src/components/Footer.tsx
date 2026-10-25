import { useLanguage } from '../i18n/useLanguage'

const year = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      © {year} {t.footer}
    </footer>
  )
}
