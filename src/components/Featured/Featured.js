import React from 'react'
import styles from './Featured.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
function Featured() {
    const [swiperRef, setSwiperRef] = useState();
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  return (<>
    <h1>Featured</h1>
    <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={30}
          initialSlide={getPosition()}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
            },
            1275: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            882: {
              slidesPerView: 2,
            },
            280: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >

        </Swiper>
        </>
  )
}

export default Featured