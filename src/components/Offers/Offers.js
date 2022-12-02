import Image from "next/image";
import React from "react";
import one from "../../assets/offers/1.png";
import styles from "./Offers.module.css";

function Offers() {
  return (
    <>
      <div className={styles.offer_container}>
        <div className={styles.header}>
          <div className={styles.heading}>Sanitized & safe cars</div>
        </div>
        <div className={styles.carousel}>
          <Image
            src={one}
            alt="featured"
            width={350}
            height={80}
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Offers;
