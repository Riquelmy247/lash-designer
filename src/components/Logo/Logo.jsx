import { Link } from 'react-router-dom'
import { siteData } from '../../data/siteData'
import styles from './Logo.module.css'

/**
 * Componente de Logo - permite fácil substituição da logo
 * Altere o caminho em siteData.brand.logo para usar outra imagem
 */
export default function Logo() {
  const { logo, logoAlt, name } = siteData.brand
  const isSvg = logo?.toLowerCase().endsWith('.svg')

  return (
    <Link to="/lash-designer/" className={styles.logo} aria-label={`${name} - início`}>
      {isSvg || logo?.match(/\.(png|jpg|jpeg|gif|webp)$/i) ? (
        <img src={logo} alt={logoAlt || name} className={styles.logoImage} />
      ) : (
        <span className={styles.logoText}>{name}</span>
      )}
    </Link>
  )
}
