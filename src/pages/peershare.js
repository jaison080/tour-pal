import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Peershare.module.css";
import { Featured, Navbar, Offers, Sanitized, Why } from "../components";
import { useRouter } from "next/router";
import { vehicleData } from "../data";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
function Peershare() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cars, setCars] = useState([]);
  const [searchResults, setSearchResults] = useState(cars);
  const handleSearch = (query) => {
    if (query !== null) {
      const modified = cars.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(modified);
    } else {
      setSearchResults(cars);
    }
  };
  useEffect(() => {
    getCars();
    console.log(cars);
  },[])
  async function getCars(){
    let temp=[]
    const querySnapshot = await getDocs(collection(db, "peercars"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      temp.push(doc.data())
    });
    setCars(temp)
    
  }
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Peer Share</h1>
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
          {cars.map((item) => {
            return (
              <>
                <div className={styles.car_card}>
                  <img className={styles.images} src={item.image} alt="" width={300} height={300}/>
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
      <Featured />
      <Sanitized />
      <Offers />
      <Why />
    </div>
  );
}

export default Peershare;
