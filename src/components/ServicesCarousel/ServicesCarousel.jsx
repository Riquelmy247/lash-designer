import { useRef, useState, useCallback, useEffect } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import styles from './ServicesCarousel.module.css'

/**
 * Carrossel de serviços com setas e indicadores (dots)
 */
export default function ServicesCarousel({ services }) {
  const scrollRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const total = services.length
  const maxIndex = Math.max(0, total - visibleCount)

  const scrollToIndex = useCallback((i) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector('[data-carousel-card]')?.offsetWidth ?? 280
    const gap = 24
    const scroll = i * (cardWidth + gap)
    el.scrollTo({ left: scroll, behavior: 'smooth' })
    setIndex(Math.min(i, maxIndex))
  }, [maxIndex])

  const goPrev = () => scrollToIndex(Math.max(0, index - 1))
  const goNext = () => scrollToIndex(Math.min(maxIndex, index + 1))

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onResize = () => {
      const w = el.offsetWidth
      if (w < 400) setVisibleCount(1)
      else if (w < 768) setVisibleCount(2)
      else setVisibleCount(3)
    }
    onResize()
    window.addEventListener('resize', onResize)

    const onScroll = () => {
      const cardWidth = el.querySelector('[data-carousel-card]')?.offsetWidth ?? 280
      const gap = 24
      const newIndex = Math.round(el.scrollLeft / (cardWidth + gap))
      setIndex(Math.min(newIndex, maxIndex))
    }
    el.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', onResize)
      el.removeEventListener('scroll', onScroll)
    }
  }, [maxIndex])

  if (!services?.length) return null

  return (
    <div className={styles.carousel}>
      <div className={styles.trackWrap}>
        <button
          type="button"
          className={styles.arrow}
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Serviços anteriores"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div ref={scrollRef} className={styles.track} role="region" aria-label="Carrossel de serviços">
          {services.map((service) => (
            <div key={service.id} className={styles.slide} data-carousel-card>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={goNext}
          disabled={index >= maxIndex}
          aria-label="Próximos serviços"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      {total > visibleCount && (
        <div className={styles.dots} role="tablist" aria-label="Posição no carrossel">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir para slide ${i + 1}`}
              className={i === index ? styles.dotActive : styles.dot}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
