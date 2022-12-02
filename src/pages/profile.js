import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { Navbar } from "../components";
import app from "../utils/firebase";
import styles from "../styles/Profile.module.css";
import Image from "next/image";

function Profile() {
  const [signedInUser, setSignedInUser] = useState();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setSignedInUser(user);
      console.log(user);
    } else {
    }
  });
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profile__image}>
            <Image
              src={signedInUser?.photoURL}
              alt="profile"
              style={{ borderRadius: "50%" }}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.profile__details}>
            <h1>{signedInUser?.displayName}</h1>
            <h3>{signedInUser?.email}</h3>
          </div>
          <div className={styles.profile__logout}>
            <div>Logout</div>
          </div>
          <div>My Bookings</div>

          <div className={styles.right_section}>
            <div className={styles.bottom_section}>
              <div className={styles.header}>important point to remember</div>
              <div className={styles.bottom_table}>
                <div className={styles.table_head}>changing bottom plan</div>
                <div className={styles.table_data}>changing bottom plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
