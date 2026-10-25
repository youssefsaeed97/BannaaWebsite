import { useLanguage } from '../i18n/useLanguage'

export function SkipLink() {
  const { t } = useLanguage()
  return (
    <a className="skip-link" href="#main">
      {t.skipToContent}
    </a>
  )
}
