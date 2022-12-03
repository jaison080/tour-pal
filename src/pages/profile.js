import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Navbar } from "../components";
import app from "../utils/firebase";
import styles from "../styles/Profile.module.css";
import Image from "next/image";
import { bookingData } from "../data";
import { useRouter } from "next/router";
function Profile() {
  const [signedInUser, setSignedInUser] = useState();
  const auth = getAuth(app);
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setSignedInUser(user);
      console.log(user);
    } else {
    }
  });
  async function signOutOfGoogle() {
    signOut(auth)
      .then(() => {
        router.push("/");
        window.location.reload();
      })
      .catch((error) => {});
  }
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
          <div
            className={styles.profile__logout}
            onClick={() => {
              signOutOfGoogle();
              router.push("/");
            }}
          >
            Logout
          </div>

          <div className={styles.right_section}>
            <div className={styles.bottom_section}>
              <h1 className={styles.header}>My Bookings</h1>
              <div className={styles.bottom_table}>
                {bookingData.map((items) => {
                  return (
                    <>
                      <div className={styles.main_row} key={items.id}>
                        <div className={styles.row}>
                          <div className={styles.table_head}>
                            <b>Name : </b>
                          </div>
                          <div className={styles.table_data}>{items.name}</div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.table_head}>
                            <b>Booking ID : </b>
                          </div>
                          <div className={styles.table_data}>
                            {items.bookingId}
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.table_head}>
                            <b>Date : </b>
                          </div>
                          <div className={styles.table_data}>{items.date}</div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.table_head}>
                            <b>Delivery : </b>
                          </div>
                          <div className={styles.table_data}>
                            {items.delivery}
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.table_head}>
                            <b>Pickup : </b>
                          </div>
                          <div className={styles.table_data}>
                            {items.pickup}
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.table_head}>
                            <b>Status : </b>
                          </div>
                          <div className={styles.table_data}>
                            {items.status}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
