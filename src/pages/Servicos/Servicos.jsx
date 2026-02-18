import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { siteData } from '../../data/siteData'
import styles from './Servicos.module.css'

/**
 * Página de serviços: listagem completa com cards
 */
export default function Servicos() {
  const { services } = siteData

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{services.title}</h1>
          <p className={styles.subtitle}>{services.subtitle}</p>
        </div>
      </section>
      <section className={styles.content} aria-labelledby="lista-servicos">
        <div className={styles.inner}>
          <h2 id="lista-servicos" className={styles.srOnly}>
            Lista de serviços
          </h2>
          <div className={styles.cardsGrid}>
            {services.list.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
