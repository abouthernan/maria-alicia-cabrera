import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function GallerySwiper (): JSX.Element {
  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={10}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      navigation
      modules={[Pagination, Navigation]}
      className='gallerySwiper'
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
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
