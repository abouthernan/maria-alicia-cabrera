import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function GallerySwiper (): JSX.Element {
  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
      grabCursor
      className='gallerySwiper'
    >
      <SwiperSlide>
        <div className="gallery__content-img">
          <img className="gallery__img" src="gallery-1.png" alt="puede ser una fotografía" />
        </div>
        <em className='gallery__date'>27 de febrero 2023</em>
        <h2 className='gallery__card-title'>Lorem Ipsum dolor sit</h2>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__content-img">
          <img className="gallery__img" src="gallery-1.png" alt="puede ser una fotografía" />
        </div>
        <em className='gallery__date'>27 de febrero 2023</em>
        <h2 className='gallery__card-title'>Lorem Ipsum dolor sit</h2>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__content-img">
          <img className="gallery__img" src="gallery-1.png" alt="puede ser una fotografía" />
        </div>
        <em className='gallery__date'>27 de febrero 2023</em>
        <h2 className='gallery__card-title'>Lorem Ipsum dolor sit</h2>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__content-img">
          <img className="gallery__img" src="gallery-1.png" alt="puede ser una fotografía" />
        </div>
        <em className='gallery__date'>27 de febrero 2023</em>
        <h2 className='gallery__card-title'>Lorem Ipsum dolor sit</h2>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__content-img">
          <img className="gallery__img" src="gallery-1.png" alt="puede ser una fotografía" />
        </div>
        <em className='gallery__date'>27 de febrero 2023</em>
        <h2 className='gallery__card-title'>Lorem Ipsum dolor sit</h2>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__content-img">
          <img className="gallery__img" src="gallery-1.png" alt="puede ser una fotografía" />
        </div>
        <em className='gallery__date'>27 de febrero 2023</em>
        <h2 className='gallery__card-title'>Lorem Ipsum dolor sit</h2>
      </SwiperSlide>
    </Swiper>
  )
}
