import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
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
              <button className={styles.loginbtn}>Login</button>
            </li> 
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
