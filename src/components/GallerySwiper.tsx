import type { ArticleType } from '../types'
import { formatDate } from '../utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Props {
  data: ArticleType[]
}

export function GallerySwiper ({ data }: Props): JSX.Element {
  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={30}
      loop
      pagination={{ clickable: true, dynamicBullets: true }}
      centeredSlides
      centeredSlidesBounds
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
      grabCursor
      className='gallerySwiper'
    >
      {data?.map((item) => (
        <SwiperSlide
          key={item.id}
        >
          <div className="gallery__content-img">
            <img
              className="gallery__img"
              src={item.attributes.image.data.attributes.url}
              alt={`puede ser una foto del artículo ${item.attributes.title}`}/>
          </div>
          <em className='gallery__date'>{formatDate(item.attributes.createdAt)}</em>
          <h2 className='gallery__card-title'>{item.attributes.title}</h2>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
