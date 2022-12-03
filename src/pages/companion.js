import React, { useState } from "react";
import { Navbar } from "../components";
import CustomTitle from "../utils/customTitle";
import styles from "../styles/Companion.module.css";
import Image from "next/image";
import Link from "next/link";
import { companionData } from "../data";
function Companion() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [visible, setVisible] = useState(false);
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
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className={styles.inputs}
          />
          <input
            type="text"
            name="dest"
            placeholder="Enter Destination Point"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={styles.inputs}
          />
          <div
            className={styles.search_btn}
            onClick={() => {
              if (source === "" && destination === "") {
                alert("Please select source and destination");
                return setVisible(false);
              }
              setVisible(true);
            }}
          >
            Search
          </div>
        </div>
      </div>
      {visible && (
        <div className={styles.companions}>
          {companionData.map((companion) => {
            return (
              <div className={styles.card} key={companion.id}>
                <Image
                  src={companion.image}
                  width={200}
                  height={200}
                  alt=""
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
      )}
    </>
  );
}

export default Companion;
