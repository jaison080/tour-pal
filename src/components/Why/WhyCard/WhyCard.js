import Image from "next/image";
import React from "react";
import styles from './WhyCard.module.css'

function WhyCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_icon}>
        <Image src={props.data.img} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{props.data.title}</div>
        <div className={styles.desc}>{props.data.desc}</div>
      </div>
    </div>
  );
}

export default WhyCard;
