import React from "react";
import styles from "./Offer.module.css";

export default function Offer() {
    return (
        <section className={styles.offerLayout}>
          <button>Special Offers</button>
          <div className={styles.exclusiveMembers}>
            <h2>Exclusive to members</h2>
            <p>Description</p>
            <article>List of offerings</article>
            <button>Join Members</button>
          </div>
        </section>
    )
};
