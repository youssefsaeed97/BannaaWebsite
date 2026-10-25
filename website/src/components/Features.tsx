import { useLanguage } from '../i18n/useLanguage'

export function Features() {
  const { t } = useLanguage()
  return (
    <section id="features" className="features">
      <h2>{t.featuresTitle}</h2>
      <div className="feature-grid">
        {t.features.map((feature) => (
          <article key={feature.title} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
