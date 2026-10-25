import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

export function CoolOff() {
  const { t } = useLanguage()
  const c = t.coolOff
  return (
    <section className="section cooloff">
      <div className="container cooloff-inner">
        <div className="cooloff-main">
          <p className="eyebrow eyebrow-plain">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p className="lead">{c.body}</p>
          <ol className="timeline" role="list">
            {c.timeline.map((stage, index) => (
              <li key={stage}>
                <span className="timeline-dot" aria-hidden="true">
                  {index + 1}
                </span>
                <span>{stage}</span>
              </li>
            ))}
          </ol>
          <p className="muted">{c.held}</p>
        </div>
        <div className="card strict">
          <span className="icon-badge">
            <Icon name="lock" />
          </span>
          <h3>{c.strictTitle}</h3>
          <p>{c.strictBody}</p>
          <ul className="chips" role="list">
            {c.strictDays.map((days) => (
              <li key={days}>{days}</li>
            ))}
          </ul>
          <p className="muted small">{c.strictNote}</p>
        </div>
      </div>
    </section>
  )
}
