import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
import styles from './ServiceCard.module.css'

/**
 * Card de serviço com imagem, descrição e botão de contato
 */
export default function ServiceCard({ service }) {
  const { name, description, image, category } = service
  const message = `Olá! Gostaria de saber mais sobre o serviço: ${name}`

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x300/f8e4ec/e8b4c8?text=Serviço'
          }}
        />
        {category && <span className={styles.category}>{category}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <WhatsAppButton message={message} className={styles.cta}>
          Entrar em contato
        </WhatsAppButton>
      </div>
    </article>
  )
}
