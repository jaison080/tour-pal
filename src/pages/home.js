import React from "react";
import CustomTitle from "../utils/customTitle";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import food from "../assets/vectors/car.jpg";
function Home() {
  return (
    <>
      <CustomTitle title={"Home"} />
      <div className={styles.main_container}>
        <div className={styles.search}>
          <input type="text" name="search" placeholder="Enter your Need" />
          <div className={styles.search_btn}>Search</div>
        </div>
        <div className={styles.contents}>
          <div className={styles.filter_section}>filter section</div>
          <div className={styles.food_section}>
            <div className={styles.header}>food sectioin</div>
            <div className={styles.items}>
              <Image src={food} />
              <div className={styles.details}>
              <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate adipisci? Dolorum nostrum, labore qui, placeat iste architecto dolorem ex veniam itaque molestiae incidunt voluptatum, est quia at minus quibusdam?</div>
              <div className={styles.book_food}>book now</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
