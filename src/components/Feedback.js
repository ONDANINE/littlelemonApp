import React from "react";
import styles from "./Feedback.module.css";
import feedbacks from '../data/APIfeedback';
import { IconName } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


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
            {feedbacks.map(feedback => (
                <div key={feedback.id} className={styles.feedbackCard}>
                  <div className={styles.feedbackHead}>
                    <div className={styles.feedbackImageContainer}>
                      <img src={feedback.avatar} alt={feedback.name} className={styles.feedbackImage} />
                    </div>
                    <div className={styles.feedbackNameDate}>
                      <p>{feedback.name}</p>
                      <p>{feedback.date}</p>
                    </div>
                  </div>
                  <div className = {styles.starContainer}>
                    <FaStar className = {styles.starIcon} />
                    <FaStar className = {styles.starIcon} />
                    <FaStar className = {styles.starIcon} />
                    <FaStar className = {styles.starIcon} />
                    <FaStar className = {styles.starIcon} />
                  </div>
                  <div className = {styles.feedbackText}>
                    <p className = {styles.quoteText}>" {feedback.quote} "</p>
                    <p className={styles.feedbackDescription}>{feedback.description}</p>
                  </div>
                </div>
              ))
            }
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
