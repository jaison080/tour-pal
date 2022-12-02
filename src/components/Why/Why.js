import React, { useCallback, useState } from "react";
import styles from "./Why.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Image from "next/image";
import left from "../../assets/icons/angleLeft.png";
import right from "../../assets/icons/angleRight.png";
import WhyCard from "./WhyCard/WhyCard";
import whyData from "../../data/whyData";
function Why() {
  const [swiperRef, setSwiperRef] = useState();
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);
  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  return (
    <>
      <div className={styles.why_container}>
        <div className={styles.header}>
          <div className={styles.heading}>Why TourPal ?</div>
          <div className={styles.arrows}>
            <Image
              src={left}
              alt="left"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              onClick={handleLeftClick}
            />
            <Image
              src={right}
              alt="right"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              onClick={handleRightClick}
            />
          </div>
        </div>
        <div className={styles.carousel}>
          <Swiper
            spaceBetween={250}
            className="mySwiper"
            onSwiper={setSwiperRef}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {whyData.map((x) => (
              <SwiperSlide key={x.id}>
                <WhyCard data={x} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Why;
