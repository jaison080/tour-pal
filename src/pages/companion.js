import React from "react";
import { Navbar } from "../components";
import CustomTitle from "../utils/customTitle";
import styles from  '../styles/companion.module.css'
import Image from "next/image";
import user from '../assets/vectors/car.jpg'
function Companion() {
  return (
    <>
      <CustomTitle title={"Companion"} />
      <Navbar />
      <div className={styles.companion_card}>
        <div className={styles.user_input}>
          <input type="text" name="from" placeholder="Enter starting point" className={styles.inputs}/>
          <input type="text" name="dest" placeholder="Enter your destination" className={styles.inputs}/>
          <div className={styles.inputs}>search</div>
        </div>
      </div>
      <div className={styles.companions}>
        <div className={styles.card}>
          <Image src={user}/>
          <div className={styles.details}>
            <div className={styles.key}>
              name
            </div>
            <div className={styles.value}>
              demo
            </div>
          </div>
          <div className={styles.chatbtn}>chat now</div>
        </div>
      </div>
      
    </>
  );
}

export default Companion;
