import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <section className={styles.menuLayout}>
          <button>Our Menu</button>
          <div className={styles.popularMenuCard}>>
            <h2>Popular menu</h2>
            <p>Description</p>
            <article>List of popular dishes</article>
            <button> Order Dish</button>
          </div>
        </section>
    )
};
