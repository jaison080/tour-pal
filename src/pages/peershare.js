import React from "react";
import styles from "../styles/Peershare.module.css";
function PeerShare() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.search}>
          <form action="">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="enther your need"
            />
            <button>search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PeerShare;
