import React, { useState } from "react";
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setSignedInUser(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  async function signOutOfGoogle() {
    signOut(auth)
      .then(() => {
        router.push("/");
        window.location.reload();
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  async function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        return result;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return error;
        // ...
      });
    // Destructure login and logout function
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
              <a href="/" className={styles.current}>
                Home
              </a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              {signedInUser ? (
                <div>
                  <Image
                    src={signedInUser.photoURL}
                    alt=""
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%" }}
                  />{" "}
                </div>
              ) : (
                <div className={styles.loginbtn} onClick={signInWithGoogle}>
                  Login
                </div>
              )}
            </li>
            {signedInUser ? (
              <div className={styles.loginbtn} onClick={signOutOfGoogle}>
                Logout
              </div>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
