import Image from "next/image";
import React from "react";
import styles from "../../styles/Confirm.module.css";
import car from "../../assets/vectors/car.jpg";
import { useRouter } from "next/router";
import vehicleData from "../../data/vehicleData";
import { Navbar } from "../../components";
function Confirm() {
  const router = useRouter();
  const { id } = router.query;
  const data = vehicleData[id - 1];
  console.log(data);
  return (
    <>
    <Navbar/>
    <div className={styles.main_container}>
      <div className={styles.left_section}>
        <div className={styles.top_section}>
          <div className={styles.top_section_left}>
            <h1 style={{color:"rgb(54, 156, 151)"}}>{data?.name}</h1>
            <Image src={data?.image} width={300} alt="" />
            <div>
              Fuel Type : <b>{data?.fuel}</b>
            </div>
            <div>
              Gear Transmission : <b>{data?.gear}</b>
            </div>
            <div>
              No: of Seats : <b>{data?.seats}</b>
            </div>
          </div>
          <div className={styles.top_section_right}>
            <h3  style={{color:"rgb(54, 156, 151)"}}>BOOKING DETAILS</h3>
            <div className={styles.top_section_right_date}>
              <h3>Wed 14 Dec 2022</h3>
              <div className={styles.to}>
                <h3  style={{color:"rgb(54, 156, 151)"}}>to</h3>
              </div>
              <h3>Wed 21 Dec 2022</h3>
            </div>
            <h2  style={{color:"rgb(54, 156, 151)"}}>7 days</h2>
            <h3  style={{color:"rgb(54, 156, 151)"}}>Pune</h3>
          </div>
        </div>
        <div className={styles.bottom_section}>
          <div className={styles.header}>important point to remember</div>
          <div className={styles.bottom_table}>
            <div className={styles.table_head}>changing bottom plan</div>
            <div className={styles.table_data}>changing bottom plan</div>
          </div>
        </div>
      </div>
      <div className={styles.right_section}>
        <div className={styles.bottom_section}>
          <div className={styles.header}>important point to remember</div>
          <div className={styles.bottom_table}>
            <div className={styles.table_head}>changing bottom plan</div>
            <div className={styles.table_data}>changing bottom plan</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Confirm;
