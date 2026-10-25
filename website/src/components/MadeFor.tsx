import { useLanguage } from '../i18n/useLanguage'
import { Icon, type IconName } from './Icon'

// "Designed in Arabic first" next to "What you need".
export function MadeFor() {
  const { t } = useLanguage()
  return (
    <section className="section madefor">
      <div className="container madefor-grid">
        <div>
          <h2>{t.madeFor.title}</h2>
          <ul className="checklist" role="list">
            {t.madeFor.items.map((item) => (
              <li key={item}>
                <Icon name="check" className="icon-sm check" />
                {item}
              </li>
            ))}
            <li className="later">
              <Icon name="calendar" className="icon-sm" />
              {t.madeFor.later}
              <span className="badge">{t.madeFor.laterBadge}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>{t.requirements.title}</h2>
          <ul className="needs" role="list">
            {t.requirements.items.map((item) => (
              <li key={item.title}>
                <span className="icon-badge">
                  <Icon name={item.icon as IconName} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
