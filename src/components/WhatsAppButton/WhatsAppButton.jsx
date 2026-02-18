import { siteData } from '../../data/siteData'
import styles from './WhatsAppButton.module.css'

/**
 * Botão que abre conversa no WhatsApp com número e mensagem configuráveis
 */
export default function WhatsAppButton({ children, message, className = '' }) {
  const { number, message: defaultMessage } = siteData.contact.whatsapp
  const text = encodeURIComponent(message || defaultMessage)
  const url = `https://wa.me/${number}?text=${text}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${className}`}
      aria-label="Abrir conversa no WhatsApp"
    >
      {children || siteData.contactPage.whatsappCta}
    </a>
  )
}
