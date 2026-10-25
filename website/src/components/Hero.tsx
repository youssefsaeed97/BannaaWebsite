import { useLanguage } from '../i18n/useLanguage'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero">
      <h1>{t.heroTitle}</h1>
      <p>{t.heroBody}</p>
      <a className="cta" href="#features">
        {t.heroCta}
      </a>
    </section>
  )
}
