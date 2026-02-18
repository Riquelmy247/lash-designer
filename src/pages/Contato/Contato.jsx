import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import InstagramButton from '../../components/InstagramButton/InstagramButton'
import { siteData } from '../../data/siteData'
import styles from './Contato.module.css'

/**
 * Página de contato: WhatsApp, telefone e Instagram
 */
export default function Contato() {
  const { contact, contactPage } = siteData

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{contactPage.title}</h1>
          <p className={styles.subtitle}>{contactPage.subtitle}</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.cards}>
            {/* <div className={styles.card}>
              <span className={styles.cardLabel}>{contactPage.phoneLabel}</span>
              <a href={`tel:${siteData.contact.whatsapp.number}`} className={styles.phone}>
                {contact.phone}
              </a>
            </div> */}
            <div className={styles.card}>
              <span className={styles.cardLabel}>{contactPage.whatsappCta}</span>
              <WhatsAppButton className={styles.whatsappBtn} />
            </div>
            <div className={styles.card}>
              <span className={styles.cardLabel}>{contactPage.instagramLabel}</span>
              <p className={styles.followText}>{contactPage.followText}</p>
              <InstagramButton className={styles.instagramBtn} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
