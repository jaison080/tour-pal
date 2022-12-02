import { useRouter } from "next/router";
import React from "react";
import { Navbar } from "../components";
import styles from "../styles/Complete.module.css";
function Complete() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.container}>
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
