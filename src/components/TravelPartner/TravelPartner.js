import Image from "next/image";
import React from "react";
import styles from "./TravelPartner.module.css";
import companion from "../../assets/companion.jpeg";
import { useRouter } from "next/router";
function TravelPartner() {
  const router = useRouter();
  return (
    <>
      <div className={styles.peer_container}>
        <div className={styles.content}>Choose a Travel Partner</div>
        <div className={styles.img}>
          <Image src={companion} alt="" />
        </div>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={() => {
              router.push("/companion");
            }}
          >
            Find Your Companion
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelPartner;
