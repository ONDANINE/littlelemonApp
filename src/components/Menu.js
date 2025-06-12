import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <section className="Menu">
          <button>Our Menu</button>
          <div className="Popular-Menus">
            <h2>Popular menu</h2>
            <p>Description</p>
            <article>List of popular dishes</article>
            <button> Order Dish</button>
          </div>
        </section>
    )
};
