import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { siteData } from '../../data/siteData'
import styles from './Header.module.css'

/**
 * Cabeçalho com logo e navegação responsiva
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <button
          type="button"
          className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir ou fechar menu"
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {siteData.nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? styles.navLinkActive : styles.navLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
