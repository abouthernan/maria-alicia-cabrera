import type { BooksType } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from '../../styles/BibliotecaSwiper.module.css'

export function BibliotecaSwiper ({ data }): JSX.Element {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides
      centeredSlidesBounds
      loop
      pagination={{ clickable: true, dynamicBullets: true }}
      grabCursor
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
      className='bibliotecaSwiper'
    >
    {data?.map((item: BooksType) => (
        <SwiperSlide key={item.id}>
         <div className={styles.container}>
          <div className={styles.book}>
            <img
                className={styles.book__img}
                src={item.attributes.image.data.attributes.url}
                alt={`puede ser una caratula de una portada del libro ${item.attributes.title} de maria alicia cabrera`} />
          </div>
          <article className={styles.description}>
            <h2 className={styles.title}>{item.attributes.title}</h2>
            <h3 className={styles.subtitle}>Nota de la autora</h3>
            <p className={styles.note}>{item.attributes.description}</p>
            <nav className={styles.nav}>
              <a href={`${import.meta.env.PUBLIC_API_URL}${item.attributes.pdf.data.attributes.url}`} target="_blank" rel="noreferrer">Descargar</a>
              <a href="#more">Ver más libros</a>
            </nav>
          </article>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
