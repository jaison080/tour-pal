import React from "react";
import faqData from "../../data/faqData";
import styles from "./Faq.module.css";
function Faq() {
  return (
    <div className={styles.faq_container}>
      <div className={styles.heading}>FAQ</div>
      <div className={styles.contianer}>
        {faqData.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.title}>{item.question}</div>
              <br />
              <div className={styles.answer}>{item.answer}</div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
