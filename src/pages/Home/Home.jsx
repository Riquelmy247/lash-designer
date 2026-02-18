import HeroSection from '../../components/HeroSection/HeroSection'
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import { siteData } from '../../data/siteData'
import styles from './Home.module.css'

/**
 * Página inicial: banner, CTA e carrossel com todos os serviços
 */
export default function Home() {
  const allServices = siteData.services.list

  return (
    <main>
      <HeroSection />
      <section className={styles.services} aria-labelledby="servicos-destaque">
        <div className={styles.sectionInner}>
          <h2 id="servicos-destaque" className={styles.sectionTitle}>
            {siteData.services.title}
          </h2>
          <p className={styles.sectionSubtitle}>{siteData.services.subtitle}</p>
          <ServicesCarousel services={allServices} />
          <div className={styles.ctaWrap}>
            <WhatsAppButton>Ver todos os serviços e agendar</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  )
}
