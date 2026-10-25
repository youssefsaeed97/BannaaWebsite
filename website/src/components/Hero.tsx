import { useLanguage } from '../i18n/useLanguage'
import { PhoneMock } from './PhoneMock'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.body}</p>
          <div className="actions">
            <a className="button button-primary" href="#how">
              {t.hero.primary}
            </a>
            <a className="button button-ghost" href="#faq">
              {t.hero.secondary}
            </a>
          </div>
          <p className="hero-note">{t.hero.note}</p>
        </div>
        <PhoneMock />
      </div>
    </section>
  )
}
