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
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setSignedInUser(user);
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
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
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
