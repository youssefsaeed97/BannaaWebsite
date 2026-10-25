import { useLanguage } from '../i18n/useLanguage'
import { Icon, type IconName } from './Icon'

export function Features() {
  const { t } = useLanguage()
  return (
    <section className="section features" id="features">
      <div className="container">
        <header className="section-head">
          <h2>{t.features.title}</h2>
        </header>
        <div className="feature-grid">
          {t.features.items.map((feature) => (
            <article key={feature.title} className="card feature">
              <span className="icon-badge">
                <Icon name={feature.icon as IconName} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
