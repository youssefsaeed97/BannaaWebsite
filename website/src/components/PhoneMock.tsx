import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

// Illustration of a focus session on the phone. Decorative, so hidden from screen readers.
export function PhoneMock() {
  const { t } = useLanguage()
  return (
    <div className="phone-wrap" aria-hidden="true">
      <div className="phone">
        <div className="phone-notch" />
        <p className="phone-label">{t.phone.session}</p>
        <div className="ring">
          <svg viewBox="0 0 120 120">
            <circle className="ring-track" cx="60" cy="60" r="52" />
            <circle className="ring-progress" cx="60" cy="60" r="52" />
          </svg>
          <div className="ring-text">
            <span className="ring-time" dir="ltr">
              {t.phone.time}
            </span>
            <span className="ring-sub">{t.phone.remaining}</span>
          </div>
        </div>
        <ul className="phone-apps">
          {t.phone.apps.map((app) => (
            <li key={app}>
              <span>{app}</span>
              <span className="phone-locked">
                <Icon name="lock" className="icon-sm" />
                {t.phone.locked}
              </span>
            </li>
          ))}
        </ul>
        <p className="phone-holds">{t.phone.holds}</p>
      </div>
      <div className="key-card">
        <Icon name="key" />
        <span>{t.phone.key}</span>
      </div>
    </div>
  )
}
