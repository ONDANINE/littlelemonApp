import React from "react";
import styles from "./Feedback.module.css";


export default function Feedback() {
    return (
        <section className="Feedback">
          <h2>Feed back</h2>
          <h3>Opinions</h3>
          <p>We value your feedback!</p>
          <button>Reviews</button>
          <article>
            <blockquote>"Best restaurant experience ever!" - Jane Doe</blockquote>
            <blockquote>"The food was amazing and the service was top-notch!" - John Smith</blockquote>
          </article>
        </section>
    )
};
