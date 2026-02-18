import { siteData } from '../../data/siteData'
import styles from './InstagramButton.module.css'

/**
 * Link estilizado para o perfil do Instagram
 */
export default function InstagramButton({ children, className = '' }) {
  const { instagram, instagramUser } = siteData.contact

  return (
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${className}`}
      aria-label={`Seguir no Instagram: ${instagramUser}`}
    >
      {children || instagramUser}
    </a>
  )
}
