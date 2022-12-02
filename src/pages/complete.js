import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Navbar } from "../components";
import styles from "../styles/Complete.module.css";
import tick from "../assets/icons/tick.gif";
function Complete() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Image src={tick} alt="" />
        <h1>Booking Confirmed...</h1>
        <h2>We will contact you back soon....</h2>
        <div
          className={styles.button}
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back to Home
        </div>
      </div>
    </>
  );
}

export default Complete;
