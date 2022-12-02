import Image from "next/image";
import React from "react";
import styles from "../styles/peershare.module.css";
import car from '../assets/vectors/car.jpg'
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
        <div className={styles.carsection}>
          <div className={styles.car_card}>
            <Image className={styles.images} src={car} alt="" />
            <div>petrol</div>
            <div>details</div>
            <div>per day/rate</div>
            <button className={styles.bookbtn}>book now</button>
          </div>
          <div className={styles.car_card}>
            <Image className={styles.images} src={car} alt="" />
            <div>petrol</div>
            <div>details</div>
            <div>per day/rate</div>
            <button className={styles.bookbtn}>book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default peershare;
