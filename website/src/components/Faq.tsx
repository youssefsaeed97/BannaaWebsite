import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

export function Faq() {
  const { t } = useLanguage()
  return (
    <section className="section faq" id="faq">
      <div className="container container-narrow">
        <header className="section-head">
          <h2>{t.faq.title}</h2>
        </header>
        <div className="faq-list">
          {t.faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
                <Icon name="chevron" className="icon-sm faq-chevron" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
