import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
import InstagramButton from '../InstagramButton/InstagramButton'
import { siteData } from '../../data/siteData'
import styles from './Footer.module.css'

/**
 * Rodapé com links, contato e redes sociais
 */
export default function Footer() {
  const { footer, nav, contact } = siteData

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* <Logo /> */}
          <nav className={styles.footerNav}>
            <ul>
              {nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.social}>
            <WhatsAppButton className={styles.whatsappBtn}>
              WhatsApp
            </WhatsAppButton>
            <InstagramButton className={styles.instagramBtn} />
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{footer.copyright}</p>
          <p className={styles.madeWith}>{footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
