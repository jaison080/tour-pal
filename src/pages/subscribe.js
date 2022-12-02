import Image from "next/image";
import React from "react";
import styles from "../styles/Subscribe.module.css";
import { Navbar } from "../components";
import subscriptionData from "../data/subscriptionData";
function Subscribe() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Subscriptions</h1>
        <div className={styles.search}>
          <input type="text" name="search" placeholder="Enter your Need" />
          <div className={styles.search_btn}>Search</div>
        </div>
        <h1>Our Uniqueness</h1>
        <div className={styles.unique}>
          <div className={styles.items}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              ullam fugit id, est, doloremque voluptate magnam, ab autem
              reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et
              iste veritatis in.
            </p>
          </div>
          <div className={styles.items}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              ullam fugit id, est, doloremque voluptate magnam, ab autem
              reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et
              iste veritatis in.
            </p>
          </div>
          <div className={styles.items}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              ullam fugit id, est, doloremque voluptate magnam, ab autem
              reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et
              iste veritatis in.
            </p>
          </div>
          <div className={styles.items}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              ullam fugit id, est, doloremque voluptate magnam, ab autem
              reprehenderit porro cupiditate magni ipsa vero voluptates vel. Et
              iste veritatis in.
            </p>
          </div>
        </div>
        <h1>Cars Available</h1>
        <div className={styles.carsection}>
          {subscriptionData.map((item) => {
            return (
              <>
                <div className={styles.car_card}>
                  <Image className={styles.images} src={item.image} alt="" />
                  <div className={styles.car_name}>{item.name}</div>
                  <div>
                    Fuel Type : <b>{item.fuel}</b>
                  </div>
                  <div>
                    Gear Transmission : <b>{item.gear}</b>
                  </div>
                  <div>
                    Time Period : <b>{item.time}</b> Months
                  </div>
                  <div>
                    No: of Seats : <b>{item.seats}</b>
                  </div>
                  <div>
                    Price : <b>{item.price}/-</b>
                  </div>
                  <div className={styles.bookbtn}>Subscribe Now</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
