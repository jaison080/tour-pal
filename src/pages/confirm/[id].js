import Image from "next/image";
import React from "react";
import styles from "../../styles/Confirm.module.css";
import car from "../../assets/vectors/car.jpg";
import { useRouter } from "next/router";
import vehicleData from "../../data/vehicleData";
import { Navbar } from "../../components";
import confirmData from "../../data/confirmdata";
function Confirm() {
  const router = useRouter();
  const { id } = router.query;
  const data = vehicleData[id - 1];
  console.log(data);
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.left_section}>
          <div className={styles.top_section}>
            <div className={styles.top_section_left}>
              <h1 style={{ color: "rgb(54, 156, 151)" }}>{data?.name}</h1>
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
              <h3 style={{ color: "rgb(54, 156, 151)" }}>BOOKING DETAILS</h3>
              <div className={styles.top_section_right_date}>
                <h3>Wed 14 Dec 2022</h3>
                <div className={styles.to}>
                  <h3 style={{ color: "rgb(54, 156, 151)" }}>to</h3>
                </div>
                <h3>Wed 21 Dec 2022</h3>
              </div>
              <h2 style={{ color: "rgb(54, 156, 151)" }}>7 days</h2>
              <h3 style={{ color: "rgb(54, 156, 151)" }}>Pune</h3>
            </div>
          </div>
          <div className={styles.bottom_section}>
            <div className={styles.header}>Important Points To Remember</div>
            <div className={styles.bottom_table}>
              {confirmData.map((item) => {
                return (
                  <>
                    <div className={styles.card}>
                      <h3 className={styles.table_head}>{item.title}</h3>
                      <div className={styles.table_data}>{item.desc}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.right_section}>
          <div className={styles.bottom_section}>
            <div className={styles.header}>Fare Details</div>
            <div className={styles.bottom_table}>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>Base Fare</h3>
                <div className={styles.table_data}>{data?.price}/-</div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                  Doorstep Delivery and Pickup
                </h3>
                <div className={styles.table_data}>400/-</div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                  Insurance and GST
                </h3>
                <div className={styles.table_data}>Included</div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                  Refundable Security Deposit
                </h3>
                <div className={styles.table_data}>2000/-</div>
              </div>
              <hr/>
              <div className={styles.card_1}>
                <h3 className={styles.table_head} style={{ color: "rgb(54, 156, 151)" }}>
                  Total
                </h3>
                <div className={styles.table_data}><b>6000/-</b></div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                  Kms Limit
                </h3>
                <div className={styles.table_data}>2166 kms</div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                  Fuel
                </h3>
                <div className={styles.table_data}>Excluded</div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                  Extra kms Charge
                </h3>
                <div className={styles.table_data}>12/- per km</div>
              </div>
              <div className={styles.card_1}>
                <h3 className={styles.table_head}>
                 Tolls,Parking and Inter-State Taxes
                </h3>
                <div className={styles.table_data}>To be Paid by you</div>
              </div>
              <hr/>
            </div>
          </div>
          <div className={styles.loginbtn} onClick={()=>{
            router.push('/complete')
          }}>Confirm Booking</div>
        </div>
      </div>
    </>
  );
}

export default Confirm;
