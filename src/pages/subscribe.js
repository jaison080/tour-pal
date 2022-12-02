import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Subscribe.module.css";
import { Navbar } from "../components";
import Link from "next/link";
import { subscriptionData } from "../data";
function Subscribe() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(subscriptionData);
  const handleSearch = (query) => {
    if (query !== null) {
      const modified = subscriptionData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(modified);
    } else {
      setSearchResults(subscriptionData);
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Subscriptions</h1>
        <div className={styles.search}>
          <input
            type="text"
            name="search"
            placeholder="Enter your Need"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(query);
            }}
          />
          <div
            className={styles.search_btn}
            onClick={() => {
              handleSearch(query);
            }}
          >
            Search
          </div>
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
          {searchResults.map((item) => {
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
                  <Link href={item.link} target="_blank" rel="noreferrer">
                    <div className={styles.bookbtn}>Subscribe Now</div>
                  </Link>
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
