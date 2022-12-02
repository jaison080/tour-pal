import React, { useCallback, useState } from "react";
import customerData from "../../data/customerData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import styles from "./HappyCust.module.css";
import Image from "next/image";
import left from "../../assets/icons/angleLeft.png";
import right from "../../assets/icons/angleRight.png";


function HappyCust() {
  const [custData, setCustData] = useState();
  // const handleLeftClick = useCallback(() => {
  //   if (!custData) return custData.slidePrev();
  // }, [custData]);
  // const handleRightClick = useCallback(() => {
  //   if (!custData) return custData.slideNext();
  // }, [custData]);
  return (
    <div>
      <h2>Happy customer</h2>
      <div className={styles.header}>
        <div className={styles.heading}>Sanitized & safe cars</div>
        {/* <div className={styles.arrows}>
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
        </div> */}
      </div>
      <div className={styles.carousel}>
        <Swiper
          spaceBetween={30}
          className="mySwiper"
          onSwiper={custData}
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
          {customerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.main_container}>
                <div className={styles.section}>
                  <h2>{item.head}</h2>
                  <p>{item.para}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HappyCust;
