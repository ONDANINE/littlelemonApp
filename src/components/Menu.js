import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <main className={styles.menuLayout}>
          <button>Our Menu</button>
          <div className={styles.popularMenuLayout}>
            <div className = {styles.menuText}>
              <h2>Popular menu</h2>
              <p>Savor our most-loved dishes, crafted with fresh ingredients and bold flavors. Perfect for dine-in, takeaway, or delivery — always satisfying and always popular.</p>
            </div>
            <div className={styles.popularMenuCardGrid}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
            <button> Order Dish</button>
          </div>
        </main>
    )
};
