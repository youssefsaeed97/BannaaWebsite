import { useLanguage } from '../i18n/useLanguage'

export function HowItWorks() {
  const { t } = useLanguage()
  return (
    <section className="section how" id="how">
      <div className="container">
        <header className="section-head">
          <h2>{t.how.title}</h2>
          <p>{t.how.subtitle}</p>
        </header>
        <ol className="steps" role="list">
          {t.how.steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-number" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
