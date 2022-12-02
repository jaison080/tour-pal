import React from "react";
import { Navbar } from "../components";
import CustomTitle from "../utils/customTitle";
import styles from "../styles/Companion.module.css";
import Image from "next/image";
import Link from "next/link";
import { companionData } from "../data";
function Companion() {
  return (
    <>
      <CustomTitle title={"Companion"} />
      <Navbar />
      <div className={styles.companion_card}>
        <h1>Companion</h1>
        <div className={styles.user_input}>
          <input
            type="text"
            name="from"
            placeholder="Enter Starting point"
            className={styles.inputs}
          />
          <input
            type="text"
            name="dest"
            placeholder="Enter Destination Point"
            className={styles.inputs}
          />
          <div className={styles.search_btn}>Search</div>
        </div>
      </div>
      <div className={styles.companions}>
        {companionData.map((companion) => {
          return (
            <div className={styles.card}>
              <Image
                src={companion.image}
                width={200}
                height={200}
                style={{ borderRadius: "50%" }}
              />
              <h2 className={styles.key}>{companion.name}</h2>
              <h4 className={styles.value}>Age : {companion.age}</h4>
              <h4 className={styles.value}>Rating : {companion.rating}/5</h4>
              <Link href={companion.link} target="_blank" rel="noreferrer">
                <div className={styles.bookbtn}>Chat Now</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Companion;
