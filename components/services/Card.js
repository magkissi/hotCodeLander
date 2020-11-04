import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

function Card({ heading, details, text, description, image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={description}></img>
      <p id={styles.heading}>{heading}</p>
      <div id={styles.details}>
        <p>{details}</p>
      </div>
      <a href="/">{text} > </a>
    </div>
  );
}

export default Card;
