import Image from "next/image";
import React from "react";
import styles from "./PeerCar.module.css";
import car from "../../assets/car.jpg";
import { useRouter } from "next/router";

function PeerCar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.peer_container}>
        <div className={styles.content}>Choose your Ride</div>
        <div className={styles.img}>
          <Image src={car} alt="" />
        </div>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={() => {
              router.push("/peershare");
            }}
          >
            Peer Share
          </div>
          <div className={styles.button}
           onClick={() => {
            router.push("/subscribe");
          }}>Subscribe</div>
        </div>
      </div>
    </>
  );
}

export default PeerCar;
