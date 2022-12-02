import React from "react";
import CustomTitle from "../utils/customTitle";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import food from "../assets/vectors/car.jpg";
import { Navbar } from "../components";
function Home() {
  return (
    <>
      <CustomTitle title={"Home"} />
      <Navbar/>
      <div className={styles.main_container}>
        <div className={styles.search}>
          <input type="text" name="search" placeholder="Enter your Need" />
          <div className={styles.search_btn}>Search</div>
        </div>
        <div className={styles.contents}>
          {/* <div className={styles.filter_section}>filter section</div> */}
          <div className={styles.food_section}>
            <div className={styles.items}>
              <Image src={food} width={200} alt="" />
              <div className={styles.details}>
                <h2 style={{ color: "rgb(38, 133, 189)" }}>Fish Curry Meals</h2>
                <h3 >Kudakkachira House</h3>
                <h4 >Kolayad , Kannur</h4>
                <br />
              </div>
              <div className={styles.loginbtn}>Book Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
