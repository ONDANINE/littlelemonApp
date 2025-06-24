import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroLayout}>
          <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <button>Looking for a table?</button>
        </section>
    )
};
