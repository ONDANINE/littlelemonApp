import React from "react";
import styles from "./Offer.module.css";

export default function Offer() {
    return (
        <main className={styles.offerLayout}>
          <button>Special Offers</button>
          <div className={styles.exclusiveMembers}>
            <div className = {styles.memberText}>
              <h2>Exclusive to members</h2>
              <p>Get points for dining in, takeout and even delivery. All our offers and promotions are offered exclusively to LITTLE LEMON members </p>
            </div>
            <article>List of offerings</article>
            <button>Join Members</button>
          </div>
        </main>
    )
};
