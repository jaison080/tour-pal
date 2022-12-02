import React, { useState } from "react";
import CustomTitle from "../utils/customTitle";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Navbar } from "../components";
import { useRouter } from "next/router";
import { foodData } from "../data";
function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(foodData);
  const handleSearch = (query) => {
    if (query !== null) {
      const modified = foodData.filter((item) =>
        item.food.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(modified);
    } else {
      setSearchResults(foodData);
    }
  };
  return (
    <>
      <CustomTitle title={"Home"} />
      <Navbar />
      <div className={styles.main_container}>
        <h1>Home</h1>
        <div className={styles.search}>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(query);
            }}
            type="text"
            name="search"
            placeholder="Enter your Need"
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
        <div className={styles.contents}>
          <div className={styles.food_section}>
            {searchResults.map((item) => {
              return (
                <div className={styles.items}>
                  <Image
                    src={item.img}
                    width={200}
                    alt=""
                    style={{ borderRadius: "20px" }}
                  />
                  <div className={styles.details}>
                    <h2 style={{ color: "rgb(38, 133, 189)" }}>{item.food}</h2>
                    <h3>{item.title}</h3>
                    <h4>{item.location}</h4>
                    <br />
                  </div>
                  <div
                    className={styles.loginbtn}
                    onClick={() => {
                      router.push("/complete");
                    }}
                  >
                    Book Now
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
