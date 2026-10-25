import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

// The always-on filter and privacy, side by side.
export function Trust() {
  const { t } = useLanguage()
  return (
    <section className="section trust">
      <div className="container trust-grid">
        <article className="card trust-card">
          <span className="icon-badge">
            <Icon name="filter" />
          </span>
          <h2>{t.filter.title}</h2>
          <p>{t.filter.body}</p>
        </article>
        <article className="card trust-card">
          <span className="icon-badge">
            <Icon name="privacy" />
          </span>
          <h2>{t.privacy.title}</h2>
          <p>{t.privacy.body}</p>
          <p className="muted">{t.privacy.recovery}</p>
        </article>
      </div>
    </section>
  )
}
