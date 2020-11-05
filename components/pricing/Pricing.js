import React from "react";
import PricingCard from "./PricingCard";
import styles from "./pricing.module.css";
import { packages } from "../../utils/data";

function Pricing() {
  return (
    <div className={styles.price__container}>
      <h1>Pricing</h1>
      <div className={styles.price__details}>
        {packages.map((plan) => (
          <PricingCard
            heading={plan.heading}
            earning={plan.earning}
            price={plan.price}
            pricePeriod={plan.pricePeriod}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
