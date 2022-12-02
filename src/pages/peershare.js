import Image from "next/image";
import React from "react";
import styles from "../styles/Peershare.module.css";
import vehicleData from "../data/vehicleData";
import { Navbar } from "../components";
import { useRouter } from "next/router";
function Peershare() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Peer Share</h1>
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
          {vehicleData.map((item) => {
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
                    No: of Seats : <b>{item.seats}</b>
                  </div>
                  <div>
                    Price : <b>{item.price}/-</b> per 200km
                  </div>
                  {item.isSold ? (
                    <div className={styles.sold}>Sold Out</div>
                  ) : (
                    <div
                      className={styles.bookbtn}
                      onClick={() => {
                        router.push(`/confirm/${item.id}`);
                      }}
                    >
                      Book Now
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Peershare;
