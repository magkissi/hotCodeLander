import React from "react";
import Card from "./Card";
import styles from "./services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <Card
        image="/username_icon.png"
        heading="Teachers"
        details="Teach at your convenience and earn extra money doing what you love"
        text="Apply Now"
      />
      <div className={styles.card2}>
        <Card
          image="/username_icon.png"
          heading="Teachers"
          details="Teach at your convenience and earn extra money doing what you love"
          text="Apply Now"
        />
      </div>
      <Card
        image="/username_icon.png"
        heading="Teachers"
        details="Teach at your convenience and earn extra money doing what you love"
        text="Apply Now"
      />
    </div>
  );
}

export default Services;
