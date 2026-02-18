import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
import { siteData } from '../../data/siteData'
import styles from './HeroSection.module.css'

/**
 * Banner principal com frase de impacto e CTA para WhatsApp
 */
export default function HeroSection() {
  const { hero } = siteData
  const hasBgImage = hero.backgroundImage

  return (
    <section
      className={`${styles.hero} ${hasBgImage ? styles.hasBgImage : ''}`}
      style={hasBgImage ? { backgroundImage: `url(${hero.backgroundImage})` } : undefined}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        {hero.ctaWhatsApp && (
          <div className={styles.cta}>
            <WhatsAppButton className={styles.whatsappCta}>
              {hero.ctaText}
            </WhatsAppButton>
          </div>
        )}
      </div>
    </section>
  )
}
