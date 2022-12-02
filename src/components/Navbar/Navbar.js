import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../utils/firebase";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [signedInUser, setSignedInUser] = useState();
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setSignedInUser(user);
      } else {
      }
    });
  });

  async function signOutOfGoogle() {
    signOut(auth)
      .then(() => {
        router.push("/");
        window.location.reload();
      })
      .catch((error) => {});
  }
  async function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        return result;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return error;
      });
  }
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <a href="/">TourPal</a>
          </h1>
          <ul>
            <li>
              {signedInUser ? (
                <div className={styles.profile}>
                  <li>
                    <a href="/profile" className={styles.current}>
                      My Profile
                    </a>
                  </li>
                  <div>
                    <Image
                      src={signedInUser.photoURL}
                      alt=""
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%" }}
                    />{" "}
                  </div>
                  <div className={styles.loginbtn} onClick={signOutOfGoogle}>
                    Logout
                  </div>
                </div>
              ) : (
                <div className={styles.loginbtn} onClick={signInWithGoogle}>
                  Login
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
