import React from "react";
import styles from "./Feedback.module.css";
import { IconName } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";




export default function Feedback() {
    return (
        <div className={styles.feedbackLayout}>
          <h2>Feed back</h2>
          <div className={styles.feedbackArea}>
            <div className={styles.textArea}>
              <h3>Opinions</h3>
              <p>We’re Little Lemon - We love hearing from our guests and growing with your feedback.</p>
            </div>
            <button>Reviews</button>
          </div>
          <div className={styles.reviewCards}>
          </div>
          <div className={styles.buttonsGroup}>
            <button className={styles.BTN}>
              <GoChevronLeft className={styles.leftrightBTN}/>
            </button>
            <button className={styles.BTN}>
              <GoChevronRight className={styles.leftrightBTN}/>
            </button>
          </div>
        </div>
    )
};
