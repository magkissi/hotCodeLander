import React from "react";
import styles from "./pricing.module.css";

function PricingCard({ heading, earning, price, pricePeriod, features }) {
  return (
    <div
      style={{ height: heading === "Teachers" ? "750px" : "700px" }}
      className={styles.priceCard__container}
    >
      <div className={styles.priceCard__details}>
        <h2>{heading}</h2>
        <p>{earning}</p>
        <p>{price}</p>
        <p>{pricePeriod}</p>
      </div>
      <ul>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCard;
