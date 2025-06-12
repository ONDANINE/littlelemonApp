import React from "react";
import styles from "./Offer.module.css";

export default function Offer() {
    return (
        <section className="Offer">
          <button>Special Offers</button>
          <div className="Exclusive-members">
            <h2>Exclusive to members</h2>
            <p>Description</p>
            <article>List of offerings</article>
            <button>Join Members</button>
          </div>
        </section>
    )
};
