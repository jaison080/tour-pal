import Image from "next/image";
import React from "react";
import styles from "./Dining.module.css";
import dining from "../../assets/vectors/dining.jpeg";
import { useRouter } from "next/router";

function Dining() {
  const router = useRouter();
  return (
    <>
      <div className={styles.peer_container}>
        <div className={styles.content}>Where to Eat ?</div>
        <div className={styles.img}>
          <Image src={dining} alt="" />
        </div>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={() => {
              router.push("/home");
            }}
          >
            Home
          </div>
          <div
            className={styles.button}
            onClick={() => {
              router.push("/hotel");
            }}
          >
            Hotel
          </div>
        </div>
      </div>
    </>
  );
}

export default Dining;
