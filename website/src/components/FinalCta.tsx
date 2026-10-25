import { useLanguage } from '../i18n/useLanguage'

export function FinalCta() {
  const { t } = useLanguage()
  return (
    <section className="section final">
      <div className="container">
        <div className="final-card">
          <span className="badge badge-light">{t.finalCta.badge}</span>
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.body}</p>
          <a className="button button-light" href="#how">
            {t.finalCta.button}
          </a>
        </div>
      </div>
    </section>
  )
}
