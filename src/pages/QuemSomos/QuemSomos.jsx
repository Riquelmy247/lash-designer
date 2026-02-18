import { siteData } from '../../data/siteData'
import styles from './QuemSomos.module.css'

/**
 * Página institucional: sobre a profissional, missão, visão e valores
 */
export default function QuemSomos() {
  const { about } = siteData

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{about.title}</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.intro}>{about.intro}</p>

          <div className={styles.grid}>
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>{about.mission.title}</h2>
              <p className={styles.cardText}>{about.mission.text}</p>
            </article>
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>{about.vision.title}</h2>
              <p className={styles.cardText}>{about.vision.text}</p>
            </article>
          </div>

          <article className={styles.valuesCard}>
            <h2 className={styles.cardTitle}>{about.values.title}</h2>
            <ul className={styles.valuesList}>
              {about.values.items.map((item, index) => (
                <li key={index} className={styles.valueItem}>
                  <span className={styles.bullet} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
