import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface GalleryCard {
  id: number
  attributes: {
    Description: string
    Media: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

export function GallerySwiper ({ data }): JSX.Element {
  return (
    <Swiper
      slidesPerView="auto"
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
      className="gallerySwiper"
    >
      {data?.map((item: GalleryCard) => (
        <SwiperSlide key={item.id}>
          <div className="gallery__content-img">
            <img
              className="gallery__img"
              src={item.attributes.Media.data.attributes.url}
              alt={`puede ser una foto del artículo ${item.attributes.Description}`}
            />
          </div>
          <h2 className="gallery__card-title">{item.attributes.Description}</h2>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
