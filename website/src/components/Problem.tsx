import { useLanguage } from '../i18n/useLanguage'

export function Problem() {
  const { t } = useLanguage()
  return (
    <section className="section problem">
      <div className="container">
        <h2>{t.problem.title}</h2>
        <ul className="problem-list" role="list">
          {t.problem.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="answer">
          <h3>{t.problem.answerTitle}</h3>
          <p>{t.problem.answerBody}</p>
        </div>
      </div>
    </section>
  )
}
