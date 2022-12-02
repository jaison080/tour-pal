import Image from 'next/image'
import React from 'react'
import styles from '../styles/confirm.module.css'
import car from '../assets/vectors/car.jpg'
function confirm() {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_section}>
        <div className={styles.top_section}>
            <Image src={car}/>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sit natus sequi voluptatem enim, placeat officia cupiditate nihil accusamus, nobis est nesciunt eius labore voluptates. Sequi voluptate beatae ad unde!</div>
        </div>
        <div className={styles.bottom_section}>
            <div className={styles.header}>important point to remember</div>
            <div className={styles.bottom_table}>
                <div className={styles.table_head}>
                    changing bottom plan
                </div>
                <div className={styles.table_data}>
                    changing bottom plan
                </div>
            </div>
        </div>
      </div>
      <div className={styles.right_section}>
      <div className={styles.bottom_section}>
            <div className={styles.header}>important point to remember</div>
            <div className={styles.bottom_table}>
                <div className={styles.table_head}>
                    changing bottom plan
                </div>
                <div className={styles.table_data}>
                    changing bottom plan
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default confirm
