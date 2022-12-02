import React from "react";
import styles from "../styles/peershare.module.css";
function peershare() {
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
          <button id={styles.search}>search</button>
            </form>
         
        </div>
          <h1>our uniqueness</h1>
        <div className={styles.unique}>
          <div className={styles.items}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugit id, est, doloremque voluptate magnam, ab autem reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et iste veritatis in.</p>
          </div>
          <div className={styles.items}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugit id, est, doloremque voluptate magnam, ab autem reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et iste veritatis in.</p>
          </div>
          <div className={styles.items}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugit id, est, doloremque voluptate magnam, ab autem reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et iste veritatis in.</p>
          </div>
          <div className={styles.items}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugit id, est, doloremque voluptate magnam, ab autem reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et iste veritatis in.</p>
          </div>
        </div>
        <div className="carserction">
          <div className="car_card">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default peershare;
