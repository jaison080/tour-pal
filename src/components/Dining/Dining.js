import Image from "next/image";
import React from "react";
import styles from "./Dining.module.css";
import dining from "../../assets/dining.jpeg";

function Dining() {
    return (
        <>
          <div className={styles.peer_container}>
            <div className={styles.content}>Where to Eat ?</div>
            <div className={styles.img}>
              <Image src={dining} alt="" />
            </div>
            <div className={styles.buttons}>
              <div className={styles.button}>Home</div>
              <div className={styles.button}>Hotel</div>
            </div>
          </div>
        </>
      );
}

export default Dining